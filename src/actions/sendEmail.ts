export async function sendEmailAction(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Falha ao enviar e-mail");
  }

  return data;
}