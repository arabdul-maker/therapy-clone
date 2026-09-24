import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      appointmentType,
      preferredDate,
      preferredTime,
      message,
    } = body;

    // Basic validation
    if (
      !fullName ||
      !email ||
      !phone ||
      !appointmentType ||
      !preferredDate ||
      !preferredTime
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Send appointment notification
    const { data, error } = await resend.emails.send({
      from: "Appointment Website <onboarding@resend.dev>",

      // CHANGE THIS to your Gmail address
      to: ["itslucifer87@gmail.com"],

      subject: `New Appointment Request - ${fullName}`,

      html: `
        <h2>New Appointment Request</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Appointment Type:</strong> ${appointmentType}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>

        <h3>Message</h3>
        <p>${message || "No additional message provided."}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send appointment request.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Appointment request sent successfully!",
      data,
    });
  } catch (error) {
    console.error("Server error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}