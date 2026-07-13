import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Stethoscope,
  ArrowLeft,
  ArrowRight,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Video,
  Building2,
  Star,
  Shield,
  Award,
  MapPin,
} from "lucide-react";
import doctorImg from "@/assets/doctor.png";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Dr. Rajat Maheshwari" },
      { name: "description", content: "Book a consultation with Dr. Rajat Maheshwari — Vascular & Endovascular Surgeon. Choose your date, time slot and consultation type." },
      { property: "og:title", content: "Book Appointment — Dr. Rajat Maheshwari" },
      { property: "og:description", content: "Reserve a slot online with Dr. Rajat Maheshwari at CARE CHL Hospitals, Indore." },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/fevicon.ico" },
    ],
  }),
  component: BookAppointment,
});

// ---------- data ----------
const consultationTypes = [
  { id: "clinic", icon: Building2, title: "In-Clinic Visit", desc: "CARE CHL Hospitals, Indore", price: "₹800" },
  { id: "video", icon: Video, title: "Video Consultation", desc: "Meet online from anywhere", price: "₹600" },
  { id: "followup", icon: CheckCircle2, title: "Follow-Up", desc: "For existing patients", price: "₹400" },
];

const reasons = [
  "Varicose Veins",
  "Diabetic Foot",
  "Deep Vein Thrombosis",
  "Peripheral Artery Disease",
  "Carotid Artery",
  "General Consultation",
  "Second Opinion",
  "Other",
];

const morningSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
const afternoonSlots = ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];
const eveningSlots = ["18:00", "18:30", "19:00", "19:30", "20:00"];
const bookedSlots = new Set(["10:00", "15:30", "19:00"]);

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatShortDate(date: Date) {
  return `${WEEKDAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

function getNext14Days() {
  const days: { date: Date; label: string; day: number; weekday: string; iso: string }[] = [];
  const now = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push({
      date: d,
      label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : MONTHS[d.getMonth()],
      day: d.getDate(),
      weekday: WEEKDAYS[d.getDay()].toUpperCase(),
      iso: d.toISOString().slice(0, 10),
    });
  }
  return days;
}

function BookAppointment() {
  useReveal();
  const days = getNext14Days();
  const [step, setStep] = useState(1);
  const [type, setType] = useState("clinic");
  const [dateIso, setDateIso] = useState(days[0].iso);
  const [slot, setSlot] = useState<string | null>(null);
  const [reason, setReason] = useState<string>("General Consultation");
  const [form, setForm] = useState({ name: "", phone: "", email: "", age: "", gender: "male", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const selectedDay = days.find((d) => d.iso === dateIso)!;
  const selectedType = consultationTypes.find((t) => t.id === type)!;

  const canNext1 = !!type;
  const canNext2 = !!slot;
  const canSubmit = form.name.trim().length > 1 && /^\d{10}$/.test(form.phone.replace(/\D/g, ""));

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-brand-soft via-white to-blue-50">
      {/* Decorative blobs */}
      <div className="pointer-events-none fixed -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />

      {/* NAV */}
      <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand to-accent grid place-items-center text-white shadow-md shadow-brand/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Stethoscope className="h-5 w-5" />
            </div>
            <span className="font-semibold text-sm">Dr. Rajat Maheshwari</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:py-14 overflow-x-hidden">
        {/* Heading */}
        <div className="text-center mb-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/80 backdrop-blur border border-brand/15 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="text-brand text-xs font-bold tracking-[0.2em]">BOOK APPOINTMENT</span>
          </div>
          <h1 className="font-bold text-foreground mb-3" style={{ fontSize: "clamp(32px,4.5vw,48px)", lineHeight: 1.1, letterSpacing: "-0.5px" }}>
            Schedule Your{" "}
            <span className="bg-gradient-to-r from-brand via-accent to-brand bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_6s_linear_infinite]">
              Consultation
            </span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Choose a consultation type, pick a convenient slot and share a few details. It only takes a minute.
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-10">
          {[
            { n: 1, label: "Type" },
            { n: 2, label: "Date & Time" },
            { n: 3, label: "Your Details" },
          ].map((s, i) => (
            <div key={s.n} className="flex items-center gap-2 md:gap-4">
              <div
                className={`flex items-center gap-2 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-bold transition-all duration-300 ${
                  step === s.n
                    ? "bg-gradient-to-r from-brand to-accent text-white shadow-md shadow-brand/30"
                    : step > s.n
                      ? "bg-brand/10 text-brand"
                      : "bg-white text-muted-foreground border border-border"
                }`}
              >
                <span className={`grid place-items-center h-5 w-5 rounded-full text-[10px] ${step >= s.n ? "bg-white/20" : "bg-muted"}`}>
                  {step > s.n ? <CheckCircle2 className="h-3.5 w-3.5" /> : s.n}
                </span>
                {s.label}
              </div>
              {i < 2 && <div className={`h-0.5 w-6 md:w-12 ${step > s.n ? "bg-brand" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.2fr_280px] gap-5">
          {/* LEFT: form card */}
          <div className="min-w-0 bg-white/90 backdrop-blur rounded-3xl border border-border/70 shadow-[0_20px_60px_-25px_rgba(26,111,212,0.25)] p-6 md:p-8">
            {submitted ? (
              <SuccessView
                form={form}
                type={selectedType}
                day={selectedDay}
                slot={slot!}
                onReset={() => {
                  setSubmitted(false);
                  setStep(1);
                  setSlot(null);
                }}
              />
            ) : step === 1 ? (
              <section className="animate-fade-up">
                <h2 className="text-xl font-bold text-foreground mb-1">Choose consultation type</h2>
                <p className="text-sm text-muted-foreground mb-6">How would you like to meet Dr. Maheshwari?</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {consultationTypes.map((t) => {
                    const active = type === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setType(t.id)}
                        className={`group text-left rounded-2xl border-2 p-4 transition-all duration-300 ${
                          active
                            ? "border-brand bg-gradient-to-br from-brand-soft to-white shadow-lg shadow-brand/15 -translate-y-0.5"
                            : "border-border hover:border-brand/40 hover:-translate-y-0.5"
                        }`}
                      >
                        <div className={`h-10 w-10 rounded-xl grid place-items-center mb-3 transition-all ${active ? "bg-gradient-to-br from-brand to-accent text-white" : "bg-brand-soft text-brand group-hover:scale-110"}`}>
                          <t.icon className="h-5 w-5" />
                        </div>
                        <div className="font-bold text-sm text-foreground">{t.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 mb-2">{t.desc}</div>
                        <div className="text-brand font-bold text-sm">{t.price}</div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <label className="text-sm font-bold text-foreground">Reason for visit</label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {reasons.map((r) => {
                      const active = reason === r;
                      return (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setReason(r)}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                            active
                              ? "bg-brand text-white border-brand shadow-sm shadow-brand/30"
                              : "bg-white text-muted-foreground border-border hover:border-brand/40 hover:text-brand"
                          }`}
                        >
                          {r}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    disabled={!canNext1}
                    onClick={() => setStep(2)}
                    className="btn-shine group inline-flex items-center gap-2 bg-gradient-to-r from-brand to-accent text-white text-sm font-bold px-6 py-3 rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </section>
            ) : step === 2 ? (
              <section className="animate-fade-up">
                <h2 className="text-xl font-bold text-foreground mb-1">Pick a date & time</h2>
                <p className="text-sm text-muted-foreground mb-6">Available slots for the next 14 days.</p>

                {/* dates */}
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 mb-6 scroll-smooth">
                  {days.map((d) => {
                    const active = d.iso === dateIso;
                    return (
                      <button
                        key={d.iso}
                        onClick={() => {
                          setDateIso(d.iso);
                          setSlot(null);
                        }}
                        className={`shrink-0 w-16 rounded-xl border-2 py-2.5 text-center transition-all ${
                          active
                            ? "border-brand bg-gradient-to-br from-brand to-accent text-white shadow-md shadow-brand/25 -translate-y-0.5"
                            : "border-border bg-white hover:border-brand/40 hover:-translate-y-0.5"
                        }`}
                      >
                        <div className={`text-[10px] font-bold tracking-wider ${active ? "text-white/90" : "text-muted-foreground"}`}>{d.weekday}</div>
                        <div className={`text-lg font-bold ${active ? "text-white" : "text-foreground"}`}>{d.day}</div>
                        <div className={`text-[10px] ${active ? "text-white/80" : "text-muted-foreground"}`}>{d.label}</div>
                      </button>
                    );
                  })}
                </div>

                {/* slots */}
                <SlotGroup title="Morning" slots={morningSlots} slot={slot} setSlot={setSlot} booked={bookedSlots} />
                <SlotGroup title="Afternoon" slots={afternoonSlots} slot={slot} setSlot={setSlot} booked={bookedSlots} />
                <SlotGroup title="Evening" slots={eveningSlots} slot={slot} setSlot={setSlot} booked={bookedSlots} />

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-brand" /> Selected</span>
                  <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-white border border-border" /> Available</span>
                  <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-muted" /> Booked</span>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    disabled={!canNext2}
                    onClick={() => setStep(3)}
                    className="btn-shine group inline-flex items-center gap-2 bg-gradient-to-r from-brand to-accent text-white text-sm font-bold px-6 py-3 rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </section>
            ) : (
              <section className="animate-fade-up">
                <h2 className="text-xl font-bold text-foreground mb-1">Your details</h2>
                <p className="text-sm text-muted-foreground mb-6">We'll send a confirmation to your phone and email.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" icon={User}>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Rahul Sharma"
                      className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60"
                    />
                  </Field>
                  <Field label="Phone Number" icon={Phone}>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="98765 43210"
                      inputMode="numeric"
                      className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60"
                    />
                  </Field>
                  <Field label="Email (optional)" icon={Mail}>
                    <input
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60"
                    />
                  </Field>
                  <div className="grid grid-cols-[1fr_1.4fr] gap-3">
                    <Field label="Age">
                      <input
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        placeholder="34"
                        inputMode="numeric"
                        className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60"
                      />
                    </Field>
                    <div>
                      <div className="text-xs font-bold text-foreground mb-1.5">Gender</div>
                      <div className="flex gap-2">
                        {["male", "female", "other"].map((g) => {
                          const active = form.gender === g;
                          return (
                            <button
                              key={g}
                              type="button"
                              onClick={() => setForm({ ...form, gender: g })}
                              className={`flex-1 text-xs font-medium py-2.5 rounded-lg border transition-all capitalize ${
                                active
                                  ? "bg-brand text-white border-brand"
                                  : "bg-white text-muted-foreground border-border hover:border-brand/40"
                              }`}
                            >
                              {g}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs font-bold text-foreground mb-1.5">Notes for the doctor (optional)</div>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    placeholder="Share symptoms, previous diagnoses or anything the doctor should know."
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all placeholder:text-muted-foreground/60"
                  />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  <button
                    disabled={!canSubmit}
                    onClick={() => setSubmitted(true)}
                    className="btn-shine group inline-flex items-center gap-2 bg-gradient-to-r from-brand to-accent text-white text-sm font-bold px-6 py-3 rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Confirm Booking <CheckCircle2 className="h-4 w-4" />
                  </button>
                </div>
              </section>
            )}
          </div>

          {/* RIGHT: summary card */}
          <aside className="space-y-6 w-full">
            <div className="relative bg-white/90 backdrop-blur rounded-3xl border border-border/70 shadow-[0_20px_60px_-25px_rgba(26,111,212,0.25)] p-5 overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand/20 to-accent/20 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden ring-2 ring-brand/20">
                  <img src={doctorImg} alt="Dr. Rajat Maheshwari" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">Dr. Rajat Maheshwari</div>
                  <div className="text-brand text-xs font-medium">Vascular & Endovascular Surgeon</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-foreground">4.9</span>
                    <span className="text-[10px] text-muted-foreground">(70+)</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <SummaryRow icon={Building2} label="Type" value={selectedType.title} />
                <SummaryRow
                  icon={CalendarIcon}
                  label="Date"
                  value={formatShortDate(selectedDay.date)}
                />
                <SummaryRow icon={Clock} label="Time" value={slot ?? "Not selected"} muted={!slot} />
                <SummaryRow icon={User} label="For" value={reason} />
              </div>

              <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Consultation Fee</span>
                <span className="font-bold text-brand text-lg">{selectedType.price}</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand to-accent text-white rounded-3xl p-6 shadow-lg shadow-brand/25 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-4 w-4" />
                  <span className="text-xs font-bold tracking-[0.2em]">WHY BOOK WITH US</span>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {[
                    { icon: Award, text: "3+ years of specialist experience" },
                    { icon: CheckCircle2, text: "500+ successful procedures" },
                    { icon: Clock, text: "On-time consultations" },
                    { icon: MapPin, text: "CARE CHL Hospitals, Indore" },
                  ].map((p) => (
                    <li key={p.text} className="flex items-center gap-2.5">
                      <p.icon className="h-4 w-4 shrink-0 opacity-90" />
                      <span className="opacity-95">{p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

// ---------- pieces ----------
function SlotGroup({
  title,
  slots,
  slot,
  setSlot,
  booked,
}: {
  title: string;
  slots: string[];
  slot: string | null;
  setSlot: (s: string) => void;
  booked: Set<string>;
}) {
  return (
    <div className="mb-5">
      <div className="text-xs font-bold text-foreground mb-2 tracking-wide">{title}</div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {slots.map((s) => {
          const isBooked = booked.has(s);
          const active = slot === s;
          return (
            <button
              key={s}
              type="button"
              disabled={isBooked}
              onClick={() => setSlot(s)}
              className={`text-xs font-bold py-2.5 rounded-lg border transition-all ${
                isBooked
                  ? "bg-muted text-muted-foreground/60 border-transparent cursor-not-allowed line-through"
                  : active
                    ? "bg-gradient-to-r from-brand to-accent text-white border-transparent shadow-md shadow-brand/25 -translate-y-0.5"
                    : "bg-white text-foreground border-border hover:border-brand hover:text-brand hover:-translate-y-0.5"
              }`}
            >
              {s}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon?: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-bold text-foreground mb-1.5">{label}</div>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5 focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/10 transition-all">
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
        {children}
      </div>
    </div>
  );
}

function SummaryRow({
  icon: Icon,
  label,
  value,
  muted,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-lg bg-brand-soft grid place-items-center text-brand">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">{label}</div>
        <div className={`text-sm font-semibold ${muted ? "text-muted-foreground" : "text-foreground"} truncate`}>{value}</div>
      </div>
    </div>
  );
}

function SuccessView({
  form,
  type,
  day,
  slot,
  onReset,
}: {
  form: { name: string; phone: string };
  type: { title: string; price: string };
  day: { date: Date };
  slot: string;
  onReset: () => void;
}) {
  return (
    <div className="text-center py-6 animate-fade-up">
      <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-brand to-accent grid place-items-center text-white shadow-lg shadow-brand/30 mb-5 animate-float">
        <CheckCircle2 className="h-10 w-10" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Appointment Confirmed!</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Thanks {form.name.split(" ")[0] || "there"} — we've reserved your slot. A confirmation SMS is on its way to {form.phone}.
      </p>
      <div className="max-w-sm mx-auto rounded-2xl border border-border/70 bg-gradient-to-br from-brand-soft to-white p-5 text-left space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-muted-foreground">Type</span><span className="font-bold">{type.title}</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span className="font-bold">{formatShortDate(day.date)}</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Time</span><span className="font-bold">{slot}</span></div>
        <div className="flex justify-between pt-2 border-t border-border/60"><span className="text-muted-foreground">Fee</span><span className="font-bold text-brand">{type.price}</span></div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex border-2 border-brand text-brand text-sm font-bold px-6 py-3 rounded-lg hover:bg-brand hover:text-white transition-all"
        >
          Back to Home
        </Link>
        <button
          onClick={onReset}
          className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-brand to-accent text-white text-sm font-bold px-6 py-3 rounded-lg shadow-lg shadow-brand/30 hover:-translate-y-0.5 transition-all"
        >
          Book Another
        </button>
      </div>
    </div>
  );
}
