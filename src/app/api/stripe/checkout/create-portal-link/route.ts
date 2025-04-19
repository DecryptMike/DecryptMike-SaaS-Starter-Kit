import { NextResponse } from "next/server";
import  stripe  from "@/lib/stripe";
import { getCurrentUser } from "@/lib/getCurrentUser";

export async function GET() {
  const user = await getCurrentUser();
  if (!user || !user.stripeCustomerId) {
    return NextResponse.json({ error: "Unauthorized or missing customer ID" }, { status: 401 });
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
  });

  return NextResponse.json({ url: session.url });
}