"use client";

import { useState } from "react";
import RSVPForm from "./RSVPForm";
import Countdown from "./Countdown";

export default function Invitation() {
  const [showRSVP, setShowRSVP] = useState(false);

  return (
    <div className="w-full bg-[#F1E8D8] text-[#2A211C]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#1A120E] text-[#F4EFE5]">

        <img
          src="/images/castello-brancaccio-hero.png"
          alt="Castello Brancaccio"
          className="absolute inset-0 h-full w-full object-cover object-center scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#120B08]/80 via-[#3A281D]/20 to-[#0B0806]/90" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,183,111,0.22)_0%,rgba(226,183,111,0.06)_35%,transparent_70%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,5,3,0.72)_100%)]" />

        <div className="absolute inset-5 border border-[#D6B47A]/35 pointer-events-none md:inset-8" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-8 py-24">

          <div className="w-full max-w-4xl text-center">

            <p className="text-[9px] uppercase tracking-[0.7em] text-[#E3C58D]">
              A Celebration of Love
            </p>

            <h1 className="mt-8 font-heading text-6xl font-light tracking-[0.03em] text-[#F7EFE2] drop-shadow-[0_4px_25px_rgba(0,0,0,0.65)] sm:text-7xl md:text-8xl lg:text-9xl">
              Alex & Adam
            </h1>

            <div className="mx-auto mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#D6B47A]/70" />
              <span className="text-xs text-[#E3C58D]">✦</span>
              <div className="h-px w-16 bg-[#D6B47A]/70" />
            </div>

            <p className="mx-auto mt-8 max-w-xl font-heading text-xl italic leading-9 text-[#F1DEC0] drop-shadow-[0_3px_15px_rgba(0,0,0,0.6)] md:text-2xl">
              Invite you to join them
              <br />
              as they begin their forever.
            </p>

            <p className="mt-12 text-2xl tracking-[0.25em] text-[#E3C58D] md:text-3xl">
              28 APRIL 2027
            </p>

            <div className="mt-7">

              <p className="font-heading text-2xl text-[#F7EFE2] md:text-3xl">
                Castello Brancaccio
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.4em] text-[#E8DCCB]">
                San Gregorio da Sassola, Lazio
              </p>

              <p className="mt-2 font-heading text-xl italic text-[#D6B47A]">
                Italy
              </p>

            </div>

            <p className="mt-12 font-heading text-base italic text-[#F4EFE5]/70 md:text-lg">
              Where our next chapter begins.
            </p>

            <div className="mt-14 flex flex-col items-center">

              <p className="text-[8px] uppercase tracking-[0.55em] text-[#F4EFE5]/60">
                Discover
              </p>

              <div className="mt-4 h-8 w-px bg-[#D6B47A]/60" />

              <span className="mt-2 text-xs text-[#D6B47A]">
                ↓
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENVENUTI
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F1E8D8] px-6 py-32 md:px-16">

        <div className="absolute inset-5 border border-[#B8955B]/25 pointer-events-none" />

        <div className="relative mx-auto max-w-3xl text-center">

          <p className="text-[10px] uppercase tracking-[0.65em] text-[#9B6F73]">
            Welcome to Italy
          </p>

          <h2 className="mt-7 font-heading text-6xl italic font-light text-[#30251F] md:text-7xl">
            Benvenuti
          </h2>

          <div className="mx-auto my-9 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#B8955B]/60" />
            <span className="text-[#B8955B]">✦</span>
            <div className="h-px w-14 bg-[#B8955B]/60" />
          </div>

          <p className="font-heading text-xl leading-10 text-[#5A4A3E] md:text-2xl">
            We are so excited to celebrate the beginning
            <br className="hidden md:block" />
            of our next chapter together with you in
            <br className="hidden md:block" />
            one of our favourite places in the world.
          </p>

          <p className="mx-auto mt-9 max-w-xl text-sm leading-8 text-[#6B5C50]">
            Thank you for making the journey to be part of such a special few
            days. We cannot wait to create unforgettable memories together,
            surrounded by the people we love most.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B8955B]/50 font-heading text-xl italic text-[#9B6F73]">
              A&A
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          OUR CELEBRATION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#EDE2D0] px-6 py-32 md:px-12">

        <div className="relative mx-auto max-w-6xl">

          <div className="mb-16 text-center">

            <p className="text-[10px] uppercase tracking-[0.65em] text-[#9B6F73]">
              The Celebration
            </p>

            <h2 className="mt-6 font-heading text-5xl font-light text-[#30251F] md:text-6xl">
              Two Days of Love
            </h2>

            <div className="mx-auto mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[#B8955B]/60" />
              <span className="text-xs text-[#B8955B]">✦</span>
              <div className="h-px w-12 bg-[#B8955B]/60" />
            </div>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#6B5C50]">
              Before we say I do, we'd love for you to join us
              for two unforgettable days of celebration in Italy.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-2">


            {/* =================================================
                WHITE PARTY
            ================================================= */}

            <article className="group relative min-h-[650px] overflow-hidden border border-[#B8955B]/40 bg-[#241A15] shadow-[0_25px_60px_rgba(63,43,28,0.15)]">

              <img
                src="/images/white-party.webp"
                alt="Italian inspired white party dinner"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#120B08]/45 via-[#241A15]/20 to-[#120B08]/90" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,122,0.15),transparent_60%)]" />

              <div className="relative z-10 flex min-h-[650px] flex-col items-center justify-between px-8 py-12 text-center text-[#F4EFE5]">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.55em] text-[#E4C995]">
                    Tuesday
                  </p>

                  <p className="mt-3 font-heading text-2xl">
                    27 April 2027
                  </p>

                </div>

                <div className="max-w-lg">

                  <p className="text-[9px] uppercase tracking-[0.45em] text-[#E4C995]">
                    The evening before
                  </p>

                  <h3 className="mt-5 font-heading text-5xl font-light italic md:text-6xl">
                    Pizza & Pasta
                  </h3>

                  <h4 className="mt-1 font-heading text-4xl italic text-[#E4C995]">
                    White Party
                  </h4>

                  <div className="mx-auto my-7 flex items-center justify-center gap-4">
                    <div className="h-px w-10 bg-[#D6B47A]/70" />
                    <span className="text-xs text-[#D6B47A]">✦</span>
                    <div className="h-px w-10 bg-[#D6B47A]/70" />
                  </div>

                  <p className="mx-auto max-w-md text-sm leading-8 text-[#F1E8D8]/90">
                    Join us the evening before the wedding for
                    pizza, pasta, drinks and good vibes as we
                    kick off the celebrations together.
                  </p>

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#E4C995]">
                    Dress Code
                  </p>

                  <p className="mt-2 font-heading text-xl italic">
                    All White
                  </p>

                </div>

              </div>

            </article>


            {/* =================================================
                WEDDING DAY
            ================================================= */}

            <article className="group relative min-h-[650px] overflow-hidden border border-[#B8955B]/50 bg-[#241A15] shadow-[0_25px_60px_rgba(63,43,28,0.20)]">

              <img
                src="/images/wedding-day.webp"
                alt="Elegant Italian wedding setting"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#0D0806]/65 via-[#241A15]/25 to-[#0D0806]/95" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,122,0.18),transparent_60%)]" />

              <div className="relative z-10 flex min-h-[650px] flex-col items-center justify-between px-8 py-12 text-center text-[#F4EFE5]">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.55em] text-[#E4C995]">
                    Wednesday
                  </p>

                  <p className="mt-3 font-heading text-2xl">
                    28 April 2027
                  </p>

                </div>

                <div className="max-w-lg">

                  <p className="text-[9px] uppercase tracking-[0.45em] text-[#E4C995]">
                    The day we say I do
                  </p>

                  <h3 className="mt-5 font-heading text-5xl font-light italic md:text-6xl">
                    Our Wedding Day
                  </h3>

                  <div className="mx-auto my-7 flex items-center justify-center gap-4">
                    <div className="h-px w-10 bg-[#D6B47A]/70" />
                    <span className="text-xs text-[#D6B47A]">✦</span>
                    <div className="h-px w-10 bg-[#D6B47A]/70" />
                  </div>

                  <p className="mx-auto max-w-md text-sm leading-8 text-[#F1E8D8]/90">
                    An elegant celebration of love, dinner and
                    dancing beneath the Italian sky.
                  </p>

                  <div className="mt-7">

                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#E4C995]">
                      Ceremony
                    </p>

                    <p className="mt-2 font-heading text-2xl">
                      1:00 PM
                    </p>

                  </div>

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#E4C995]">
                    Castello Brancaccio
                  </p>

                  <p className="mt-2 text-xs tracking-[0.15em] text-[#F1E8D8]/80">
                    San Gregorio da Sassola, Lazio
                  </p>

                  <p className="mt-3 font-heading text-lg italic text-[#E4C995]">
                    Formal
                  </p>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          COUNTDOWN
      ===================================================== */}

      <Countdown />


      {/* =====================================================
          PHOTOGRAPHY & FILM
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#17110E] text-[#F4EFE5]">

        <div className="pointer-events-none absolute left-[-120px] top-[-100px] h-[380px] w-[380px] rounded-full bg-[#9B6F73]/[0.07] blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#D6B47A]/[0.06] blur-[110px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-28">

          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D6B47A]/40">
              <span className="text-2xl text-[#D6B47A]">✦</span>
            </div>

            <p className="mt-7 text-[9px] uppercase tracking-[0.65em] text-[#D6B47A]">
              Capturing Our Celebration
            </p>

            <h2 className="mt-5 font-heading text-5xl font-light italic md:text-6xl">
              A Note About Photography & Film
            </h2>

            <div className="mx-auto mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[#D6B47A]/60" />
              <span className="text-xs text-[#D6B47A]">✦</span>
              <div className="h-px w-12 bg-[#D6B47A]/60" />
            </div>

          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center text-sm leading-8 text-[#C9BBA7]">

            <p>
              We’re so excited to have the wonderful team at{" "}
              <span className="font-heading text-lg italic text-[#E4C995]">
                Fire & Ice Photography & Cinema
              </span>{" "}
              joining us in Italy to capture our celebrations across both days.
            </p>

            <p className="mt-6">
              They’ll be with us throughout our{" "}
              <span className="text-[#E4C995]">Pizza & Pasta White Party</span>{" "}
              and{" "}
              <span className="text-[#E4C995]">Wedding Day</span>,
              capturing beautiful photography and cinematic film so that we can
              relive all the laughter, dancing, happy tears and unforgettable
              moments for years to come.
            </p>

            <div className="mx-auto mt-9 max-w-2xl border border-[#D6B47A]/25 bg-[#211813]/70 px-6 py-7 md:px-10">

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#D6B47A]">
                A little heads-up for our guests
              </p>

              <p className="mt-5 text-sm leading-8 text-[#C9BBA7]">
                As part of our photography and cinematography package, Fire & Ice
                will also be creating content that may be shared publicly on
                their YouTube channel and social media.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#C9BBA7]">
                We wanted to let everyone know in advance so you can feel
                comfortable knowing that filming and photography will be taking
                place throughout the celebrations. We hope you’ll be happy to be
                part of the memories being captured — but most importantly, we
                want everyone to feel relaxed and enjoy the celebrations with us.
              </p>

            </div>

            <p className="mt-9 font-heading text-xl italic text-[#E4C995]">
              Two days. One incredible celebration. Memories we’ll treasure forever. ✦
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INFORMATION
      =====================================================

  {/* =====================================================
    YOUR STAY IN ITALY
===================================================== */}

