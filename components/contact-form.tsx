"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

const topics = ["Product enquiry", "Cleaning booking", "Moving booking", "Delivery / order", "Other"];

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", topic: topics[0], message: "" });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const msg =
    `Hello ${site.name}!%0A%0A` +
    `*Topic:* ${form.topic}%0A` +
    `*Name:* ${form.name || "-"}%0A` +
    `*Phone:* ${form.phone || "-"}%0A` +
    `*Message:* ${form.message || "-"}`;
  const href = `https://wa.me/${site.whatsapp}?text=${msg}`;

  const field = "w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-forest focus:bg-white";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
      className="rounded-3xl border border-black/8 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <h3 className="font-heading text-xl font-bold text-ink">Send us a message</h3>
      <p className="mt-1 text-sm text-slate">We usually reply within a few hours during working days.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="cf-name">Full name</label>
          <input id="cf-name" className={field} value={form.name} onChange={set("name")} placeholder="Jane Wanjiku" required />
        </div>
        <div>
          <label className={label} htmlFor="cf-phone">Phone number</label>
          <input id="cf-phone" type="tel" className={field} value={form.phone} onChange={set("phone")} placeholder="07XX XXX XXX" required />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="cf-topic">How can we help?</label>
          <select id="cf-topic" className={field} value={form.topic} onChange={set("topic")}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="cf-message">Message</label>
          <textarea id="cf-message" rows={4} className={field} value={form.message} onChange={set("message")} placeholder="Tell us what you need…" required />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 font-semibold text-white shadow-[var(--shadow-soft)] transition hover:bg-forest hover:-translate-y-0.5"
      >
        <Send className="h-5 w-5" /> Send message
      </button>
      <p className="mt-3 text-center text-xs text-slate">This opens WhatsApp with your message ready to send.</p>
    </form>
  );
}
