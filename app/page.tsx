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
    <main className="min-h-screen bg-[#f7f4ee] text-[#30332f]">
      {/* =========================
          HEADER
      ========================= */}
      <header className="sticky top-0 z-50 border-b border-[#dedbd3] bg-[#f7f4ee]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="max-w-[230px] text-xl font-semibold leading-[1.05] tracking-tight"
          >
            Conejo Valley
            <br />
            Family Counseling
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a
              href="#about"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              About
            </a>

            <a
              href="#team"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              Our Team
            </a>

            <a
              href="#specialties"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              Specialties
            </a>

            <a
              href="#methods"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              Methods
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
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-[60] rounded-full border border-[#30332f] px-4 py-2 text-sm font-medium transition hover:bg-[#30332f] hover:text-white md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-[#dedbd3] bg-[#f7f4ee] px-6 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#e9e4d9]"
              >
                About
              </a>

              <a
                href="#team"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#e9e4d9]"
              >
                Our Team
              </a>

              <a
                href="#specialties"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#e9e4d9]"
              >
                Specialties
              </a>

              <a
                href="#methods"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#e9e4d9]"
              >
                Methods
              </a>

              <a
                href="#faqs"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#e9e4d9]"
              >
                FAQs
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base transition hover:bg-[#e9e4d9]"
              >
                Contact
              </a>

              {/* Mobile Appointment Button */}
              <a
                href="/appointment"
                onClick={closeMenu}
                className="mt-3 rounded-full bg-[#30332f] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#4a4d47]"
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
        className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-24 lg:py-28"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69705f] md:text-sm">
            Online & In-Person Counseling in Newbury Park & Across CA
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[0.98] tracking-[-0.035em] md:text-6xl lg:text-[4.7rem]">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <em className="font-serif font-normal">thrive.</em>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#60635d] md:text-lg md:leading-8">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>

          {/* UPDATED APPOINTMENT BUTTON */}
          <a
            href="/appointment"
            className="mt-9 inline-flex items-center rounded-full bg-[#30332f] px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4a4d47]"
          >
            Book an Appointment
          </a>
        </div>

        <div className="grid grid-cols-2 items-start gap-4 md:gap-5">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
              alt="Family therapy"
              className="h-[390px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[500px]"
            />
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] md:mt-24">
            <img
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
              alt="Child therapy"
              className="h-[310px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* =========================
          HOPE / INTRODUCTION
      ========================= */}
      <section
        id="about"
        className="bg-[#e9e4d9] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <div>
              <h2 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.025em] md:text-5xl lg:text-[3.5rem]">
                You’re holding onto hope that life can be better than it is
                right now.
              </h2>

              <p className="mt-7 text-lg font-medium leading-8 text-[#555850]">
                At Conejo Valley Family Counseling we want to make that hope a
                reality.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#60635d] md:text-lg">
                Whether you're an adult seeking personal growth, looking to
                work through your trauma, a couple working on their relationship,
                or a parent looking for support for your child, we provide a
                compassionate and safe space to help you navigate all of
                life’s ups and downs.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
                alt="Sandy beach with gentle ocean waves and a cloudy sky"
                className="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[540px]"
              />
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-4xl text-center md:mt-20 lg:mt-24">
            <p className="text-lg leading-8 text-[#60635d] md:text-xl md:leading-9">
              First and foremost, we believe what you’re going through is real,
              valid, and worthy of support. Our team offers clients in the
              Newbury Park area and across CA an environment to discover a new
              life and a deeper sense of self in the midst of their struggles.
              As we tap into the power of connection and understanding, you can
              find your footing again and take a transformative path forward.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          WHO WE HELP
      ========================= */}
      <section
        id="who-we-help"
        className="bg-[#f7f4ee] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Who we help
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#60635d] md:text-lg">
              We support adults, couples, children, and teens as they navigate
              challenges, strengthen relationships, and create meaningful
              change.
            </p>
          </div>

          {/* Adults */}
          <div className="mt-16 grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:mt-20 lg:gap-20">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg"
                alt="Adult counseling"
                className="h-[360px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[440px]"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69705f]">
                Adults
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Find clarity, resilience, and a way forward.
              </h3>

              <p className="mt-5 text-base leading-8 text-[#60635d] md:text-lg">
                If you're feeling stuck, overwhelmed, or disconnected, therapy
                can help you better understand what you're experiencing and
                uncover the root causes of anxiety, stress, and emotional pain.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex text-sm font-semibold underline decoration-[#9a9b92] underline-offset-4 transition-opacity hover:opacity-50"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Couples */}
          <div className="mt-20 grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16 lg:mt-28 lg:gap-20">
            <div className="order-2 max-w-xl md:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69705f]">
                Couples
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Reconnect and rebuild your relationship.
              </h3>

              <p className="mt-5 text-base leading-8 text-[#60635d] md:text-lg">
                Whether you're facing communication breakdowns, trust issues,
                or feeling disconnected, we help couples understand each other,
                rebuild intimacy, and create a stronger relationship.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex text-sm font-semibold underline decoration-[#9a9b92] underline-offset-4 transition-opacity hover:opacity-50"
              >
                Learn more
              </a>
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] md:order-2">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg"
                alt="Couples counseling"
                className="h-[360px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[440px]"
              />
            </div>
          </div>

          {/* Children & Teens */}
          <div className="mt-20 grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:mt-28 lg:gap-20">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg"
                alt="Children and teens counseling"
                className="h-[360px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[440px]"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69705f]">
                Children & Teens
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Help them feel understood and supported.
              </h3>

              <p className="mt-5 text-base leading-8 text-[#60635d] md:text-lg">
                Children and teens can experience big emotions, difficult
                family situations, and challenges that are hard to express. We
                help them develop coping skills, feel understood, and work
                through challenges while supporting parents along the way.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex text-sm font-semibold underline decoration-[#9a9b92] underline-offset-4 transition-opacity hover:opacity-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          OUR EXPERTISE
      ========================= */}
      <section
        id="expertise"
        className="bg-[#30332f] px-6 py-20 text-[#f7f4ee] md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9bea9] md:text-sm">
              Our expertise
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl lg:text-6xl">
              You deserve a place where your story is heard, valued, and
              understood.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d2d3cc] md:text-xl md:leading-9">
              Nothing will be too heavy for us to carry together.
            </p>
          </div>

          <div className="mt-16 border-t border-[#5b5e57]">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-[#5b5e57] py-6 md:border-r md:pr-10">
                <span className="text-2xl font-medium">Dissociation</span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:pl-10">
                <span className="text-2xl font-medium">Trauma</span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:border-r md:pr-10">
                <span className="text-2xl font-medium">Family conflict</span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:pl-10">
                <span className="text-2xl font-medium">
                  Special needs parenting
                </span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:border-r md:pr-10">
                <span className="text-2xl font-medium">Depression</span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:pl-10">
                <span className="text-2xl font-medium">Marriage</span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:border-r md:pr-10">
                <span className="text-2xl font-medium">Anxiety</span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:pl-10">
                <span className="text-2xl font-medium">Relationships</span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:border-r md:pr-10">
                <span className="text-2xl font-medium">Children</span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:pl-10">
                <span className="text-2xl font-medium">Teens</span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:border-r md:pr-10">
                <span className="text-2xl font-medium">
                  Intimacy & connection
                </span>
              </div>

              <div className="border-b border-[#5b5e57] py-6 md:pl-10">
                <span className="text-2xl font-medium">…and more.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          HOW WE WORK
      ========================= */}
      <section
        id="methods"
        className="bg-[#f7f4ee] px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#69705f]">
              How We Work
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
              We’re here to make a difference.
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
                alt="Woman and child walking on a beach"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xl font-medium leading-8 text-[#3f423d]">
                The clients we work with are balancing so many things at once,
                it’s often hard for them to put themselves first.
              </p>

              <p className="mt-6 leading-8 text-[#60635d]">
                Here, your needs are always top priority. Our team takes the
                time to deeply listen to our clients in order to truly
                understand their story and their struggles. We recognize that
                no two people are the same and that personalized therapy means
                an intentional, tailored approach. (You won’t find anything
                “one-size-fits-all” here.) If you’re ready to do the work,
                we’re ready to help.
              </p>

              <p className="mt-6 leading-8 text-[#60635d]">
                Sometimes we may gently challenge you to look at things
                differently and other times we may explore your emotions, all
                while encouraging you to practice what you’ve learned in your
                daily life. We take what we do seriously because we know how
                important it is for you to heal from what’s hurting you,
                discover a fulfilling life, and build meaningful relationships.
                Our goal is to walk alongside you in this journey, offering
                support and guidance as you uncover your strengths and embrace
                what the future can hold for you.
              </p>

              <a
                href="#team"
                className="mt-8 inline-block rounded-full border border-[#30332f] px-6 py-3 text-sm font-semibold transition hover:bg-[#30332f] hover:text-white"
              >
                Learn more about us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SPECIALTIES
      ========================= */}
      <section
        id="specialties"
        className="bg-[#e9e4d9] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69705f] md:text-sm">
                Our specialties include…
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl lg:text-6xl">
                Honoring where you’ve been & helping shape where you’re headed.
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#60635d] md:text-lg">
              Specialized support designed around your experiences, your
              relationships, and the path you want to take forward.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:mt-20 lg:gap-20">
            <div className="divide-y divide-[#c9c4b8] border-y border-[#c9c4b8]">
              <div className="py-8">
                <h3 className="text-2xl font-medium md:text-3xl">Trauma</h3>

                <p className="mt-4 max-w-2xl text-base leading-8 text-[#60635d]">
                  Trauma can affect how you experience yourself, your
                  relationships, and the world around you. We create a safe
                  space to process difficult experiences and move toward
                  healing.
                </p>
              </div>

              <div className="py-8">
                <h3 className="text-2xl font-medium md:text-3xl">
                  Dissociation
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-8 text-[#60635d]">
                  We work with clients experiencing dissociation with care,
                  understanding, and an approach that respects their individual
                  experiences and needs.
                </p>
              </div>

              <div className="py-8">
                <h3 className="text-2xl font-medium md:text-3xl">EMDR</h3>

                <p className="mt-4 max-w-2xl text-base leading-8 text-[#60635d]">
                  EMDR can help clients process distressing experiences and
                  memories while developing healthier ways to move forward.
                </p>
              </div>

              <div className="py-8">
                <h3 className="text-2xl font-medium md:text-3xl">
                  Special Needs Parenting
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-8 text-[#60635d]">
                  Parenting a child with special needs can bring unique
                  challenges. We provide support and understanding while
                  helping parents care for themselves and their families.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] md:sticky md:top-28 md:self-start">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
                alt="Therapy session"
                className="h-[460px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[620px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          OUR TEAM
      ========================= */}
      <section
        id="team"
        className="bg-[#f7f4ee] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69705f] md:text-sm">
              Our Team
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl lg:text-6xl">
              Compassionate people ready to support your journey.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#60635d] md:text-lg">
              Our team provides care, understanding, and personalized support
              for clients as they work through life’s challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Jennifer Anderson",
              "Heather Williams-Baumgart",
              "Autumn Bodily",
              "Candace Bletscher",
              "Samantha Johnson",
              "Andrea Watkins",
              "Rosa Gomez",
              "Chad Flores",
            ].map((name) => (
              <div
                key={name}
                className="rounded-2xl border border-[#30332f]/10 bg-white px-5 py-6"
              >
                <p className="font-medium">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          FAQS
      ========================= */}
      <section
        id="faqs"
        className="bg-[#e9e4d9] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69705f] md:text-sm">
            FAQs
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.025em] md:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#60635d] md:text-lg">
            Here are a few helpful answers to common questions about getting
            started with therapy.
          </p>

          <div className="mt-10 divide-y divide-[#c9c4b8] border-y border-[#c9c4b8]">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                How do I schedule an appointment?
                <span className="ml-4 text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl leading-7 text-[#60635d]">
                You can use our appointment page to submit your information and
                request a preferred date and time.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                Do you offer virtual appointments?
                <span className="ml-4 text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl leading-7 text-[#60635d]">
                Virtual appointments are available for clients who prefer
                online counseling.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                Who can receive counseling?
                <span className="ml-4 text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl leading-7 text-[#60635d]">
                We support adults, couples, children, and teens.
              </p>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                Where is the office located?
                <span className="ml-4 text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl leading-7 text-[#60635d]">
                The office is located in Newbury Park, California.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* =========================
          APPOINTMENT
      ========================= */}
      <section
        id="contact"
        className="bg-[#e9e4d9] px-6 py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#69705f] md:text-sm">
                Schedule an appointment
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl lg:text-6xl">
                Find a therapist who is the right fit for you.
              </h2>

              <p className="mt-7 text-base leading-8 text-[#60635d] md:text-lg md:leading-9">
                Taking the first step toward therapy takes courage. Finding
                the right therapist can make all the difference in your
                personal journey. Our team offers care, understanding, and
                expertise to help you feel prioritized, understood, and
                empowered throughout the process.
              </p>

              <p className="mt-5 text-base leading-8 text-[#60635d] md:text-lg">
                Click the button below to schedule an appointment.
              </p>

              {/* UPDATED BOOK NOW BUTTON */}
              <a
                href="/appointment"
                className="mt-9 inline-flex items-center rounded-full bg-[#30332f] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4a4d47]"
              >
                Book now
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
                alt="Therapy appointment"
                className="h-[430px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="bg-[#30332f] px-6 py-16 text-[#f7f4ee] md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-[#555850] pb-14 md:grid-cols-[1.2fr_0.8fr] md:gap-20 md:pb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                We want to make getting started simple.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#d2d3cc] md:text-lg">
                You’re welcome to come into our office in Newbury Park or
                schedule virtual appointments from anywhere in CA—whatever
                works best for you.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9bea9]">
                Navigate
              </p>

              <nav className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 text-base">
                <a
                  href="#home"
                  className="transition-opacity hover:opacity-50"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="transition-opacity hover:opacity-50"
                >
                  About
                </a>

                <a
                  href="#team"
                  className="transition-opacity hover:opacity-50"
                >
                  Our Team
                </a>

                <a
                  href="#specialties"
                  className="transition-opacity hover:opacity-50"
                >
                  Specialties
                </a>

                <a
                  href="#methods"
                  className="transition-opacity hover:opacity-50"
                >
                  Methods
                </a>

                <a
                  href="#faqs"
                  className="transition-opacity hover:opacity-50"
                >
                  FAQs
                </a>

                <a
                  href="#contact"
                  className="transition-opacity hover:opacity-50"
                >
                  Contact
                </a>

                <a
                  href="/appointment"
                  className="transition-opacity hover:opacity-50"
                >
                  Appointment
                </a>
              </nav>
            </div>
          </div>

          <div className="grid gap-12 border-b border-[#555850] py-14 md:grid-cols-2 md:gap-20 md:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9bea9]">
                Contact
              </p>

              <div className="mt-6 space-y-2 text-base leading-7 text-[#d2d3cc]">
                <p>925 Broadbeck Dr</p>
                <p>Suites 200 and 225</p>
                <p>Newbury Park, CA 91320</p>

                <p className="pt-3">
                  <a
                    href="mailto:info@conejovalleycounseling.com"
                    className="transition-opacity hover:opacity-50"
                  >
                    info@conejovalleycounseling.com
                  </a>
                </p>

                <p>
                  <a
                    href="tel:8052423120"
                    className="transition-opacity hover:opacity-50"
                  >
                    805.242.3120
                  </a>
                </p>

                <p className="pt-3">
                  Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark,
                  &amp; Simi Valley
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9bea9]">
                Our Team
              </p>

              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-base text-[#d2d3cc] sm:grid-cols-3">
                <p>Jennifer Anderson</p>
                <p>Heather Williams-Baumgart</p>
                <p>Autumn Bodily</p>
                <p>Candace Bletscher</p>
                <p>Samantha Johnson</p>
                <p>Andrea Watkins</p>
                <p>Rosa Gomez</p>
                <p>Chad Flores</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 pt-8 text-sm text-[#9fa39a] md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Conejo Valley Family Counseling
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="#"
                className="transition-opacity hover:opacity-70"
              >
                Terms
              </a>

              <a
                href="#"
                className="transition-opacity hover:opacity-70"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition-opacity hover:opacity-70"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}