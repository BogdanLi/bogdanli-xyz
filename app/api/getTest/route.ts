import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function GET(request: Request) {
  try {
    // return NextResponse.json(
    //   { message: "Email sent successfully" },
    //   { status: 200 },
    // );
    return NextResponse.json({ message: "Hello" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
