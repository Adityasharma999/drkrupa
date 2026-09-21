"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import {
  Check,
  Phone,
  Calendar,
  Sparkle,
  ArrowRight,
} from "@/components/ui/Icons";

const emptyForm = {
  parentName: "",
  childName: "",
  phone: "",
  date: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.parentName.trim()) {
    errors.parentName = "Please enter the parent's name.";
  } else if (form.parentName.trim().length < 2) {
    errors.parentName = "Name seems too short.";
  }

  if (!form.childName.trim()) {
    errors.childName = "Please enter the child's name.";
  } else if (form.childName.trim().length < 2) {
    errors.childName = "Name seems too short.";
  }

  const phoneDigits = form.phone.replace(/\D/g, "").replace(/^0+/, "");
  if (!form.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }

  if (form.date) {
    const chosen = new Date(`${form.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime()) || chosen < today) {
      errors.date = "Please choose today or a future date.";
    }
  }

  if (form.message.length > 600) {
    errors.message = "Please keep the message under 600 characters.";
  }

  return errors;
}

/** Small validated appointment form — wire `submitRequest` to an API when ready. */
export default function AppointmentForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success
  const todayStr = new Date().toISOString().slice(0, 10);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`field-${firstField}`)?.focus();
      return;
    }
    setStatus("sending");
    // TODO: replace with a real API call / email / WhatsApp integration.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setForm(emptyForm);
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center gap-4 rounded-[2rem] bg-white p-10 text-center shadow-lift"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-100 text-teal-700">
          <Check className="h-8 w-8" strokeWidth={2.2} />
        </span>
        <h3 className="font-display text-2xl font-bold text-teal-900">
          Request Received!
        </h3>
        <p className="max-w-sm text-[0.95rem] leading-relaxed text-charcoal-soft">
          Thank you. Our team will contact you shortly to confirm the
          appointment.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a href={`tel:${SITE.phoneTel}`} className="btn btn-teal btn-sm">
            <Phone className="h-4 w-4" />
            Call {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="btn btn-outline btn-sm"
          >
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="appointment-form-title"
      className="rounded-[2rem] bg-white p-8 shadow-lift sm:p-10"
    >
      <h3
        id="appointment-form-title"
        className="font-display text-2xl font-bold text-teal-900"
      >
        Request an Appointment
      </h3>
      <p className="mt-2 text-sm text-charcoal-mute">
        Fill in the details and we&apos;ll get back to you to confirm a suitable time.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        {/* Parent name */}
        <div className="sm:col-span-1">
          <label
            htmlFor="field-parentName"
            className="mb-1.5 block text-sm font-bold text-teal-900"
          >
            Parent Name <span className="text-orange-500">*</span>
          </label>
          <input
            id="field-parentName"
            name="parentName"
            type="text"
            autoComplete="name"
            required
            value={form.parentName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={errors.parentName ? "err-parentName" : undefined}
            placeholder="Your full name"
            className={`field ${errors.parentName ? "field-error" : ""}`}
          />
          {errors.parentName && (
            <p id="err-parentName" role="alert" className="mt-1.5 text-xs font-medium text-orange-600">
              {errors.parentName}
            </p>
          )}
        </div>

        {/* Child name */}
        <div className="sm:col-span-1">
          <label
            htmlFor="field-childName"
            className="mb-1.5 block text-sm font-bold text-teal-900"
          >
            Child&apos;s Name <span className="text-orange-500">*</span>
          </label>
          <input
            id="field-childName"
            name="childName"
            type="text"
            required
            value={form.childName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.childName)}
            aria-describedby={errors.childName ? "err-childName" : undefined}
            placeholder="Child's name"
            className={`field ${errors.childName ? "field-error" : ""}`}
          />
          {errors.childName && (
            <p id="err-childName" role="alert" className="mt-1.5 text-xs font-medium text-orange-600">
              {errors.childName}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="sm:col-span-1">
          <label
            htmlFor="field-phone"
            className="mb-1.5 block text-sm font-bold text-teal-900"
          >
            Phone Number <span className="text-orange-500">*</span>
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            placeholder="10-digit mobile number"
            className={`field ${errors.phone ? "field-error" : ""}`}
          />
          {errors.phone && (
            <p id="err-phone" role="alert" className="mt-1.5 text-xs font-medium text-orange-600">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Preferred date */}
        <div className="sm:col-span-1">
          <label
            htmlFor="field-date"
            className="mb-1.5 block text-sm font-bold text-teal-900"
          >
            Preferred Date
          </label>
          <input
            id="field-date"
            name="date"
            type="date"
            min={todayStr}
            value={form.date}
            onChange={handleChange}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "err-date" : undefined}
            className={`field ${errors.date ? "field-error" : ""}`}
          />
          {errors.date && (
            <p id="err-date" role="alert" className="mt-1.5 text-xs font-medium text-orange-600">
              {errors.date}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="field-message"
            className="mb-1.5 block text-sm font-bold text-teal-900"
          >
            Message
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "err-message" : undefined}
            placeholder="Any concerns or questions about your child's dental health (optional)"
            className={`field resize-none ${errors.message ? "field-error" : ""}`}
          />
          {errors.message && (
            <p id="err-message" role="alert" className="mt-1.5 text-xs font-medium text-orange-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary mt-7 w-full sm:w-auto"
      >
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            Request Appointment
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-4 flex items-center gap-2 text-xs text-charcoal-mute">
        <Calendar className="h-3.5 w-3.5" />
        Prefer to talk? Call us at{" "}
        <a href={`tel:${SITE.phoneTel}`} className="font-bold text-teal-700 underline-offset-2 hover:underline">
          {SITE.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
