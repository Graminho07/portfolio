import "dotenv/config";
import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();

const corsOptions = {
  origin: ["http://localhost:8080"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (_req, res) => {
  res.status(200).json({ ok: true, service: "portfolio-api" });
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "liaragraminhovictor@gmail.com",
      replyTo: email,
      subject: `Nova mensagem de ${name}`,
      html: `<p>${message}</p>`,
    });

    if ((result as any).error) {
      return res.status(400).json({ success: false, error: (result as any).error });
    }

    return res.json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ success: false, error: String(error) });
  }
});

app.listen(3001, () => {
  console.log("API running on http://localhost:3001");
});