"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas/contact";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  // Validate schema
  const result = contactFormSchema.safeParse(formData);
  if (!result.success) {
    return {
      success: false,
      error: "Invalid contact form data payload.",
    };
  }

  const { formType, companyName, industry, idea, email, phone } = result.data;

  const htmlContent = `
    <div style="background-color: #001f35; color: #f1f0ea; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; min-height: 100%;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #002036; border: 1px solid rgba(241, 240, 234, 0.1); border-radius: 16px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
        
        <!-- Logo Header -->
        <div style="margin-bottom: 30px; text-align: center;">
          <img src="https://antilineartech.com/assets/Logo%20light%20theme.svg" alt="Antilinear Technologies" width="180" style="margin: 0 auto 10px auto; display: block; max-width: 100%; border: 0;" />
          <div style="font-family: 'Courier New', Courier, monospace; font-size: 14px; color: #daf4ff; letter-spacing: 0.15em; font-weight: bold; text-transform: uppercase;">
            Antilinear Technologies
          </div>
        </div>
        
        <hr style="border: 0; border-top: 1px solid rgba(241, 240, 234, 0.1); margin: 30px 0;" />
        
        // <h2 style="font-size: 24px; font-weight: 700; color: #f1f0ea; margin-top: 0; margin-bottom: 20px;">
        //   New Connection Formulated
        // </h2>
        
        // <p style="font-size: 16px; color: rgba(241, 240, 234, 0.8); line-height: 1.6; margin-bottom: 30px;">
        //   An inquiry has been captured from the website contact channel. The specifications are cataloged below:
        // </p>
        
        <!-- Form Data Table -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <tbody>
            <tr style="border-bottom: 1px solid rgba(241, 240, 234, 0.1);">
              <td style="padding: 12px 0; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: rgba(241, 240, 234, 0.5); width: 35%;">CHANNEL TYPE</td>
              <td style="padding: 12px 0; font-size: 15px; font-weight: 600; color: #daf4ff; text-transform: uppercase;">${formType}</td>
            </tr>
            ${
              formType === "corporation" && companyName
                ? `
            <tr style="border-bottom: 1px solid rgba(241, 240, 234, 0.1);">
              <td style="padding: 12px 0; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: rgba(241, 240, 234, 0.5);">COMPANY</td>
              <td style="padding: 12px 0; font-size: 15px; color: #f1f0ea;">${companyName}</td>
            </tr>
            `
                : ""
            }
            <tr style="border-bottom: 1px solid rgba(241, 240, 234, 0.1);">
              <td style="padding: 12px 0; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: rgba(241, 240, 234, 0.5);">INDUSTRY</td>
              <td style="padding: 12px 0; font-size: 15px; color: #f1f0ea;">${industry}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(241, 240, 234, 0.1);">
              <td style="padding: 12px 0; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: rgba(241, 240, 234, 0.5);">EMAIL</td>
              <td style="padding: 12px 0; font-size: 15px; color: #f1f0ea;"><a href="mailto:${email}" style="color: #daf4ff; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(241, 240, 234, 0.1);">
              <td style="padding: 12px 0; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: rgba(241, 240, 234, 0.5);">CONTACT PHONE</td>
              <td style="padding: 12px 0; font-size: 15px; color: #f1f0ea;">${phone}</td>
            </tr>
          </tbody>
        </table>
        
        <!-- Idea Box -->
        <div style="margin-bottom: 30px;">
          <h4 style="font-family: 'Courier New', Courier, monospace; font-size: 12px; color: rgba(241, 240, 234, 0.5); margin-top: 0; margin-bottom: 10px; text-transform: uppercase;">Idea & Specifications</h4>
          <div style="background-color: #003256; border: 1px solid rgba(241, 240, 234, 0.1); border-radius: 8px; padding: 20px; font-size: 14px; color: #f1f0ea; line-height: 1.6; white-space: pre-wrap;">${idea}</div>
        </div>
        
        <!-- Footer Sign-off -->
        <div style="font-size: 11px; text-align: center; color: rgba(241, 240, 234, 0.4); margin-top: 40px; font-family: 'Courier New', Courier, monospace;">
          © ${new Date().getFullYear()} ANTILINEAR TECHNOLOGIES. ALL RIGHTS RESERVED.
        </div>

      </div>
    </div>
  `;

  // Determine From/To addresses. Under dev/sandbox, use sandbox addresses.
  const isProd = env.NODE_ENV === "production";
  const fromEmail =
    // isProd
    // ? "Antilinear Support <support@antilineartech.com>":
    "Antilinear Onboarding <onboarding@mail.antilineartech.com>";

  const toEmail =
    // isProd
    // ?
    ["support@antilineartech.com"];
  // : ["delivered@resend.dev"];

  // Send the email via Resend
  const { data, error } = await resend.emails.send(
    {
      from: fromEmail,
      to: toEmail,
      subject: `New Connection Formulated: ${formType === "corporation" ? companyName : "Individual"}`,
      html: htmlContent,
    },
    {
      idempotencyKey: `contact-form/${email}-${Date.now()}`,
    },
  );

  if (error) {
    console.error("Resend API Error:", error.message);
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
    data,
  };
}
