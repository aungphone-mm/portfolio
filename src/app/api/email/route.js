import { NextResponse } from 'next/server';

export async function POST(request) {
  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json({ error: 'API key not configured.' }, { status: 503 });
  }

  try {
    const { thoughts, tone, context } = await request.json();

    if (!thoughts || !tone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const prompt = `Transform these raw thoughts into a polished ${tone} email:\n\n${thoughts}${context ? `\n\nContext - Original email to reply to:\n${context}` : ''}\n\nWrite a professional email with proper greeting, body, and closing. Return only the email text, no extra commentary.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || 'AI service error' }, { status: response.status });
    }

    return NextResponse.json({ email: data.choices[0].message.content });
  } catch (err) {
    console.error('[Email API]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
