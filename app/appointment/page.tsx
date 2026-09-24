"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const appointmentData = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      appointmentType: formData.get("appointmentType"),
      preferredDate: formData.get("preferredDate"),
      preferredTime: formData.get("preferredTime"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit appointment request."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Appointment submission error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#30332f]">
      {/* Header */}
      <header className="border-b border-[#dedbd3] bg-[#f7f4ee]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-semibold leading-[1.05] tracking-tight"
          >
            Conejo Valley
            <br />
            Family Counseling
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#30332f] px-5 py-2.5 text-sm font-medium transition hover:bg-[#30332f] hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Appointment Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69705f] md:text-sm">
              Schedule an appointment
            </p>

            <h1 className="mt-5 text-4xl font-medium tracking-[-0.025em] md:text-6xl">
              Let&apos;s take the first step together.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#60635d] md:text-lg">
              Complete the form below and send us your preferred appointment
              details. We&apos;ll review your request and contact you.
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mt-10 rounded-2xl border border-green-700/20 bg-green-50 px-6 py-5 text-center text-green-800">
              <h2 className="text-xl font-semibold">
                Appointment Request Received!
              </h2>

              <p className="mt-2 text-sm leading-6">
                Your appointment request has been submitted successfully.
                We&apos;ll contact you shortly.
              </p>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-10 rounded-2xl border border-red-700/20 bg-red-50 px-6 py-5 text-center text-red-800">
              <h2 className="text-xl font-semibold">
                Unable to Submit Request
              </h2>

              <p className="mt-2 text-sm leading-6">
                {errorMessage}
              </p>
            </div>
          )}

          {/* Appointment Form */}
          <form
            onSubmit={handleSubmit}
            method="post"
            className="mt-10 rounded-[2rem] border border-[#30332f]/10 bg-white p-6 shadow-sm md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold"
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-[#c9c7c0] bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#30332f]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-[#c9c7c0] bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#30332f]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-[#c9c7c0] bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#30332f]"
                />
              </div>

              {/* Appointment Type */}
              <div>
                <label
                  htmlFor="appointmentType"
                  className="mb-2 block text-sm font-semibold"
                >
                  Appointment Type *
                </label>

                <select
                  id="appointmentType"
                  name="appointmentType"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-[#c9c7c0] bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#30332f]"
                >
                  <option value="" disabled>
                    Select appointment type
                  </option>

                  <option value="Individual Therapy">
                    Individual Therapy
                  </option>

                  <option value="Couples Therapy">
                    Couples Therapy
                  </option>

                  <option value="Child Therapy">
                    Child Therapy
                  </option>

                  <option value="Teen Therapy">
                    Teen Therapy
                  </option>

                  <option value="Family Therapy">
                    Family Therapy
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="preferredDate"
                  className="mb-2 block text-sm font-semibold"
                >
                  Preferred Date *
                </label>

                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  required
                  className="w-full rounded-xl border border-[#c9c7c0] bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#30332f]"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label
                  htmlFor="preferredTime"
                  className="mb-2 block text-sm font-semibold"
                >
                  Preferred Time *
                </label>

                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  required
                  className="w-full rounded-xl border border-[#c9c7c0] bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#30332f]"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us anything you&apos;d like us to know..."
                  className="w-full resize-none rounded-xl border border-[#c9c7c0] bg-[#faf9f6] px-4 py-3 outline-none transition focus:border-[#30332f]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#30332f] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#4a4d47] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending Request..." : "Request Appointment"}
              </button>
            </div>

            {/* Notice */}
            <p className="mt-5 text-center text-xs leading-5 text-[#777970]">
              By submitting this form, you are requesting an appointment.
              Submission does not guarantee an appointment time.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}