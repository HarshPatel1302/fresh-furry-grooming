import { NextRequest, NextResponse } from "next/server";
import { bookingFormSchema, normalizePhoneNumber } from "@/lib/validations";
import { env } from "@/lib/env";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = bookingFormSchema.parse(body);
    
    // Normalize phone number
    const normalizedPhone = normalizePhoneNumber(validatedData.phone);
    
    // Prepare payload for N8N webhook
    const payload = {
      ...validatedData,
      phone: normalizedPhone,
      source: "website",
      createdAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
    };

    // Send to N8N webhook if configured
    if (env.N8N_WEBHOOK_URL) {
      try {
        const webhookResponse = await fetch(env.N8N_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!webhookResponse.ok) {
          console.error("N8N webhook failed:", webhookResponse.status, webhookResponse.statusText);
          // Don't fail the request if webhook fails, just log it
        }
      } catch (webhookError) {
        console.error("N8N webhook error:", webhookError);
        // Don't fail the request if webhook fails, just log it
      }
    }

    // Optional: Send email notification via Resend
    if (env.RESEND_API_KEY) {
      try {
        const emailPayload = {
          from: "Fresh & Furry <hello@freshandfurry.com>",
          to: ["hello@freshandfurry.com"],
          subject: `New Booking Request from ${validatedData.ownerName}`,
          html: `
            <h2>New Booking Request</h2>
            <p><strong>Pet Owner:</strong> ${validatedData.ownerName}</p>
            <p><strong>Phone:</strong> ${normalizedPhone}</p>
            <p><strong>Email:</strong> ${validatedData.email || "Not provided"}</p>
            <p><strong>Pet:</strong> ${validatedData.petName} (${validatedData.petType} - ${validatedData.breed})</p>
            <p><strong>Service:</strong> ${validatedData.service}</p>
            <p><strong>Preferred Date:</strong> ${validatedData.preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${validatedData.preferredTime}</p>
            ${validatedData.message ? `<p><strong>Message:</strong> ${validatedData.message}</p>` : ""}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          `,
        };

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailPayload),
        });
      } catch (emailError) {
        console.error("Email notification error:", emailError);
        // Don't fail the request if email fails, just log it
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking request submitted successfully! We'll contact you soon to confirm your appointment.",
        bookingId: `FF-${Date.now()}`,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Booking API error:", error);
    
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form data and try again.",
          errors: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later or call us directly.",
      },
      { status: 500 }
    );
  }
}
