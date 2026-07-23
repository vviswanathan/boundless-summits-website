"use client";

import { useState, useEffect } from "react";

type Status = "idle" | "submitting" | "success" | "error";

function SuccessState() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`flex flex-col items-center text-center py-10 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-14 h-14 rounded-full border-[1.5px] border-copper flex items-center justify-center mb-6">
        <span className="text-copper text-[22px]">✓</span>
      </div>
      <h3 className="font-fraunces italic font-light text-[26px] text-navy mb-4 leading-[1.25]">
        Your note is on its way.
      </h3>
      <p className="font-inter text-[16px] leading-[1.7] text-[#4B5563] max-w-[480px]">
        Thank you for reaching out. I&apos;ll be in touch within two business
        days. In the meantime, feel free to book a discovery call below.
      </p>
    </div>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      const res = await fetch(endpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg((data as { error?: string }).error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Unable to send. Check your connection and try again.");
      setStatus("error");
    }
  }

  const labelClass =
    "block font-inter text-[11px] font-semibold uppercase tracking-[1.5px] text-navy mb-2";
  const inputClass =
    "font-inter text-[16px] text-navy bg-cream border border-[rgba(27,42,78,0.18)] rounded-sm px-4 py-3.5 w-full outline-none transition-all duration-200 focus:border-copper focus:ring-2 focus:ring-copper/10";

  if (status === "success") {
    return <SuccessState />;
  }

  return (
    <>
      {/* Scoped placeholder styling for the textarea */}
      <style>{`
        #contact-message::placeholder {
          font-family: var(--font-fraunces), Georgia, serif;
          font-style: italic;
          font-weight: 300;
          font-size: 15px;
          color: rgba(27, 42, 78, 0.45);
        }
      `}</style>

      <form
        onSubmit={handleSubmit}
        className="bg-cream border border-[rgba(27,42,78,0.10)] rounded-sm p-8 md:p-12"
      >
        {/* Name + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label htmlFor="contact-phone" className={labelClass}>
            Phone{" "}
            <span className="normal-case font-normal tracking-normal text-[12px] text-[#4B5563]">
              optional — if you&apos;d prefer I call you back
            </span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="contact-message" className={labelClass}>
            What&apos;s on Your Mind
          </label>
          <textarea
            id="contact-message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={"No need to have it figured out.\nJust say what's true."}
            className={`${inputClass} resize-none min-h-[160px]`}
          />
        </div>

        {/* Error message */}
        {status === "error" && (
          <p className="font-inter text-[13px] text-red-600 mb-4">{errorMsg}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-copper text-cream font-inter text-[13px] font-semibold uppercase tracking-[2px] py-[18px] rounded-sm mt-2 hover:bg-copper-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting"
            ? "Sending..."
            : status === "error"
              ? "Try again →"
              : "Send my note →"}
        </button>
      </form>

      <p className="font-inter text-[13px] text-[#4B5563] text-center mt-4">
        I&apos;ll respond within two business days. Your information stays with
        me — I don&apos;t share it with anyone.
      </p>
    </>
  );
}
