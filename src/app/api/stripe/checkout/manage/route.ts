import stripe from "@/lib/stripe";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST() {
  const user = await getCurrentUser();

  if (!user || !user.stripeCustomerId) {
    return NextResponse.json(
      { error: "Unauthorized or missing customer ID" },
      { status: 401 }
    );
  }

  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: process.env.NEXT_PUBLIC_APP_URL + "/dashboard",
  });

  return NextResponse.redirect(stripeSession.url);
}
