"use client";

import { useState } from "react";

type RSVPFormProps = {
  onClose: () => void;
};

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw-LmJVqSUdevkkEOduifJTp7OcUoXd8eGoctmAaOJn0lM97qquGhvDteyj2jKyww_X_g/exec";

export default function RSVPForm({ onClose }: RSVPFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState("");
  const [whiteParty, setWhiteParty] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSending(true);
    setError("");

    const form = event.currentTarget;

    const hiddenForm = document.createElement("form");

    hiddenForm.method = "POST";
    hiddenForm.action = GOOGLE_SCRIPT_URL;
    hiddenForm.target = "rsvp-submit-frame";
    hiddenForm.style.display = "none";

    const fields = [
      "names",
      "attending",
      "guests",
      "whiteParty",
      "accommodation",
      "dietary",
      "accessibility",
      "message",
    ];

fields.forEach((fieldName) => {
  const input = document.createElement("input");

  input.type = "hidden";
  input.name = fieldName;

  const value = form.elements.namedItem(fieldName);

  if (value instanceof RadioNodeList) {
    input.value = value.value;
  } else if (
    value instanceof HTMLInputElement ||
    value instanceof HTMLSelectElement ||
    value instanceof HTMLTextAreaElement
  ) {
    input.value = value.value;
  }

  hiddenForm.appendChild(input);
});

    setSubmitted(true);
    
    setTimeout(() => {
      hiddenForm.remove();
      setSending(false);
    }, 3000);
  };

  return (
    <>
      {/* Hidden Google submission frame */}

      <iframe
        name="rsvp-submit-frame"
        title="RSVP submission"
        style={{ display: "none" }}
      />

      {/* =====================================================
          RSVP MODAL
      ===================================================== */}

      <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#0D0B0A]/90 px-4 py-8 backdrop-blur-sm">

        <div className="relative mx-auto min-h-full max-w-3xl flex items-center justify-center">

          <div className="relative my-auto w-full overflow-hidden border border-[#D6B47A]/40 bg-[#F1E8D8] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">

            {/* Decorative border */}

            <div className="pointer-events-none absolute inset-4 border border-[#B8955B]/25" />


            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              onClick={onClose}
              aria-label="Close RSVP"
              className="
                absolute
                right-7
                top-7
                z-20
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#B8955B]/40
                text-[#6B5C50]
                transition
                hover:bg-[#B8955B]
                hover:text-white
              "
            >
              ×
            </button>


            {!submitted ? (

              <div className="relative px-8 py-16 md:px-16 md:py-20">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="text-center">

                  <p className="text-[9px] uppercase tracking-[0.65em] text-[#9B6F73]">
                    We Hope You'll Join Us
                  </p>

                  <h1 className="mt-5 font-heading text-6xl font-light italic text-[#30251F] md:text-7xl">
                    RSVP
                  </h1>

                  <div className="mx-auto mt-7 flex items-center justify-center gap-4">

                    <div className="h-px w-12 bg-[#B8955B]/60" />

                    <span className="text-xs text-[#B8955B]">
                      ✦
                    </span>

                    <div className="h-px w-12 bg-[#B8955B]/60" />

                  </div>

                  <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-[#6B5C50]">
                    We would be delighted to celebrate these special
                    days with you in Italy.
                  </p>

                  <p className="mt-5 text-[9px] uppercase tracking-[0.4em] text-[#9B6F73]">
                    Kindly reply by December 2026
                  </p>

                </div>


                {/* =================================================
                    FORM
                ================================================= */}

                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-12 max-w-xl space-y-9"
                >

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="names"
                      className="text-[9px] uppercase tracking-[0.35em] text-[#6B5C50]"
                    >
                      Name(s)
                    </label>

                    <input
                      id="names"
                      name="names"
                      type="text"
                      required
                      placeholder="Your name(s)"
                      className="
                        mt-3
                        w-full
                        border-b
                        border-[#B8955B]/40
                        bg-transparent
                        px-1
                        py-3
                        font-heading
                        text-lg
                        text-[#30251F]
                        outline-none
                        placeholder:text-[#8B7A6B]/60
                        focus:border-[#9B6F73]
                      "
                    />

                  </div>


                  {/* ATTENDING */}

                  <fieldset>

                    <legend className="text-[9px] uppercase tracking-[0.35em] text-[#6B5C50]">
                      Will you be joining us?
                    </legend>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">

                      <label className="cursor-pointer">

                        <input
                          type="radio"
                          name="attending"
                          value="yes"
                          required
                          checked={attending === "yes"}
                          onChange={(e) =>
                            setAttending(e.target.value)
                          }
                          className="peer sr-only"
                        />

                        <div className="border border-[#B8955B]/35 px-5 py-4 text-center text-sm text-[#5A4A3E] transition peer-checked:border-[#9B6F73] peer-checked:bg-[#9B6F73]/10">
                          Joyfully accept ♡
                        </div>

                      </label>


                      <label className="cursor-pointer">

                        <input
                          type="radio"
                          name="attending"
                          value="no"
                          checked={attending === "no"}
                          onChange={(e) =>
                            setAttending(e.target.value)
                          }
                          className="peer sr-only"
                        />

                        <div className="border border-[#B8955B]/35 px-5 py-4 text-center text-sm text-[#5A4A3E] transition peer-checked:border-[#9B6F73] peer-checked:bg-[#9B6F73]/10">
                          Regretfully decline
                        </div>

                      </label>

                    </div>

                  </fieldset>


                  {/* =================================================
                      ATTENDING DETAILS
                  ================================================= */}

                  {attending === "yes" && (

                    <div className="space-y-9 border-t border-[#B8955B]/20 pt-9">


                      {/* NUMBER OF GUESTS */}

                      <div>

                        <label
                          htmlFor="guests"
                          className="text-[9px] uppercase tracking-[0.35em] text-[#6B5C50]"
                        >
                          Number of guests
                        </label>

                        <select
                          id="guests"
                          name="guests"
                          required
                          defaultValue=""
                          className="
                            mt-3
                            w-full
                            border-b
                            border-[#B8955B]/40
                            bg-transparent
                            px-1
                            py-3
                            text-sm
                            text-[#5A4A3E]
                            outline-none
                            focus:border-[#9B6F73]
                          "
                        >

                          <option value="" disabled>
                            Please select
                          </option>

                          <option value="1">
                            1 guest
                          </option>

                          <option value="2">
                            2 guests
                          </option>

                          <option value="3">
                            3 guests
                          </option>

                          <option value="4">
                            4 guests
                          </option>

                        </select>

                      </div>


                      {/* WHITE PARTY */}

                      <fieldset>

                        <legend className="text-[9px] uppercase tracking-[0.35em] text-[#6B5C50]">
                          Will you join us for the White Party?
                        </legend>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">

                          <label className="cursor-pointer">

                            <input
                              type="radio"
                              name="whiteParty"
                              value="yes"
                              required
                              checked={whiteParty === "yes"}
                              onChange={(e) =>
                                setWhiteParty(e.target.value)
                              }
                              className="peer sr-only"
                            />

                            <div className="border border-[#B8955B]/35 px-5 py-4 text-center text-sm text-[#5A4A3E] transition peer-checked:border-[#9B6F73] peer-checked:bg-[#9B6F73]/10">
                              Yes, absolutely
                            </div>

                          </label>


                          <label className="cursor-pointer">

                            <input
                              type="radio"
                              name="whiteParty"
                              value="no"
                              checked={whiteParty === "no"}
                              onChange={(e) =>
                                setWhiteParty(e.target.value)
                              }
                              className="peer sr-only"
                            />

                            <div className="border border-[#B8955B]/35 px-5 py-4 text-center text-sm text-[#5A4A3E] transition peer-checked:border-[#9B6F73] peer-checked:bg-[#9B6F73]/10">
                              Sadly, no
                            </div>

                          </label>

                        </div>

                      </fieldset>


                      {/* ACCOMMODATION */}

                      <fieldset>

                        <legend className="text-[9px] uppercase tracking-[0.35em] text-[#6B5C50]">
                          Would you like accommodation at the castle?
                        </legend>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">

                          <label className="cursor-pointer">

                            <input
                              type="radio"
                              name="accommodation"
                              value="yes"
                              required
                              checked={accommodation === "yes"}
                              onChange={(e) =>
                                setAccommodation(e.target.value)
                              }
                              className="peer sr-only"
                            />

                            <div className="border border-[#B8955B]/35 px-5 py-4 text-center text-sm text-[#5A4A3E] transition peer-checked:border-[#9B6F73] peer-checked:bg-[#9B6F73]/10">
                              Yes, please
                            </div>

                          </label>


                          <label className="cursor-pointer">

                            <input
                              type="radio"
                              name="accommodation"
                              value="no"
                              checked={accommodation === "no"}
                              onChange={(e) =>
                                setAccommodation(e.target.value)
                              }
                              className="peer sr-only"
                            />

                            <div className="border border-[#B8955B]/35 px-5 py-4 text-center text-sm text-[#5A4A3E] transition peer-checked:border-[#9B6F73] peer-checked:bg-[#9B6F73]/10">
                              No, thank you
                            </div>

                          </label>

                        </div>

                      </fieldset>


                      {/* DIETARY */}

                      <div>

                        <label
                          htmlFor="dietary"
                          className="text-[9px] uppercase tracking-[0.35em] text-[#6B5C50]"
                        >
                          Dietary requirements
                        </label>

                        <textarea
                          id="dietary"
                          name="dietary"
                          rows={3}
                          placeholder="Please let us know of any dietary requirements..."
                          className="
                            mt-3
                            w-full
                            resize-none
                            border
                            border-[#B8955B]/30
                            bg-[#F7F1E7]
                            px-4
                            py-3
                            text-sm
                            leading-7
                            text-[#5A4A3E]
                            outline-none
                            placeholder:text-[#8B7A6B]/60
                            focus:border-[#9B6F73]
                          "
                        />

                      </div>


                      {/* ACCESSIBILITY */}

                      <div>

                        <label
                          htmlFor="accessibility"
                          className="text-[9px] uppercase tracking-[0.35em] text-[#6B5C50]"
                        >
                          Accessibility requirements
                        </label>

                        <textarea
                          id="accessibility"
                          name="accessibility"
                          rows={3}
                          placeholder="Please let us know if there is anything we can arrange to make your stay more comfortable..."
                          className="
                            mt-3
                            w-full
                            resize-none
                            border
                            border-[#B8955B]/30
                            bg-[#F7F1E7]
                            px-4
                            py-3
                            text-sm
                            leading-7
                            text-[#5A4A3E]
                            outline-none
                            placeholder:text-[#8B7A6B]/60
                            focus:border-[#9B6F73]
                          "
                        />

                      </div>

                    </div>

                  )}


                  {/* MESSAGE */}

                  <div>

                    <label
                      htmlFor="message"
                      className="text-[9px] uppercase tracking-[0.35em] text-[#6B5C50]"
                    >
                      A message for Alex & Adam
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Leave us a little message..."
                      className="
                        mt-3
                        w-full
                        resize-none
                        border
                        border-[#B8955B]/30
                        bg-[#F7F1E7]
                        px-4
                        py-3
                        text-sm
                        leading-7
                        text-[#5A4A3E]
                        outline-none
                        placeholder:text-[#8B7A6B]/60
                        focus:border-[#9B6F73]
                      "
                    />

                  </div>


                  {/* ERROR */}

                  {error && (

                    <div className="border border-[#9B6F73]/40 bg-[#9B6F73]/10 px-5 py-4 text-center text-sm text-[#6B5C50]">
                      {error}
                    </div>

                  )}


                  {/* SUBMIT */}

                  <div className="pt-3 text-center">

                    <button
                      type="submit"
                      disabled={sending}
                      className="
                        border
                        border-[#B8955B]
                        bg-[#30251F]
                        px-12
                        py-4
                        text-[9px]
                        uppercase
                        tracking-[0.4em]
                        text-[#E4C995]
                        transition
                        duration-300
                        hover:bg-[#B8955B]
                        hover:text-[#30251F]
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                    >
                      {sending ? "Sending..." : "Send RSVP"}
                    </button>

                    <p className="mt-5 text-[9px] uppercase tracking-[0.25em] text-[#8B7A6B]">
                      We can't wait to celebrate with you
                    </p>

                  </div>

                </form>

              </div>

            ) : (

              /* =================================================
                 SUCCESS MESSAGE
              ================================================= */

              <div className="relative flex min-h-[650px] items-center justify-center px-8 py-20 text-center md:px-16">

                <div className="max-w-xl">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#B8955B]/50">

                    <span className="font-heading text-3xl italic text-[#9B6F73]">
                      A&A
                    </span>

                  </div>

                  <p className="mt-10 text-[9px] uppercase tracking-[0.65em] text-[#9B6F73]">
                    Grazie mille
                  </p>

                  <h2 className="mt-6 font-heading text-5xl font-light italic text-[#30251F] md:text-6xl">
                    Thank you
                  </h2>

                  <div className="mx-auto mt-8 flex items-center justify-center gap-4">

                    <div className="h-px w-12 bg-[#B8955B]/60" />

                    <span className="text-xs text-[#B8955B]">
                      ✦
                    </span>

                    <div className="h-px w-12 bg-[#B8955B]/60" />

                  </div>

                  <p className="mx-auto mt-8 max-w-lg text-sm leading-8 text-[#6B5C50]">
                    Your RSVP has been received.
                    We are so excited to celebrate with you
                    in Italy and cannot wait to create
                    unforgettable memories together.
                  </p>

                  <p className="mt-8 font-heading text-2xl italic text-[#9B6F73]">
                    Con amore,
                  </p>

                  <p className="mt-2 font-heading text-3xl text-[#30251F]">
                    Alex & Adam
                  </p>

                  <button
                    onClick={onClose}
                    className="
                      mt-10
                      border
                      border-[#B8955B]
                      px-10
                      py-3
                      text-[9px]
                      uppercase
                      tracking-[0.35em]
                      text-[#6B5C50]
                      transition
                      hover:bg-[#B8955B]
                      hover:text-white
                    "
                  >
                    Return to Invitation
                  </button>

                </div>

              </div>

            )}

          </div>

        </div>

      </div>
    </>
  );
}