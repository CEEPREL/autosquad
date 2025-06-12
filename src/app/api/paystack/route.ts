// app/api/paystack/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log(
    "data:",
    data,
    "process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY:",
    process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY
  );
  try {
    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(responseData, { status: response.status });
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Paystack API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
