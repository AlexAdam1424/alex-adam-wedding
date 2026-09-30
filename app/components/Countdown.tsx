"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2027-04-28T13:00:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
  const difference = weddingDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    {
      value: timeLeft.days,
      label: "Days",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F1E8D8] px-6 py-28 md:px-12">

      {/* Fine border */}

      <div className="absolute inset-5 border border-[#B8955B]/20 pointer-events-none md:inset-8" />

      <div className="relative mx-auto max-w-5xl text-center">

        <p className="text-[9px] uppercase tracking-[0.65em] text-[#9B6F73]">
          Until we say I do
        </p>

        <h2 className="mt-6 font-heading text-5xl font-light italic text-[#30251F] md:text-6xl">
          The countdown is on
        </h2>

        <div className="mx-auto mt-8 flex items-center justify-center gap-4">

          <div className="h-px w-12 bg-[#B8955B]/60" />

          <span className="text-xs text-[#B8955B]">
            ✦
          </span>

          <div className="h-px w-12 bg-[#B8955B]/60" />

        </div>

        <p className="mt-7 font-heading text-xl italic text-[#6B5C50]">
          28 April 2027 · 1:00 PM
        </p>


        {/* Countdown */}

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

          {units.map((unit) => (

            <div
              key={unit.label}
              className="
                border
                border-[#B8955B]/35
                bg-[#F7F1E7]
                px-4
                py-7
                shadow-[0_10px_30px_rgba(63,43,28,0.05)]
              "
            >

              <p
                className="
                  font-heading
                  text-4xl
                  font-light
                  text-[#30251F]
                  md:text-5xl
                "
              >
                {String(unit.value).padStart(2, "0")}
              </p>

              <div className="mx-auto mt-4 h-px w-8 bg-[#B8955B]/60" />

              <p
                className="
                  mt-3
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-[#9B6F73]
                "
              >
                {unit.label}
              </p>

            </div>

          ))}

        </div>


        {/* Bottom message */}

        <p className="mx-auto mt-12 max-w-lg font-heading text-lg italic leading-8 text-[#6B5C50]">
          We cannot wait to celebrate with you beneath
          the Italian sky.
        </p>

        <div className="mt-8 text-[#B8955B]">
          ♡
        </div>

      </div>

    </section>
  );
}