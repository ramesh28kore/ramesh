import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const schema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(2000),
});

export async function POST(request: NextRequest) {
  // Validate Content-Type
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 415 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  // Validate with Zod
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: result.error.issues },
      { status: 422 }
    );
  }

  const { name, email, subject, message } = result.data;

  // Require SMTP configuration
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP environment variables are not configured.');
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact the administrator directly.' },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const toEmail = process.env.CONTACT_TO_EMAIL ?? process.env.SMTP_USER;

  // Sanitize content for HTML (prevent injection into email body)
  const safe = (str: string) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  try {
    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to:       toEmail,
      replyTo:  email,
      subject: `[Portfolio] ${safe(subject)}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#3b82f6">New Portfolio Contact Message</h2>
          <table cellpadding="8" style="width:100%;border-collapse:collapse">
            <tr><td><strong>Name:</strong></td><td>${safe(name)}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${safe(email)}</td></tr>
            <tr><td><strong>Subject:</strong></td><td>${safe(subject)}</td></tr>
          </table>
          <hr style="margin:16px 0;border-color:#e2e8f0"/>
          <h3>Message:</h3>
          <p style="white-space:pre-wrap">${safe(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    );
  }
}
