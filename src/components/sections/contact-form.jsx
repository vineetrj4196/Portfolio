"use client";

import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { validateField } from "@/lib/validation";

// NOTE: This form has no backend wired up. Submission is simulated so the UX
// is complete out of the box. To go live, point SUBMIT_ENDPOINT at your API,
// or a service such as Formspree / EmailJS / Netlify Forms, and replace the
// fakeSubmit() call below with a real fetch() request.
const SUBMIT_ENDPOINT = "";

function fakeSubmit(payload) {
  return new Promise((resolve) => setTimeout(() => resolve({ ok: true, payload }), 1200));
}

const FIELDS = ["name", "email", "subject", "message"];

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  // Set in an effect rather than at render time — Date.now() is impure, and
  // the render output doesn't depend on this value anyway (only the submit
  // handler reads it, well after mount).
  const renderedAt = useRef(0);
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);
  const firstInvalidRef = useRef(null);

  function handleBlur(field) {
    setErrors((prev) => ({ ...prev, [field]: validateField(field, values[field]) }));
  }

  function handleChange(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: validateField(field, value) } : prev));
    setStatus(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    // Honeypot: bots tend to fill every field, humans never see or fill this one.
    if (honeypot) {
      setValues({ name: "", email: "", subject: "", message: "" });
      return;
    }

    // Basic time-trap: a submission faster than 2s after render is almost certainly automated.
    if (Date.now() - renderedAt.current < 2000) {
      setStatus({ type: "error", text: "Your message was submitted too quickly. Please review and resend." });
      return;
    }

    const nextErrors = { name: "", email: "", subject: "", message: "" };
    let firstInvalidField = null;
    FIELDS.forEach((field) => {
      const error = validateField(field, values[field]);
      nextErrors[field] = error;
      if (error && !firstInvalidField) firstInvalidField = field;
    });
    setErrors(nextErrors);

    if (firstInvalidField) {
      firstInvalidRef.current?.focus();
      setStatus({ type: "error", text: "Some fields need your attention before sending." });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = SUBMIT_ENDPOINT
        ? await fetch(SUBMIT_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(values),
          }).then((res) => ({ ok: res.ok }))
        : await fakeSubmit(values);

      if (!result.ok) throw new Error("Request failed");

      setStatus({ type: "success", text: "Thanks for reaching out — I'll get back to you soon." });
      setValues({ name: "", email: "", subject: "", message: "" });
      setErrors({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ type: "error", text: "Your message couldn't be sent. Please try again or email me directly." });
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-3.5 text-sm transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/12 dark:bg-slate-950 ${
      errors[field] ? "border-error" : "border-slate-200 dark:border-slate-700"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          error={errors.name}
          value={values.name}
          onChange={(v) => handleChange("name", v)}
          onBlur={() => handleBlur("name")}
          inputClass={inputClass("name")}
          inputRef={(el) => {
            if (errors.name && el) firstInvalidRef.current = el;
          }}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={(v) => handleChange("email", v)}
          onBlur={() => handleBlur("email")}
          inputClass={inputClass("email")}
        />
      </div>

      <Field
        id="subject"
        label="Subject"
        required
        error={errors.subject}
        value={values.subject}
        onChange={(v) => handleChange("subject", v)}
        onBlur={() => handleBlur("subject")}
        inputClass={inputClass("subject")}
      />

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-describedby="message-error"
          aria-invalid={!!errors.message}
          className={inputClass("message") + " min-h-35 resize-y"}
        />
        <p id="message-error" role="alert" className="min-h-[1em] text-xs text-error">
          {errors.message}
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" /> {isSubmitting ? "Sending…" : "Send Message"}
      </button>

      {status && (
        <p
          role={status.type === "error" ? "alert" : "status"}
          className={`flex items-center justify-center gap-2 text-center text-sm font-medium ${
            status.type === "success" ? "text-success" : "text-error"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          )}
          {status.text}
        </p>
      )}

      <p className="text-center text-xs text-slate-500 dark:text-slate-400">
        This form has no backend wired up yet — see the comment at the top of components/sections/contact-form.jsx to connect one.
      </p>
    </form>
  );
}

function Field({ id, label, type = "text", required, error, value, onChange, onBlur, inputClass, inputRef }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-describedby={`${id}-error`}
        aria-invalid={!!error}
        className={inputClass}
      />
      <p id={`${id}-error`} role="alert" className="min-h-[1em] text-xs text-error">
        {error}
      </p>
    </div>
  );
}
