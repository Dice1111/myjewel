

import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_ADDRESS as string,
      subject: 'Hello world',
      react: EmailTemplate({ email: email }), 
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
