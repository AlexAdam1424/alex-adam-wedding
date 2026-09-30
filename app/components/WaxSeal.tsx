"use client";

export default function WaxSeal() {
  return (
    <div
      className="
        relative
        flex
        h-[94px]
        w-[94px]
        items-center
        justify-center
        rounded-[48%_52%_50%_47%]
        bg-[radial-gradient(circle_at_35%_28%,#F0D39B_0%,#C59A5A_32%,#9A6F39_72%,#765027_100%)]
        shadow-[0_12px_25px_rgba(45,28,15,0.42),inset_0_2px_5px_rgba(255,255,255,0.35),inset_0_-5px_9px_rgba(65,38,15,0.35)]
        select-none
      "
    >

      {/* =================================================
          IRREGULAR OUTER WAX EDGE
      ================================================= */}

      <div
        className="
          absolute
          inset-[3px]
          rounded-[47%_53%_49%_51%]
          border
          border-[#F1D7A7]/55
        "
      />

      <div
        className="
          absolute
          inset-[7px]
          rounded-full
          border
          border-[#7C552C]/55
        "
      />


      {/* =================================================
          INNER EMBOSSED RING
      ================================================= */}

      <div
        className="
          absolute
          inset-[15px]
          rounded-full
          border
          border-[#E8CA91]/55
          shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(75,40,15,0.3)]
        "
      />


      {/* =================================================
          MONOGRAM
      ================================================= */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          leading-none
          text-[#69471F]
        "
      >

        <span
          className="
            font-heading
            text-[28px]
            font-light
            tracking-[-0.08em]
            drop-shadow-[0_1px_0_rgba(255,255,255,0.28)]
          "
        >
          A&A
        </span>

        <span
          className="
            mt-1
            text-[5px]
            uppercase
            tracking-[0.35em]
            text-[#765027]/80
          "
        >
          2027
        </span>

      </div>


      {/* =================================================
          EMBOSSED HIGHLIGHT
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[16px]
          top-[12px]
          h-[18px]
          w-[27px]
          rotate-[-18deg]
          rounded-full
          bg-white/25
          blur-[5px]
        "
      />


      {/* =================================================
          SMALL WAX IMPERFECTIONS
      ================================================= */}

      <div className="absolute left-[10px] top-[40px] h-2 w-1 rounded-full bg-[#81582E]/45" />

      <div className="absolute bottom-[13px] right-[15px] h-1.5 w-2 rounded-full bg-[#E6C58A]/35" />

      <div className="absolute right-[11px] top-[25px] h-1.5 w-1.5 rounded-full bg-[#7A5228]/40" />

    </div>
  );
}