import "dotenv/config";
import express from "express";
import cors from "cors";
  import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true, service: "portfolio-api" });
});

app.post("/api/send-email", (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Campos obrigatórios não preenchidos",
      });
    }

    console.info("Contato recebido (modo local):", { name, email, message });

    return res.json({
      success: true,
      simulated: true,
      message: "Mensagem recebida em modo local.",
    });
  } catch (error) {
    console.error("Erro ao tratar contato:", error);

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
