/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((current) => !current);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="min-h-screen bg-[#F7F8F6] text-[#243447]">
      {/* =========================
          HEADER
      ========================= */}
      <header className="sticky top-0 z-50 border-b border-[#243447]/10 bg-[#F7F8F6]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="max-w-[260px] text-xl font-semibold leading-[1.05] tracking-tight"
          >
            Dr. Maya Reynolds
            <br />
            <span className="text-sm font-normal tracking-normal">
              PsyD · Clinical Psychologist
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a
              href="#about"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              About
            </a>

            <a
              href="#services"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              Specialties
            </a>

            <a
              href="#approach"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              Approach
            </a>

            <a
              href="#faqs"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              FAQs
            </a>

            <a
              href="#contact"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              Contact
            </a>

            <a
              href="/appointment"
              className="rounded-full bg-[#243447] px-5 py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#31465d]"
            >
              Book an Appointment
            </a>
          </nav>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-[60] rounded-full border border-[#243447] px-4 py-2 text-sm font-medium transition hover:bg-[#243447] hover:text-white md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#243447]/10 bg-[#F7F8F6] px-6 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#DCE8EA]"
              >
                About
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#DCE8EA]"
              >
                Specialties
              </a>

              <a
                href="#approach"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#DCE8EA]"
              >
                Approach
              </a>

              <a
                href="#faqs"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#DCE8EA]"
              >
                FAQs
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#DCE8EA]"
              >
                Contact
              </a>

              <a
                href="/appointment"
                onClick={closeMenu}
                className="mt-3 rounded-full bg-[#243447] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#31465d]"
              >
                Book an Appointment
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* =========================
          HERO
      ========================= */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:gap-16 md:py-24 lg:py-28"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C87961] md:text-sm">
            Clinical Psychologist · Santa Monica, California
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-6xl lg:text-[4.7rem]">
            Therapy for the parts of life that feel{" "}
            <em className="font-serif font-normal text-[#C87961]">
              overwhelming.
            </em>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#526170] md:text-lg">
            I’m Dr. Maya Reynolds, a licensed clinical psychologist offering
            warm, collaborative therapy for adults experiencing anxiety,
            stress, trauma, burnout, or the effects of past experiences.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-[#243447] px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#31465d]"
            >
              Book an Appointment
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-[#243447] px-7 py-4 text-sm font-semibold transition-all duration-200 hover:bg-[#DCE8EA]"
            >
              Learn About My Approach
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-[#DCE8EA]">
          <img
            src="/images/maya-office-1.jpg"
            alt="Dr. Maya Reynolds therapy office in Santa Monica"
            className="h-[430px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[600px]"
          />
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}
      <section
        id="about"
        className="bg-[#DCE8EA] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/maya-reynolds.jpg"
                alt="Dr. Maya Reynolds, PsyD, Clinical Psychologist"
                className="h-[430px] w-full object-cover object-top md:h-[560px]"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C87961]">
                About Dr. Maya Reynolds, PsyD
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl">
                A warm, collaborative space to slow down, understand, and
                reconnect.
              </h2>

              <p className="mt-7 text-base leading-8 text-[#526170] md:text-lg">
                I work with adults who may feel overwhelmed by anxiety, stress,
                or the lingering effects of past experiences. Many of my
                clients are thoughtful and self-aware, yet privately feel
                exhausted, stuck in overthinking, or emotionally on edge.
              </p>

              <p className="mt-5 text-base leading-8 text-[#526170] md:text-lg">
                My approach is warm, collaborative, and grounded. Sessions are
                structured enough to feel supportive while leaving room for
                reflection and depth.
              </p>

              <p className="mt-5 text-base leading-8 text-[#526170] md:text-lg">
                My goal is not only symptom relief, but helping clients develop
                insight, resilience, and a stronger relationship with
                themselves over time.
              </p>

              <p className="mt-5 text-base leading-8 text-[#526170] md:text-lg">
                My work often focuses on anxiety, panic, trauma, and burnout.
                Clients may come to therapy feeling functional on the outside
                while quietly struggling with constant worry, tension,
                overthinking, difficulty sleeping, or a sense that they are
                always bracing for something to go wrong.
              </p>

              <p className="mt-5 text-base leading-8 text-[#526170] md:text-lg">
                Others are navigating the impact of earlier life experiences
                that continue to affect their relationships, confidence, or
                sense of safety.
              </p>

              <p className="mt-5 text-base leading-8 text-[#526170] md:text-lg">
                Trauma work is an important part of my practice. I work with
                adults who have experienced single-incident trauma as well as
                more complex, long-standing patterns that may stem from
                childhood, relationships, or chronic stress.
              </p>

              <p className="mt-5 text-base leading-8 text-[#526170] md:text-lg">
                My approach is paced carefully, with an emphasis on safety,
                stabilization, and helping clients feel more regulated in their
                daily lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}
      <section
        id="services"
        className="bg-[#F7F8F6] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C87961] md:text-sm">
              Areas of Support
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl lg:text-6xl">
              Anxiety, Trauma & Burnout Therapy in Santa Monica
            </h2>

            <p className="mt-6 text-base leading-8 text-[#526170] md:text-lg">
              Therapy can provide space to understand what is happening,
              process difficult experiences, and develop more sustainable ways
              of living and working.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <article className="rounded-[2rem] border border-[#243447]/10 bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold text-[#C87961]">
                01
              </span>

              <h3 className="mt-6 text-2xl font-medium md:text-3xl">
                Anxiety & Panic
              </h3>

              <p className="mt-5 leading-8 text-[#526170]">
                Support for adults experiencing constant worry, tension,
                overthinking, panic, difficulty sleeping, or the feeling of
                always bracing for something to go wrong.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#243447]/10 bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold text-[#C87961]">
                02
              </span>

              <h3 className="mt-6 text-2xl font-medium md:text-3xl">
                Trauma Therapy
              </h3>

              <p className="mt-5 leading-8 text-[#526170]">
                A carefully paced approach to trauma, with an emphasis on
                safety, stabilization, and helping you feel more regulated in
                daily life.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#243447]/10 bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold text-[#C87961]">
                03
              </span>

              <h3 className="mt-6 text-2xl font-medium md:text-3xl">
                Burnout & Perfectionism
              </h3>

              <p className="mt-5 leading-8 text-[#526170]">
                Support for professionals, entrepreneurs, and creatives dealing
                with burnout, perfectionism, and high internal pressure after
                years of pushing through stress.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          APPROACH
      ========================= */}
      <section
        id="approach"
        className="bg-[#243447] px-6 py-20 text-[#F7F8F6] md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F0B29E] md:text-sm">
              Therapeutic Approach
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl lg:text-6xl">
              Evidence-based methods with room for depth and reflection.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#DCE8EA] md:text-xl md:leading-9">
              I integrate several evidence-based approaches to help clients
              understand both the emotional and physiological sides of what
              they’re experiencing.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-[#607285] md:grid-cols-2">
            <div className="bg-[#243447] p-8 md:p-10">
              <p className="text-sm font-semibold text-[#F0B29E]">01</p>

              <h3 className="mt-4 text-2xl font-medium">
                Cognitive-Behavioral Therapy
              </h3>

              <p className="mt-4 leading-8 text-[#DCE8EA]">
                CBT is one of the evidence-based methods I integrate into
                therapy to help clients better understand their experiences.
              </p>
            </div>

            <div className="bg-[#243447] p-8 md:p-10">
              <p className="text-sm font-semibold text-[#F0B29E]">02</p>

              <h3 className="mt-4 text-2xl font-medium">EMDR</h3>

              <p className="mt-4 leading-8 text-[#DCE8EA]">
                EMDR is part of my trauma-focused approach, alongside careful
                pacing, safety, and stabilization.
              </p>
            </div>

            <div className="bg-[#243447] p-8 md:p-10">
              <p className="text-sm font-semibold text-[#F0B29E]">03</p>

              <h3 className="mt-4 text-2xl font-medium">
                Mindfulness-Based Practices
              </h3>

              <p className="mt-4 leading-8 text-[#DCE8EA]">
                Mindfulness-based practices can support deeper awareness of
                emotional and physiological experiences.
              </p>
            </div>

            <div className="bg-[#243447] p-8 md:p-10">
              <p className="text-sm font-semibold text-[#F0B29E]">04</p>

              <h3 className="mt-4 text-2xl font-medium">
                Body-Oriented Techniques
              </h3>

              <p className="mt-4 leading-8 text-[#DCE8EA]">
                Body-oriented techniques help make space for the physiological
                side of what clients may be experiencing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHO I WORK WITH
      ========================= */}
      <section className="bg-[#F7F8F6] px-6 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C87961]">
                Who I Work With
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl">
                For adults navigating pressure, change, and difficult
                experiences.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#526170]">
                Many of the people I work with are high-achieving,
                thoughtful, and self-aware, but internally feel exhausted,
                stuck in overthinking, or emotionally on edge.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Adults",
                  "Professionals",
                  "Entrepreneurs",
                  "Creatives",
                  "People experiencing burnout",
                  "People navigating past experiences",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#243447]/10 bg-[#DCE8EA] px-6 py-5"
                  >
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LOCATION / TELEHEALTH
      ========================= */}
      <section className="bg-[#DCE8EA] px-6 py-20 md:py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/maya-office-2.jpg"
              alt="Maya Reynolds therapy office in Santa Monica"
              className="h-[430px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C87961]">
              Santa Monica & California Telehealth
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl">
              Therapy in a calm, private setting.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#526170] md:text-lg">
              I offer in-person therapy from my Santa Monica office, a quiet
              and private space designed to feel calm and grounding.
            </p>

            <p className="mt-5 text-base leading-8 text-[#526170] md:text-lg">
              Secure telehealth sessions are also available for clients located
              in California.
            </p>

            <div className="mt-8 rounded-2xl bg-white/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C87961]">
                Office
              </p>

              <p className="mt-3 text-lg font-medium">
                123th Street 45 W
              </p>

              <p className="mt-1 text-[#526170]">
                Santa Monica, CA 90401
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FAQS
      ========================= */}
      <section
        id="faqs"
        className="bg-[#F7F8F6] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C87961]">
            FAQs
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.025em] md:text-5xl">
            Frequently asked questions
          </h2>

          <div className="mt-10 divide-y divide-[#243447]/15 border-y border-[#243447]/15">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                What issues do you work with?
                <span className="ml-4 text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-[#526170]">
                My work often focuses on anxiety, panic, trauma, burnout,
                perfectionism, stress, and high internal pressure.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                What therapeutic approaches do you use?
                <span className="ml-4 text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-[#526170]">
                I integrate cognitive-behavioral therapy (CBT), EMDR,
                mindfulness-based practices, and body-oriented techniques.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                Do you offer telehealth?
                <span className="ml-4 text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-[#526170]">
                Yes. I offer secure telehealth sessions for clients located in
                California.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                Where are in-person sessions offered?
                <span className="ml-4 text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-[#526170]">
                In-person therapy is offered from my Santa Monica office in a
                quiet and private setting.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT / CTA
      ========================= */}
      <section
        id="contact"
        className="bg-[#C87961] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Begin Your Next Step
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-white md:text-5xl lg:text-6xl">
            You don’t have to keep pushing through everything alone.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Therapy can be a space to slow down, reconnect, and develop more
            sustainable ways of living and working.
          </p>

          <a
            href="/appointment"
            className="mt-9 inline-flex items-center rounded-full bg-[#243447] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#31465d]"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="bg-[#243447] px-6 py-16 text-[#F7F8F6] md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F0B29E]">
                Dr. Maya Reynolds, PsyD
              </p>

              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                A grounded, collaborative approach to therapy.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#DCE8EA] md:text-lg">
                Licensed clinical psychologist offering in-person therapy in
                Santa Monica and secure telehealth sessions for clients in
                California.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F0B29E]">
                Navigate
              </p>

              <nav className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 text-base">
                <a
                  href="#home"
                  className="transition-opacity hover:opacity-60"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="transition-opacity hover:opacity-60"
                >
                  About
                </a>

                <a
                  href="#services"
                  className="transition-opacity hover:opacity-60"
                >
                  Specialties
                </a>

                <a
                  href="#approach"
                  className="transition-opacity hover:opacity-60"
                >
                  Approach
                </a>

                <a
                  href="#faqs"
                  className="transition-opacity hover:opacity-60"
                >
                  FAQs
                </a>

                <a
                  href="/appointment"
                  className="transition-opacity hover:opacity-60"
                >
                  Appointment
                </a>
              </nav>
            </div>
          </div>

          <div className="grid gap-10 border-b border-white/15 py-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F0B29E]">
                Office
              </p>

              <div className="mt-5 space-y-1 text-base leading-7 text-[#DCE8EA]">
                <p>123th Street 45 W</p>
                <p>Santa Monica, CA 90401</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F0B29E]">
                Availability
              </p>

              <p className="mt-5 max-w-md text-base leading-7 text-[#DCE8EA]">
                In-person therapy in Santa Monica and secure telehealth sessions
                for clients located in California.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8 text-sm text-[#AFC0CB] md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD
            </p>

            <p>Licensed Clinical Psychologist</p>
          </div>
        </div>
      </footer>
    </main>
  );
}