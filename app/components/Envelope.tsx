"use client";

import { useState } from "react";
import Invitation from "./Invitation";

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const openInvitation = () => {
    if (isOpening || isOpen) return;

    setIsOpening(true);

    setTimeout(() => {
      setIsOpen(true);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#E8D9C6]">
      {/* Opening envelope scene */}
      <div
        className={`
          fixed inset-0 z-50
          flex items-center justify-center
          overflow-hidden
          bg-[#E8D9C6]
          transition-all duration-[1800ms] ease-in-out
          ${
            isOpen
              ? "pointer-events-none scale-[1.04] opacity-0"
              : "scale-100 opacity-100"
          }
        `}
      >
        {/* Envelope artwork */}
        <img
          src="/images/envelope-opening-final.png"
          alt="Alex and Adam's wedding invitation"
          className="
            pointer-events-none absolute inset-0
            h-full w-full
            object-cover object-center
            select-none
          "
        />

        {/* Very subtle overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/[0.015]" />

        {/* A&A wax seal touch target */}
        <button
          type="button"
          aria-label="Open Alex and Adam's wedding invitation"
          onClick={openInvitation}
          disabled={isOpening || isOpen}
          className={`
            absolute left-1/2 top-[51%] z-[100]
            h-[180px] w-[180px]
            -translate-x-1/2 -translate-y-1/2
            cursor-pointer
            rounded-full
            bg-transparent
            outline-none
            touch-manipulation
            select-none
            [-webkit-tap-highlight-color:transparent]
            focus:outline-none
            active:scale-95
            transition-transform duration-200
            ${
              isOpening
                ? "pointer-events-none opacity-0"
                : "pointer-events-auto opacity-100"
            }
          `}
        >
          <span className="sr-only">
            Open Alex and Adam's wedding invitation
          </span>
        </button>
      </div>

      {/* Main invitation */}
      <div
        className={`
          relative z-10 min-h-screen w-full
          transition-all duration-[1800ms] ease-out
          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-8 opacity-0"
          }
        `}
      >
        <Invitation />
      </div>
    </main>
  );
}