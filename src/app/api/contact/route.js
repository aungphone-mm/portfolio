import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real application, you would hook this up to Resend, SendGrid, or Nodemailer.
    // E.g., using Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-email@example.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // });

    // For this simulation, we'll mimic a network delay to show the loading state
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log to server console to prove it's hitting the backend
    console.log(`[Form Submission] Received message from ${name} (${email}): ${message.substring(0, 50)}...`);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
