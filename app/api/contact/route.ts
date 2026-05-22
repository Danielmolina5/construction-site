import { NextResponse, type NextRequest } from "next/server";
import { contactSchema } from "@/lib/schema";

// Simple in-memory rate limiter (per server instance).
// For production, replace with Upstash/Redis-backed limiter.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const rateMap = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, remaining: MAX_REQUESTS - 1 };
  }
  if (entry.count >= MAX_REQUESTS) {
    return { ok: false, remaining: 0 };
  }
  entry.count += 1;
  return { ok: true, remaining: MAX_REQUESTS - entry.count };
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    const limited = rateLimit(ip);
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const json = await req.json().catch(() => null);
    if (!json) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = parsed.data;

    // Server-side notification. In production wire this to Resend / Postmark / SendGrid.
    // For now, log structured data — Vercel & local dev will both capture this.
    console.log("[contact:new]", {
      receivedAt: new Date().toISOString(),
      ip,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      message: data.message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact:error]", error);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}

export const runtime = "nodejs";
