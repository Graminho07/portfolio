const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function sendEmailAction(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(`${API_URL}/api/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Falha ao enviar e-mail");
  }

  return response.json();
}