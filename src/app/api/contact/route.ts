import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, email, company, subject, message } = data;

    const emailResponse = await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>",
      to: "dallas.cohrs@gmail.com", // change to your own email
      subject: `New message from ${name} - ${subject}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "N/A"}
        Subject: ${subject}
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, emailResponse });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
