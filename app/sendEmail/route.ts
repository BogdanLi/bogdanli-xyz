import { sendEmail } from "@/lib/email";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, text } = req.body;

    try {
      await sendEmail({ to, subject, text });
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
