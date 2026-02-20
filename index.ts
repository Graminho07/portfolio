import "dotenv/config";
import express from "express";
import cors from "cors";
import { Resend } from "resend";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true, service: "portfolio-api" });
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Campos obrigatórios não preenchidos",
      });
    }

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "liaragraminhovictor@gmail.com",
      replyTo: email,
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    if ((result as any)?.error) {
      return res.status(400).json({
        success: false,
        error: (result as any).error,
      });
    }

    return res.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);

    return res.status(500).json({
      success: false,
      error: "Erro interno do servidor",
    });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});