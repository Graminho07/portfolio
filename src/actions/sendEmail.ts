export async function sendEmailAction(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/send-email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Resposta inválida do servidor");
  }

  if (!response.ok) {
    throw new Error(data?.error || "Falha ao enviar e-mail");
  }

  return data;
}