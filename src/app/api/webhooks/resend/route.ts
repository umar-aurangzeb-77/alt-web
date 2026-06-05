import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Webhook } from "svix";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);
const webhookSecret = env.RESEND_WEBHOOK_SECRET;

interface ResendWebhookPayload {
  type: string;
  data: {
    to: string[];
    error?: {
      message?: string;
    };
    tags?: {
      visitor_email?: string;
    };
  };
}

export async function POST(request: Request) {
  // Fail early if the secret is missing from environment variables
  if (!webhookSecret) {
    console.error("Missing RESEND_WEBHOOK_SECRET env variable.");
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 },
    );
  }

  // Extract Svix headers required for verification
  const headerPayload = request.headers;
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If headers are missing, reject the request immediately
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json(
      { error: "Missing svix headers" },
      { status: 400 },
    );
  }

  // Get the raw request body text (Svix needs the unparsed body string)
  const payloadText = await request.text();
  const wh = new Webhook(webhookSecret);

  let payload: ResendWebhookPayload;

  try {
    // Verify the cryptographic signature
    payload = wh.verify(payloadText, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as ResendWebhookPayload;
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    const eventType = payload.type;
    const emailData = payload.data;
    const recipient = emailData?.to?.[0];

    console.log(`Received Resend Webhook Event: ${eventType} for ${recipient}`);

    const failureEvents = [
      "email.bounced",
      "email.failed",
      "email.suppressed",
      "email.delivery_failed",
    ];

    if (failureEvents.includes(eventType)) {
      console.error(
        `Delivery failed. Reason: ${emailData?.error?.message || "Unknown error"}`,
      );

      // Extract original visitor's email from metadata
      const visitorEmail = emailData?.tags?.visitor_email;

      if (!visitorEmail) {
        console.warn(
          "No visitor email found in webhook tags. Cannot notify sender.",
        );
        return NextResponse.json(
          { success: false, error: "Missing tags" },
          { status: 200 },
        );
      }

      // Fire delivery failure alert to the visitor
      await resend.emails.send({
        from: "Antilinear Onboarding <onboarding@mail.antilineartech.com>",
        to: [visitorEmail],
        subject:
          "Delivery Failure: Your message to Antilinear could not be delivered",
        html: `
          <div style="background-color: #001f35; color: #f1f0ea; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; min-height: 100%;">
            <div id="email-container" style="max-width: 600px; margin: 0 auto; background-color: #002036; border: 1px solid rgba(241, 240, 234, 0.1); border-radius: 16px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
              
              <!-- Logo Header -->
              <div style="margin-bottom: 30px; text-align: center;">
                <img src="https://antilineartech.com/assets/Logo%20light%20theme.svg" alt="Antilinear Technologies" width="180" style="margin: 0 auto 10px auto; display: block; max-width: 100%; border: 0;" />
                <div style="font-family: 'Courier New', Courier, monospace; font-size: 14px; color: #f1f0ea; letter-spacing: 0.15em; font-weight: bold; text-transform: uppercase;">
                  Antilinear Technologies
                </div>
              </div>
              
              <hr style="border: 0; border-top: 1px solid rgba(241, 240, 234, 0.1); margin: 30px 0;" />
              
              <h2 style="font-size: 18px; font-weight: 700; color: #e11d48; margin-top: 0; margin-bottom: 20px; font-family: 'Courier New', Courier, monospace; letter-spacing: 0.05em; text-transform: uppercase;">
                Message Delivery Failure
              </h2>
              
              <p style="font-size: 15px; color: rgba(241, 240, 234, 0.85); line-height: 1.6; margin-bottom: 20px;">
                Hi there,
              </p>
              
              <p style="font-size: 15px; color: rgba(241, 240, 234, 0.85); line-height: 1.6; margin-bottom: 20px;">
                You recently tried to contact Antilinear Support via our website connection form. Unfortunately, our system encountered an issue, and your message could not be delivered to our support inbox.
              </p>
              
              <p style="font-size: 14px; color: rgba(241, 240, 234, 0.6); line-height: 1.6; margin-bottom: 30px;">
                Please try again or reach out to us through alternative channels if your inquiry is urgent.
              </p>
              
              <hr style="border: 0; border-top: 1px solid rgba(241, 240, 234, 0.1); margin: 30px 0;" />
              
              <!-- Footer Sign-off -->
              <div style="font-size: 11px; text-align: center; color: rgba(241, 240, 234, 0.4); font-family: 'Courier New', Courier, monospace;">
                © ${new Date().getFullYear()} ANTILINEAR TECHNOLOGIES. ALL RIGHTS RESERVED.
              </div>

            </div>
          </div>
        `,
      });

      console.log(
        `Successfully sent delivery failure alert to sender: ${visitorEmail}`,
      );
    } else if (eventType === "email.delivered") {
      console.log(`Email successfully delivered to ${recipient}`);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook Handler Failed" },
      { status: 500 },
    );
  }
}