<section className="relative overflow-hidden bg-[#211813] text-[#F4EFE5]">

  <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-12">

    {/* Heading */}

    <div className="mb-16 text-center">

      <p className="text-[9px] uppercase tracking-[0.65em] text-[#D6B47A]">
        Everything You Need To Know
      </p>

      <h2 className="mt-5 font-heading text-5xl font-light md:text-6xl">
        Your Stay in Italy
      </h2>

      <div className="mx-auto mt-7 flex items-center justify-center gap-4">

        <div className="h-px w-12 bg-[#D6B47A]/50" />

        <span className="text-xs text-[#D6B47A]">
          ✦
        </span>

        <div className="h-px w-12 bg-[#D6B47A]/50" />

      </div>

      <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#C9BBA7]">
        Everything you need for a relaxed and memorable
        few days in the Italian countryside.
      </p>

    </div>


    {/* =================================================
        TOP TWO PHOTOGRAPHIC PANELS
    ================================================= */}

    <div className="grid gap-6 md:grid-cols-2">


      {/* CASTLE ACCOMMODATION */}

      <article className="group relative min-h-[560px] overflow-hidden border border-[#D6B47A]/30">

        <img
          src="/images/Bedroom.jpg"
          alt="Elegant accommodation at the castle"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1200ms]
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#100A07]/20
            via-[#211813]/20
            to-[#100A07]/95
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(214,180,122,0.12),transparent_65%)]
          "
        />

        <div className="relative z-10 flex min-h-[560px] flex-col justify-between p-8 text-center md:p-12">

          <div>

            <p className="text-[9px] uppercase tracking-[0.55em] text-[#E4C995]">
              Accommodation
            </p>

            <h3 className="mt-5 font-heading text-5xl font-light italic md:text-6xl">
              Stay at the Castle
            </h3>

          </div>

          <div className="mx-auto max-w-md">

            <div className="mx-auto mb-7 flex items-center justify-center gap-4">

              <div className="h-px w-10 bg-[#D6B47A]/70" />

              <span className="text-xs text-[#D6B47A]">
                ✦
              </span>

              <div className="h-px w-10 bg-[#D6B47A]/70" />

            </div>

            <p className="text-sm leading-8 text-[#F1E8D8]/90">
              A limited number of beautiful rooms are available
              at the castle for our guests.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#F1E8D8]/90">
              If you would like to stay with us, simply let us
              know when completing your RSVP.
            </p>

            <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-[#E4C995]">
              Rooms allocated on a first-confirmed basis
            </p>

          </div>

          <div>

            <p className="font-heading text-lg italic text-[#E4C995]">
              A night to remember
            </p>

          </div>

        </div>

      </article>


      {/* TIVOLI */}

      <article className="group relative min-h-[560px] overflow-hidden border border-[#D6B47A]/30">

        <img
          src="/images/tivoli.webp"
          alt="Tivoli, Italy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1200ms]
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#100A07]/30
            via-[#211813]/20
            to-[#100A07]/95
          "
        />

        <div className="relative z-10 flex min-h-[560px] flex-col justify-between p-8 text-center md:p-12">

          <div>

            <p className="text-[9px] uppercase tracking-[0.55em] text-[#E4C995]">
              Staying Nearby
            </p>

            <h3 className="mt-5 font-heading text-5xl font-light italic md:text-6xl">
              Staying in Tivoli
            </h3>

          </div>

          <div className="mx-auto max-w-md">

            <div className="mx-auto mb-7 flex items-center justify-center gap-4">

              <div className="h-px w-10 bg-[#D6B47A]/70" />

              <span className="text-xs text-[#D6B47A]">
                ✦
              </span>

              <div className="h-px w-10 bg-[#D6B47A]/70" />

            </div>

            <p className="text-sm leading-8 text-[#F1E8D8]/90">
              Prefer to stay in the charming town of Tivoli?
              There are many lovely boutique hotels, apartments
              and B&Bs to choose from.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#F1E8D8]/90">
              Tivoli is approximately 18 minutes by taxi
              from the venue.
            </p>

          </div>

          <div>

            <p className="font-heading text-lg italic text-[#E4C995]">
              La dolce vita awaits
            </p>

          </div>

        </div>

      </article>

    </div>


    {/* =================================================
        TRAVEL + RSVP
    ================================================= */}

    <div className="mt-6 grid gap-6 md:grid-cols-2">


           {/* TRAVEL */}

      <article className="relative overflow-hidden border border-[#D6B47A]/30 bg-[#2A1D17] p-8 md:p-12">

        <div className="absolute right-[-50px] top-[-50px] h-48 w-48 rounded-full bg-[#D6B47A]/[0.05] blur-3xl" />

        <div className="relative text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D6B47A]/40">

            <span className="text-xl text-[#D6B47A]">
              ✈
            </span>

          </div>

          <p className="mt-6 text-[9px] uppercase tracking-[0.45em] text-[#D6B47A]">
            Plan Your Journey
          </p>

          <h3 className="mt-4 font-heading text-4xl font-light italic">
            Travel Information
          </h3>

          <div className="mx-auto mt-7 h-px w-12 bg-[#D6B47A]/50" />

          <div className="mx-auto mt-8 max-w-md space-y-6 text-left">

            {/* Getting Here */}

            <div className="border-b border-[#D6B47A]/15 pb-5">

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6B47A]">
                Getting Here
              </p>

              <p className="mt-2 text-sm leading-7 text-[#C9BBA7]">
                The recommended airport for travelling to our wedding is
                <span className="font-semibold text-[#F1E8D8]"> Rome Ciampino (CIA)</span>.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#C9BBA7]">
                If you are travelling to Italy on
                <span className="font-semibold text-[#F1E8D8]"> Tuesday 27 April 2027</span>,
                we have arranged and paid for airport transfers to collect you
                from the airport and take you to your accommodation.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#C9BBA7]">
                <span className="font-semibold text-[#F1E8D8]">
                  You do not need to book your own airport transfer if you are arriving on Tuesday 27 April.
                </span>
              </p>

              <p className="mt-4 text-sm leading-7 text-[#C9BBA7]">
                Please note that the arranged airport transfer applies
                <span className="font-semibold text-[#F1E8D8]"> only to guests travelling on Tuesday 27 April</span>.
                If you are arriving earlier, or travelling on another day,
                you will need to arrange your own airport transfer to your accommodation.
              </p>

            </div>

            {/* Getting Around */}

            <div className="border-b border-[#D6B47A]/15 pb-5">

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6B47A]">
                Getting Around
              </p>

              <p className="mt-2 text-sm leading-7 text-[#C9BBA7]">
                For local journeys between your accommodation, Tivoli and the
                venue, taxis are available locally.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#C9BBA7]">
                Need a taxi?
              </p>

              <a
                href="tel:+393351300209"
                className="mt-1 inline-block text-base tracking-[0.08em] text-[#E4C995] underline decoration-[#D6B47A]/50 underline-offset-4 transition hover:text-[#F1E8D8]"
              >
                +39 335 130 0209
              </a>

              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#D6B47A]/70">
                Tap the number to call
              </p>

            </div>

            {/* The Venue */}

            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6B47A]">
                The Venue
              </p>

              <p className="mt-2 text-sm leading-7 text-[#C9BBA7]">
                <span className="font-semibold text-[#F1E8D8]">
                  Castello Brancaccio
                </span>
                <br />
                Piazza Castello Brancaccio 1
                <br />
                00010 San Gregorio da Sassola
                <br />
                Roma, Italy
              </p>

              <p className="mt-4 text-sm leading-7 text-[#C9BBA7]">
                Our wedding celebrations will take place at this beautiful
                historic castle in the hills outside Rome.
              </p>

            </div>

          </div>

          <a
            href="https://maps.google.com/?q=Castello+Brancaccio,+Piazza+Castello+Brancaccio+1,+00010+San+Gregorio+da+Sassola,+Roma,+Italy"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-9
              inline-block
              border
              border-[#D6B47A]
              px-8
              py-3
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-[#D6B47A]
              transition
              hover:bg-[#D6B47A]
              hover:text-[#211813]
            "
          >
            Open Venue in Maps
          </a>

        </div>

      </article>


      {/* RSVP */}

      <article className="relative overflow-hidden border border-[#D6B47A]/30 bg-[#2A1D17] p-8 md:p-12">

        <div className="absolute bottom-[-60px] right-[-40px] h-56 w-56 rounded-full bg-[#9B6F73]/[0.08] blur-3xl" />

        <div className="relative text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D6B47A]/40">

            <span className="text-xl text-[#D6B47A]">
              ♡
            </span>

          </div>

          <p className="mt-6 text-[9px] uppercase tracking-[0.45em] text-[#D6B47A]">
            We Hope You'll Join Us
          </p>

          <h3 className="mt-4 font-heading text-4xl font-light italic">
            RSVP
          </h3>

          <div className="mx-auto mt-7 h-px w-12 bg-[#D6B47A]/50" />

          <p className="mx-auto mt-8 max-w-md text-sm leading-8 text-[#C9BBA7]">
            Please let us know whether you'll be joining us
            for these special celebrations.
          </p>

          <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#D6B47A]">
            Kindly reply by
          </p>

          <p className="mt-3 font-heading text-3xl italic text-[#E4C995]">
            December 2026
          </p>

          <button
            onClick={() => setShowRSVP(true)}
            className="
              mt-8
              border
              border-[#D6B47A]
              px-10
              py-3
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-[#D6B47A]
              transition
              hover:bg-[#D6B47A]
              hover:text-[#211813]
            "
          >
            RSVP Now
          </button>

          <div className="mx-auto mt-9 max-w-sm text-left">

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6B47A]">
              Your reply includes
            </p>

            <ul className="mt-4 space-y-2 text-xs leading-6 text-[#C9BBA7]">

              <li>♡ Will you be attending?</li>
              <li>♡ Will you join the White Party?</li>
              <li>♡ Accommodation at the castle?</li>
              <li>♡ Dietary requirements</li>
              <li>♡ Accessibility needs</li>
              <li>♡ A message for us</li>

            </ul>

          </div>

        </div>

      </article>

    </div>

  </div>

</section>


      {/* =====================================================
          GIFTS
      ===================================================== */}

     {/* =====================================================
    GIFTS / HONEYMOON
===================================================== */}

<section className="relative overflow-hidden bg-[#17110E] text-[#F1E8D8]">

  {/* Atmospheric glow */}

  <div className="pointer-events-none absolute left-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#9B6F73]/[0.08] blur-[100px]" />

  <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-[#D6B47A]/[0.06] blur-[120px]" />


  <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">

    <div className="grid items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">


      {/* =================================================
          LEFT — MESSAGE
      ================================================= */}

      <div className="text-center md:text-left">

        <p className="text-[9px] uppercase tracking-[0.65em] text-[#D6B47A]">
          A Little Note About Gifts
        </p>

        <h2 className="mt-5 font-heading text-5xl font-light italic md:text-6xl">
          Our Honeymoon
        </h2>

        <div className="mt-7 flex items-center justify-center gap-4 md:justify-start">

          <div className="h-px w-12 bg-[#D6B47A]/60" />

          <span className="text-xs text-[#D6B47A]">
            ✦
          </span>

          <div className="h-px w-12 bg-[#D6B47A]/60" />

        </div>


        <div className="mx-auto mt-9 max-w-xl md:mx-0">

          <p className="text-sm leading-8 text-[#C9BBA7]">
            Your presence is the greatest gift we could ask for.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#C9BBA7]">
            If you would like to contribute towards our honeymoon,
            we would be incredibly grateful. We are looking forward
            to creating a lifetime of memories together, and your
            generosity will help us make them unforgettable.
          </p>

          <p className="mt-6 font-heading text-xl italic text-[#E4C995]">
            Every contribution means so much to us.
          </p>

        </div>


        {/* Small decorative detail */}

        <div className="mt-10 flex items-center justify-center gap-3 md:justify-start">

          <span className="text-[#D6B47A]">❧</span>

          <div className="h-px w-16 bg-[#D6B47A]/30" />

          <span className="text-[#D6B47A]">❧</span>

        </div>

      </div>


      {/* =================================================
          RIGHT — QR CODE
      ================================================= */}

      <div className="flex justify-center">

        <div className="relative w-full max-w-[360px]">

          {/* Decorative frame */}

          <div className="absolute inset-[-10px] border border-[#D6B47A]/20" />

          <div className="absolute inset-[-5px] border border-[#D6B47A]/10" />


          <div className="relative bg-[#F1E8D8] p-7 text-center shadow-[0_25px_80px_rgba(0,0,0,0.4)] md:p-9">

            <p className="text-[9px] uppercase tracking-[0.5em] text-[#8D6B52]">
              Our Honeymoon Fund
            </p>

            <h3 className="mt-4 font-heading text-3xl font-light italic text-[#30251F]">
              With love, Alex & Adam
            </h3>


            {/* QR */}

            <div className="mx-auto mt-7 flex aspect-square w-full max-w-[240px] items-center justify-center bg-white p-3">

              <img
                src="/images/honeymoon-qr-new.png"
                alt="QR code to contribute towards Alex and Adam's honeymoon"
                className="h-full w-full object-contain"
              />

            </div>


            <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-[#8D6B52]">
              Scan to contribute
            </p>

            <p className="mx-auto mt-3 max-w-[250px] text-xs leading-6 text-[#6B5C50]">
              Your contribution will go directly towards
              our honeymoon adventures.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* =================================================
        FOOTER MESSAGE
    ================================================= */}

    <div className="mt-20 border-t border-[#D6B47A]/15 pt-10 text-center">

      <p className="font-heading text-2xl italic text-[#E4C995]">
        Thank you for helping us make memories that will
        last a lifetime.
      </p>

      <p className="mt-4 text-[9px] uppercase tracking-[0.45em] text-[#8D7A69]">
        Con amore, Alex & Adam
      </p>

    </div>

  </div>

</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#0D0B0A] px-8 py-24 text-center text-[#F4EFE5]">

        <p className="text-[10px] uppercase tracking-[0.55em] text-[#D6B47A]">
          Until we say I do
        </p>

        <p className="mt-7 font-heading text-2xl italic md:text-3xl">
          We can't wait to celebrate with you in Italy.
        </p>

        <p className="mt-8 font-heading text-3xl italic text-[#D6B47A]">
          Con amore, Alex & Adam
        </p>

        <div className="mx-auto mt-10 h-px w-16 bg-[#D6B47A]/60" />

        <p className="mt-8 text-xs uppercase tracking-[0.4em] text-[#8E8174]">
          28 April 2027 · Italy
        </p>

      </footer>


      {/* =====================================================
          RSVP MODAL
      ===================================================== */}

      {showRSVP && (
        <RSVPForm
          onClose={() => setShowRSVP(false)}
        />
      )}

    </div>
  );
}