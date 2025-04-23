export async function sendEmailNotification(email: string) {
  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      console.error("Failed to send email");
    }

    return await res.json();
  } catch (err) {
    console.error("Error sending email:", err);
  }
}
