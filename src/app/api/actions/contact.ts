export async function sendContactEmail(formData: unknown) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errData.error || `HTTP error! status: ${response.status}`,
      };
    }

    return await response.json();
  } catch (error: any) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      error: error.message || "Failed to formulate connection.",
    };
  }
}
