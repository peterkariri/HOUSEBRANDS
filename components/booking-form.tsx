"use client";

import { useState } from "react";
import { CalendarCheck, Send } from "lucide-react";
import { site, serviceAreas, waLink } from "@/lib/site";

export function BookingForm({
  kind,
  serviceOptions,
  defaultService,
}: {
  kind: "Cleaning" | "Moving";
  serviceOptions: string[];
  defaultService?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultService ?? serviceOptions[0],
    area: serviceAreas[0],
    date: "",
    details: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const message =
    `Hello ${site.name}! I'd like to book a ${kind.toLowerCase()} service.%0A%0A` +
    `*Service:* ${form.service}%0A` +
    `*Name:* ${form.name || "-"}%0A` +
    `*Phone:* ${form.phone || "-"}%0A` +
    `*Area:* ${form.area}%0A` +
    `*Preferred date:* ${form.date || "flexible"}%0A` +
    `*Details:* ${form.details || "-"}`;

  const href = `https://wa.me/${site.whatsapp}?text=${message}`;

  const field =
    "w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-forest focus:bg-white";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
      className="rounded-3xl border border-black/8 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-white">
          <CalendarCheck className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-heading text-lg font-bold text-ink">Book your {kind.toLowerCase()}</h3>
          <p className="text-sm text-slate">Get a fast, free quote — no obligation.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="bf-name">Full name</label>
          <input id="bf-name" className={field} value={form.name} onChange={set("name")} placeholder="Jane Wanjiku" required />
        </div>
        <div>
          <label className={label} htmlFor="bf-phone">Phone number</label>
          <input id="bf-phone" type="tel" className={field} value={form.phone} onChange={set("phone")} placeholder="07XX XXX XXX" required />
        </div>
        <div>
          <label className={label} htmlFor="bf-service">Service</label>
          <select id="bf-service" className={field} value={form.service} onChange={set("service")}>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="bf-area">Area</label>
          <select id="bf-area" className={field} value={form.area} onChange={set("area")}>
            {serviceAreas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="bf-date">Preferred date</label>
          <input id="bf-date" type="date" className={field} value={form.date} onChange={set("date")} />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="bf-details">Details</label>
          <textarea id="bf-details" rows={3} className={field} value={form.details} onChange={set("details")} placeholder={kind === "Moving" ? "e.g. 2-bedroom move from Annex to Kimumu, some fragile items." : "e.g. 3-seater fabric sofa and a king mattress."} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition hover:brightness-105"
      >
        <Send className="h-5 w-5" /> Send booking on WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-slate">
        Prefer to talk? Call{" "}
        <a href={site.phoneHref} className="font-semibold text-forest">{site.phone}</a>
      </p>
    </form>
  );
}
