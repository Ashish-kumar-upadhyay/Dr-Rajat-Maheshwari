import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  Stethoscope,
  Heart,
  Shield,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
  Pencil,
  Users,
  ArrowRight,
  User,
  Menu,
  X,
} from "lucide-react";
import doctorImg from "@/assets/doctor.png";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [
      { rel: "icon", type: "image/x-icon", href: "/fevicon.ico" },
    ],
  }),
});

const services = [
  { icon: Activity, title: "Vascular Surgery", desc: "Advanced surgical treatment of arteries and veins to restore healthy blood flow." },
  { icon: Stethoscope, title: "Endovascular Procedures", desc: "Minimally invasive procedures using catheter-based technology." },
  { icon: Heart, title: "Varicose Vein Treatment", desc: "Modern RFA & Venaseal techniques for lasting relief." },
  { icon: Shield, title: "Diabetic Foot Care", desc: "Comprehensive management of diabetic vascular complications." },
];

const expertise = [
  "Vascular Surgery",
  "Endovascular Procedures",
  "Angioplasty & Stenting",
  "Arterial Bypass Surgery",
  "Varicose Vein Treatment",
  "Diabetic Foot Care",
  "AV Access Creation",
  "Carotid Artery Surgery",
  "EVAR / TEVAR",
  "DVT Management",
  "Pulmonary Embolism Management",
  "Peripheral Arterial Disease",
];

const testimonials = [
  { name: "Rohit Sharma", role: "Patient", text: "Dr. Rajat is an exceptional doctor who explained every step of my treatment clearly. Highly recommended for vascular issues." },
  { name: "Priya Verma", role: "Patient", text: "Compassionate care and world-class expertise. I felt confident from the very first consultation. Highly recommended." },
  { name: "Suresh Patil", role: "Patient", text: "Excellent varicose vein treatment. Painless procedure and quick recovery. Truly one of the best in Indore." },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* NAV */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-border/60 shadow-[0_4px_20px_-12px_rgba(26,111,212,0.25)]"
            : "bg-transparent"
        }`}
      >
        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand to-accent grid place-items-center text-white shadow-md shadow-brand/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Stethoscope className="h-[18px] w-[18px]" />
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-[15px] text-foreground">Dr. Rajat Maheshwari</div>
                <div className="text-[10.5px] text-muted-foreground tracking-[0.15em] uppercase">Vascular Surgeon</div>
              </div>
            </a>
            <nav className="flex items-center gap-8 text-sm text-muted-foreground">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Expertise", "#expertise"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="relative transition-colors duration-200 hover:text-brand after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-brand after:to-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="/book-appointment"
                className="btn-shine rounded-full bg-gradient-to-r from-brand to-accent text-white px-5 py-2.5 text-sm font-medium shadow-md shadow-brand/25 hover:shadow-lg hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Appointment
              </a>
              <button
                type="button"
                aria-label="Login / Sign Up"
                onClick={() => window.dispatchEvent(new CustomEvent("open-auth-modal"))}
                className="h-8 w-8 rounded-full border border-brand/20 bg-white text-brand grid place-items-center transition-all duration-300 hover:bg-brand hover:text-white hover:border-brand hover:-translate-y-0.5 shadow-sm"
              >
                <User className="h-[14px] w-[14px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className={`md:hidden px-4 py-3 flex items-center justify-between relative transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-border/60 shadow-[0_4px_20px_-12px_rgba(26,111,212,0.25)]"
            : "bg-transparent"
        }`}>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand to-accent grid place-items-center text-white shadow-md shadow-brand/25">
              <Stethoscope className="h-[18px] w-[18px]" />
            </div>
            <div>
              <span className="font-bold text-sm text-foreground">Dr. Rajat Maheshwari</span>
              <p className="text-[10px] text-brand font-medium">Vascular Surgeon</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/book-appointment"
              className="bg-brand text-white px-3 py-1 rounded-md text-xs font-medium"
            >
              Book Now
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 rounded-full border border-brand/20 bg-white text-brand grid place-items-center transition-all duration-300 hover:bg-brand hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg z-50 animate-fade-down">
              <nav className="flex flex-col py-4 px-4 gap-2">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Services", "#services"],
                  ["Expertise", "#expertise"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-foreground py-2 px-3 rounded-md hover:bg-brand-soft transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-brand-soft to-blue-50 md:min-h-[640px] min-h-[500px]">

        {/* Desktop Hero */}
        <div className="hidden md:block">
          {/* accent blur circles */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent opacity-20 blur-3xl animate-blob" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand opacity-10 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(0deg,transparent 24%,rgba(26,111,212,0.1) 25%,rgba(26,111,212,0.1) 26%,transparent 27%,transparent 74%,rgba(26,111,212,0.1) 75%,rgba(26,111,212,0.1) 76%,transparent 77%,transparent), linear-gradient(90deg,transparent 24%,rgba(26,111,212,0.1) 25%,rgba(26,111,212,0.1) 26%,transparent 27%,transparent 74%,rgba(26,111,212,0.1) 75%,rgba(26,111,212,0.1) 76%,transparent 77%,transparent)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-6xl px-10 flex flex-row items-center justify-between gap-10" style={{ minHeight: 580 }}>
            {/* LEFT */}
            <div className="flex-1 py-16 animate-fade-up">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-white/70 backdrop-blur border border-brand/15 rounded-full shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <span className="text-brand text-xs font-bold tracking-[0.2em]">WELCOME</span>
              </div>
              <h1 className="font-bold text-foreground mb-3" style={{ fontSize: "clamp(44px,6vw,64px)", lineHeight: 1.05, letterSpacing: "-1px" }}>
                Dr. Rajat<br />
                <span className="bg-gradient-to-r from-brand via-accent to-brand bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_6s_linear_infinite]">Maheshwari</span>
              </h1>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-gradient-to-b from-brand to-accent rounded-full" />
                <div>
                  <p className="text-brand text-sm font-bold">Vascular & Endovascular Surgeon</p>
                  <p className="text-muted-foreground text-xs">CARE CHL Hospitals, Indore</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
                Specialized vascular care with minimally invasive procedures. 3+ years of experience treating arterial and venous diseases with exceptional patient outcomes.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 group">
                  <Star className="h-[18px] w-[18px] text-yellow-400 fill-yellow-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  <div>
                    <div className="font-bold text-foreground text-sm">4.9/5.0</div>
                    <div className="text-muted-foreground text-xs">70+ Reviews</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex items-center gap-2 group">
                  <Users className="h-[18px] w-[18px] text-brand transition-transform duration-300 group-hover:scale-125" />
                  <div>
                    <div className="font-bold text-foreground text-sm">500+</div>
                    <div className="text-muted-foreground text-xs">Patients Treated</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/book-appointment"
                  className="btn-shine group inline-flex items-center gap-2 bg-gradient-to-r from-brand to-accent text-white text-sm font-bold px-8 py-3.5 rounded-lg shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book Appointment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#about"
                  className="inline-flex border-2 border-brand text-brand text-sm font-bold px-8 py-3.5 rounded-lg hover:bg-brand hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex-shrink-0 w-[440px] animate-fade-in" style={{ height: 560 }}>
              {/* glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-brand/25 to-accent/25 rounded-3xl blur-3xl animate-blob" />

              {/* Calendar card - top left */}
              <div
                className="absolute top-8 left-0 bg-white/95 backdrop-blur rounded-2xl p-6 z-10 w-[300px] animate-float-slow hover:-translate-y-1 transition-transform duration-500"
                style={{ boxShadow: "0 25px 70px rgba(26, 111, 212, 0.20)" }}
              >
                <div className="text-muted-foreground text-xs font-bold mb-4 tracking-wide">FEBRUARY 2024</div>
                <div className="flex items-center gap-1.5 mb-2">
                  {["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"].map((d) => (
                    <div key={d} className="flex-1 text-center text-foreground font-bold" style={{ fontSize: 10, letterSpacing: "0.5px" }}>
                      {d}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  {[17, 18, 19, 20, 21, 22, 23].map((n) => {
                    const active = n === 20;
                    return (
                      <div
                        key={n}
                        className={`flex-1 text-center py-2.5 rounded-lg font-bold text-[13px] transition-all duration-300 ${
                          active
                            ? "bg-gradient-to-br from-brand to-accent text-white shadow-lg shadow-brand/40 scale-110"
                            : "text-foreground hover:bg-brand-soft hover:scale-105 cursor-pointer"
                        }`}
                      >
                        {n}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-brand" />
                  <span className="text-muted-foreground text-xs">Next Slot: Today, 3:00 PM</span>
                </div>
              </div>

              {/* Doctor image */}
              <img
                src={doctorImg}
                alt="Dr. Rajat Maheshwari"
                className="absolute right-0 bottom-0 object-contain z-20"
                style={{ height: 540, filter: "drop-shadow(0 25px 45px rgba(26, 111, 212, 0.3))" }}
              />

              {/* 3+ Years badge - bottom left */}
              <div
                className="absolute bottom-8 left-0 bg-white rounded-2xl px-5 py-4 z-30 text-center animate-float hover:scale-105 transition-transform duration-300"
                style={{ boxShadow: "0 25px 70px rgba(26, 111, 212, 0.20)", border: "1px solid rgba(26, 111, 212, 0.1)", animationDelay: "-2s" }}
              >
                <div className="font-bold text-2xl bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent leading-none">3+</div>
                <div className="text-xs font-bold text-brand mt-1 tracking-wide">YEARS EXP.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className="md:hidden bg-gradient-to-b from-brand-soft to-white px-4 py-8 flex flex-col items-center gap-5 text-center relative">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative w-36 h-44 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl shadow-brand/20">
            <img
              src={doctorImg}
              className="w-full h-full object-cover object-top"
              alt="Dr. Rajat Maheshwari"
            />

            {/* 3+ years badge - bottom left corner */}
            <div className="absolute bottom-2 left-2 z-20 bg-gradient-to-br from-brand to-accent text-white rounded-lg px-2 py-1 shadow-md shadow-brand/40 text-center hover:scale-105 transition-transform">
              <div className="text-sm font-bold leading-none">3+</div>
              <div className="text-[8px] mt-0.5 opacity-90 leading-tight">Exp</div>
            </div>
          </div>

          {/* Trusted by Patients badge - top right outside */}
          <div className="absolute top-8 right-8 z-20 bg-white rounded-lg shadow-md px-2 py-1.5 flex items-center gap-1.5 animate-float hover:-translate-y-0.5 transition-transform" style={{ animationDelay: "-3s" }}>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-2 w-2 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-[8px] font-semibold text-foreground mt-0.5">Trusted by Patients</div>
            </div>
            <div className="flex -space-x-1">
              <div className="h-4 w-4 rounded-full bg-brand-soft border-2 border-white" />
              <div className="h-4 w-4 rounded-full bg-brand/40 border-2 border-white" />
            </div>
            <div className="h-5 w-5 rounded-full bg-brand grid place-items-center">
              <ArrowRight className="h-2.5 w-2.5 text-white" />
            </div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 bg-brand/10 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-70 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              <span className="text-brand text-[10px] font-bold tracking-widest uppercase">Welcome</span>
            </div>
            <h1 className="font-bold text-2xl text-foreground leading-tight">
              Dr. Rajat<br />Maheshwari
            </h1>
            <p className="text-brand font-semibold text-sm mt-1">
              Vascular & Endovascular Surgeon
            </p>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed relative z-10 max-w-xs">
            Specialized expertise in vascular and endovascular procedures with 3+ years of clinical experience.
          </p>
          <div className="flex gap-6 w-full justify-center relative z-10">
            <div className="text-center">
              <div className="font-bold text-2xl text-foreground">4.9</div>
              <div className="text-muted-foreground text-xs">Rating</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-foreground">500+</div>
              <div className="text-muted-foreground text-xs">Patients</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-foreground">3+</div>
              <div className="text-muted-foreground text-xs">Years</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full relative z-10">
            <a
              href="/book-appointment"
              className="bg-gradient-to-r from-brand to-accent text-white px-4 py-3 rounded-lg text-sm font-semibold w-full text-center shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 transition-all duration-300"
            >
              Book Appointment
            </a>
            <button className="border-2 border-brand text-brand px-4 py-3 rounded-lg text-sm font-semibold w-full hover:bg-brand hover:text-white transition-all duration-300">
              Like & Follow
            </button>
          </div>
        </div>
      </section>



      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden">
        {/* Desktop About */}
        <div className="hidden md:block">
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-soft opacity-60 blur-3xl -z-10" />
          <div className="mx-auto max-w-6xl px-10 py-24 grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT: doctor visual */}
            <div className="relative flex justify-center reveal">
              <div className="relative w-[360px] h-[420px]">
                {/* soft circular backdrop */}
                <div className="absolute inset-x-4 top-6 bottom-14 rounded-full bg-gradient-to-br from-brand-soft to-blue-100" />
                <div className="absolute inset-x-4 top-6 bottom-14 rounded-full border-2 border-dashed border-brand/20 animate-[spin_40s_linear_infinite]" />

                {/* floating message icon - top left */}
                <div className="absolute top-8 -left-2 z-20 h-11 w-11 rounded-2xl bg-white shadow-lg grid place-items-center animate-float-slow hover:scale-110 transition-transform">
                  <Mail className="h-4 w-4 text-brand" />
                </div>

                {/* Trusted by Patients card - top right */}
                <div className="absolute top-4 right-0 z-20 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 animate-float hover:-translate-y-1 transition-transform" style={{ animationDelay: "-3s" }}>
                  <div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <div className="text-[10px] font-semibold text-foreground mt-0.5">Trusted by Patients</div>
                  </div>
                  <div className="flex -space-x-1.5">
                    <div className="h-5 w-5 rounded-full bg-brand-soft border-2 border-white" />
                    <div className="h-5 w-5 rounded-full bg-brand/40 border-2 border-white" />
                  </div>
                  <div className="h-6 w-6 rounded-full bg-brand grid place-items-center">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* doctor image */}
                <img
                  src={doctorImg}
                  alt="Dr. Rajat Maheshwari"
                  className="absolute inset-x-0 bottom-6 mx-auto z-10 object-contain transition-transform duration-700 hover:scale-[1.03]"
                  style={{ height: 400, filter: "drop-shadow(0 25px 45px rgba(26, 111, 212, 0.2))" }}
                />

                {/* 3+ years badge - bottom left */}
                <div className="absolute bottom-8 left-0 z-20 bg-gradient-to-br from-brand to-accent text-white rounded-2xl px-5 py-4 shadow-xl shadow-brand/40 text-center hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold leading-none">3+</div>
                  <div className="text-xs mt-1 opacity-90 leading-tight">Years of<br />Experience</div>
                </div>
              </div>
            </div>

            {/* RIGHT: content */}
            <div className="reveal" style={{ transitionDelay: "0.15s" }}>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Dr. Rajat <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Maheshwari</span>
              </h2>
              <div className="mt-4 flex items-center gap-2 text-brand font-semibold text-sm">
                <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                Vascular & Endovascular Surgeon
              </div>
              <p className="mt-5 text-muted-foreground text-sm leading-relaxed max-w-lg">
                Dr. Rajat Maheshwari is a highly skilled Vascular & Endovascular Surgeon with over 3 years of dedicated experience in treating complex arterial and venous diseases. He specializes in advanced minimally invasive vascular procedures, enabling patients to achieve faster recovery and superior long-term vascular health outcomes.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4 bg-gradient-to-br from-brand-soft/80 to-white rounded-2xl p-5 border border-brand/10 shadow-sm">
                <div>
                  <div className="text-[11px] text-muted-foreground font-medium">Qualification</div>
                  <div className="text-sm font-bold text-foreground mt-1">MBBS, MS, DrNB</div>
                </div>
                <div className="border-l border-brand/15 pl-4">
                  <div className="text-[11px] text-muted-foreground font-medium">Hospital</div>
                  <div className="text-sm font-bold text-foreground mt-1">CARE CHL Hospitals</div>
                </div>
              </div>
              <a
                href="/book-appointment"
                className="btn-shine group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-accent text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book An Appointment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile About */}
        <div className="md:hidden bg-card px-4 py-8 flex flex-col gap-6">
          <div className="text-center">
            <span className="text-brand text-xs font-medium tracking-widest uppercase">About</span>
            <h2 className="font-bold text-xl text-foreground mt-1">
              Dr. Rajat Maheshwari
            </h2>
            <p className="text-brand text-xs font-medium mt-1">
              Vascular & Endovascular Surgeon
            </p>
          </div>
          <div className="flex justify-center gap-2">
            <a className="text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4285714285714284" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a className="text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4285714285714284" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path>
              </svg>
            </a>
            <a className="text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4285714285714284" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a className="text-brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4285714285714284" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
              </svg>
            </a>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed text-center">
            Dr. Rajat Maheshwari is a specialist Vascular Surgeon with over 3 years of experience in treating vascular and endovascular conditions. Committed to providing the highest quality patient care.
          </p>
          <div className="flex flex-col gap-2">
            <div className="bg-secondary px-3 py-2 rounded-md text-xs font-medium text-secondary-foreground text-center">
              MBBS, MS, DrNB
            </div>
            <div className="bg-secondary px-3 py-2 rounded-md text-xs font-medium text-secondary-foreground text-center">
              CIHV, CVL
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand flex-shrink-0 mt-0.5" />
              <span>Visiting Physician, ASI</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand flex-shrink-0 mt-0.5" />
              <span>Completed training at Military Medicine Institute</span>
            </div>
          </div>
          <a
            href="/book-appointment"
            className="bg-brand text-white px-4 py-2 rounded-md text-sm font-medium w-full text-center"
          >
            Book an Appointment
          </a>
        </div>
      </section>


      {/* SERVICES */}
      <section id="services" className="bg-gradient-to-b from-brand-soft/40 to-brand-soft/10 py-16 md:py-24">
        {/* Desktop Services */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto reveal">
              <div className="inline-block mb-3 px-4 py-1.5 bg-white border border-brand/15 rounded-full text-brand text-[11px] font-bold tracking-[0.2em]">
                WHAT WE OFFER
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Our <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Services</span></h2>
              <p className="mt-3 text-muted-foreground text-sm">
                Comprehensive vascular care with modern techniques and personalized treatment plans.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="card-hover reveal group relative bg-white rounded-2xl p-6 border border-border/60 overflow-hidden"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-soft to-blue-100 grid place-items-center text-brand transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-accent group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-base">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ArrowRight className="mt-4 h-4 w-4 text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Services */}
        <div className="md:hidden bg-background px-4 py-8">
          <div className="text-center mb-6">
            <span className="text-brand text-xs font-medium tracking-widest uppercase">Services</span>
            <h2 className="font-bold text-xl text-foreground mt-1">
              Our Services
            </h2>
            <p className="text-muted-foreground text-xs mt-2">
              Full spectrum of vascular care.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-lg p-4 flex flex-col gap-2"
              >
                <div className="h-9 w-9 rounded-md bg-secondary flex items-center justify-center">
                  <s.icon className="h-4 w-4 text-brand" />
                </div>
                <h3 className="font-bold text-sm text-foreground">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                <a className="text-brand text-xs font-medium">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl -z-10" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="inline-block mb-2 md:mb-3 px-3 md:px-4 py-1 md:py-1.5 bg-brand-soft border border-brand/15 rounded-full text-brand text-[10px] md:text-[11px] font-bold tracking-[0.2em]">
              JOURNEY
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Professional <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Experience</span></h2>
            <p className="mt-2 md:mt-3 text-muted-foreground text-xs md:text-sm">
              A comprehensive career in vascular surgery with a track record of successful outcomes.
            </p>
          </div>
          <div className="mt-8 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="space-y-6 md:space-y-8 md:text-right reveal">
              {[
                { role: "Senior Resident", place: "Gandhi Medical College, Bhopal", when: "2021–2022" },
                { role: "DrNB Trainee", place: "Sir Ganga Ram Hospital, New Delhi", when: "2022–2025" },
              ].map((x) => (
                <div key={x.role} className="group p-4 md:p-5 rounded-2xl hover:bg-brand-soft/60 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex md:justify-end items-center gap-2 text-brand font-semibold text-xs md:text-sm">
                    <span className="h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-brand group-hover:animate-ping" />
                    {x.role}
                  </div>
                  <div className="text-xs md:text-sm mt-1">{x.place}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{x.when}</div>
                </div>
              ))}
            </div>

            <div className="relative reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-brand to-accent text-white rounded-full px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-medium flex items-center gap-1 md:gap-1.5 shadow-lg shadow-brand/40 animate-float-slow">
                <Pencil className="h-2.5 w-2.5 md:h-3 md:w-3" /> Regular Checkup
              </div>
              <div className="relative rounded-full bg-gradient-to-br from-brand-soft to-blue-100 aspect-square max-w-[200px] md:max-w-xs mx-auto overflow-hidden shadow-xl shadow-brand/15">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand/20 animate-[spin_50s_linear_infinite]" />
                <img src={doctorImg} alt="Dr. Rajat Maheshwari" className="absolute inset-x-0 bottom-0 w-full object-contain translate-y-10 md:translate-y-14 transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="mt-4 md:mt-6 text-center">
                <div className="text-[10px] md:text-xs text-muted-foreground">Satisfied Patients</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">500+</div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8 reveal" style={{ transitionDelay: "0.3s" }}>
              {[
                { role: "Consultant Vascular Surgeon", place: "CARE CHL Hospitals, Indore", when: "2025 – Present" },
                { role: "Head of Vascular Surgery", place: "CARE CHL Hospitals, Indore", when: "2025 – Present" },
              ].map((x) => (
                <div key={x.role} className="group p-4 md:p-5 rounded-2xl hover:bg-brand-soft/60 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-brand font-semibold text-xs md:text-sm">
                    <span className="h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-brand group-hover:animate-ping" />
                    {x.role}
                  </div>
                  <div className="text-xs md:text-sm mt-1">{x.place}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{x.when}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="bg-gradient-to-b from-brand-soft/10 to-brand-soft/50 py-16 md:py-24">
        {/* Desktop Expertise */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto reveal">
              <div className="inline-block mb-3 px-4 py-1.5 bg-white border border-brand/15 rounded-full text-brand text-[11px] font-bold tracking-[0.2em]">
                SPECIALIZATIONS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Areas of <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Expertise</span></h2>
              <p className="mt-3 text-muted-foreground text-sm">
                Board-certified vascular surgeon delivering comprehensive care across a wide range of vascular conditions.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertise.map((e, i) => (
                <div
                  key={e}
                  className="reveal group bg-white rounded-full px-5 py-4 flex items-center gap-3 border border-border/60 hover:border-brand/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/15 transition-all duration-300"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  <span className="text-sm font-medium">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Expertise */}
        <div className="md:hidden bg-secondary px-4 py-8">
          <div className="text-center mb-6">
            <span className="text-brand text-xs font-medium tracking-widest uppercase">Expertise</span>
            <h2 className="font-bold text-xl text-foreground mt-1">
              Areas of Expertise
            </h2>
            <p className="text-muted-foreground text-xs mt-2">
              Specialized vascular expertise.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {expertise.map((e, i) => (
              <div key={e} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-xs text-foreground">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="py-16 md:py-24 bg-gradient-to-b from-brand-soft/50 via-brand-soft/20 to-white relative overflow-hidden">
        <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-brand/10 blur-3xl animate-blob" />
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />
        
        {/* Desktop Book */}
        <div className="hidden md:block">
          <div className="relative mx-auto max-w-6xl px-10 grid md:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <div className="inline-block mb-3 px-4 py-1.5 bg-white border border-brand/15 rounded-full text-brand text-[11px] font-bold tracking-[0.2em]">
                GET STARTED
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Book An<br /><span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Appointment</span>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">Schedule your consultation with Dr. Rajat Maheshwari today.</p>
              <form className="mt-8 space-y-3.5 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full rounded-full bg-white border border-border px-6 py-3.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300 shadow-sm hover:shadow-md" placeholder="Full Name" />
                <input type="email" className="w-full rounded-full bg-white border border-border px-6 py-3.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300 shadow-sm hover:shadow-md" placeholder="Email Address" />
                <input className="w-full rounded-full bg-white border border-border px-6 py-3.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300 shadow-sm hover:shadow-md" placeholder="Phone Number" />
                <div className="relative">
                  <input type="datetime-local" className="w-full rounded-full bg-white border border-border px-6 py-3.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300 shadow-sm hover:shadow-md text-muted-foreground" />
                </div>
                <button className="btn-shine group w-full rounded-full bg-gradient-to-r from-brand to-accent text-white py-4 text-sm font-bold hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-brand/30 mt-2 inline-flex items-center justify-center gap-2">
                  Book Appointment <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            <div className="relative flex justify-center reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="relative w-[380px] h-[440px]">
                {/* soft circular backdrop */}
                <div className="absolute inset-x-6 top-8 bottom-10 rounded-full bg-gradient-to-br from-brand-soft to-blue-100" />
                <div className="absolute inset-x-6 top-8 bottom-10 rounded-full border-2 border-dashed border-brand/20 animate-[spin_45s_linear_infinite]" />

                {/* doctor image */}
                <img
                  src={doctorImg}
                  alt="Dr. Rajat Maheshwari"
                  className="absolute inset-x-0 bottom-4 mx-auto z-10 object-contain transition-transform duration-700 hover:scale-[1.03]"
                  style={{ height: 420, filter: "drop-shadow(0 25px 45px rgba(26, 111, 212, 0.22))" }}
                />

                {/* 3+ Years badge - overlapping top right */}
                <div className="absolute top-8 right-2 z-20 bg-gradient-to-br from-brand to-accent text-white rounded-2xl px-4 py-3 shadow-xl shadow-brand/40 text-center min-w-[80px] animate-float hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold leading-none">3+</div>
                  <div className="text-[10px] mt-1 opacity-95 leading-tight font-medium">Years of<br />Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Book */}
        <div className="md:hidden px-4 py-8 flex flex-col gap-6">
          <div className="flex gap-4 items-start">
            <div className="flex-1 reveal">
              <div className="inline-block mb-2 px-3 py-1 bg-white border border-brand/15 rounded-full text-brand text-[10px] font-bold tracking-[0.2em]">
                GET STARTED
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Book An<br /><span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Appointment</span>
              </h2>
              <p className="mt-3 text-xs text-muted-foreground">Schedule your consultation with Dr. Rajat Maheshwari today.</p>
              <form className="mt-6 space-y-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full rounded-full bg-white border border-border px-4 py-3 text-xs outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300 shadow-sm hover:shadow-md" placeholder="Full Name" />
                <input type="email" className="w-full rounded-full bg-white border border-border px-4 py-3 text-xs outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300 shadow-sm hover:shadow-md" placeholder="Email Address" />
                <input className="w-full rounded-full bg-white border border-border px-4 py-3 text-xs outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300 shadow-sm hover:shadow-md" placeholder="Phone Number" />
                <div className="relative">
                  <input type="datetime-local" className="w-full rounded-full bg-white border border-border px-4 py-3 text-xs outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300 shadow-sm hover:shadow-md text-muted-foreground" />
                </div>
                <button className="btn-shine group w-full rounded-full bg-gradient-to-r from-brand to-accent text-white py-3 text-xs font-bold hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-brand/30 mt-2 inline-flex items-center justify-center gap-2">
                  Book Appointment <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            <div className="relative flex-shrink-0 reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="relative w-[140px] h-[200px]">
                {/* soft circular backdrop */}
                <div className="absolute inset-x-2 top-3 bottom-4 rounded-full bg-gradient-to-br from-brand-soft to-blue-100" />
                <div className="absolute inset-x-2 top-3 bottom-4 rounded-full border-2 border-dashed border-brand/20 animate-[spin_45s_linear_infinite]" />

                {/* doctor image */}
                <img
                  src={doctorImg}
                  alt="Dr. Rajat Maheshwari"
                  className="absolute inset-x-0 bottom-2 mx-auto z-10 object-contain transition-transform duration-700 hover:scale-[1.03]"
                  style={{ height: 180, filter: "drop-shadow(0 25px 45px rgba(26, 111, 212, 0.22))" }}
                />

                {/* 3+ Years badge - overlapping top right */}
                <div className="absolute top-3 right-1 z-20 bg-gradient-to-br from-brand to-accent text-white rounded-xl px-2 py-1.5 shadow-xl shadow-brand/40 text-center min-w-[50px] animate-float hover:scale-105 transition-transform">
                  <div className="text-lg font-bold leading-none">3+</div>
                  <div className="text-[8px] mt-0.5 opacity-95 leading-tight font-medium">Years<br />Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-soft/40">
        {/* Desktop Testimonials */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto reveal">
              <div className="inline-block mb-3 px-4 py-1.5 bg-white border border-brand/15 rounded-full text-brand text-[11px] font-bold tracking-[0.2em]">
                TESTIMONIALS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">What Our <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Clients Say</span></h2>
              <p className="mt-3 text-muted-foreground text-sm">Real experiences from patients treated with dedicated vascular care.</p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`reveal card-hover rounded-2xl p-6 ${i === 1 ? "bg-gradient-to-br from-brand to-accent text-brand-foreground shadow-xl shadow-brand/30 md:-translate-y-4" : "bg-white border border-border/60"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full ${i === 1 ? "bg-white/20" : "bg-brand-soft"}`} />
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className={`text-xs ${i === 1 ? "opacity-80" : "text-muted-foreground"}`}>{t.role}</div>
                    </div>
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${i === 1 ? "opacity-95" : "text-muted-foreground"}`}>{t.text}</p>
                  <div className="mt-4 flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className={`h-3.5 w-3.5 fill-current ${i === 1 ? "text-white" : "text-yellow-400"}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Testimonials */}
        <div className="md:hidden bg-background px-4 py-8">
          <div className="text-center mb-6">
            <span className="text-brand text-xs font-medium tracking-widest uppercase">Testimonials</span>
            <h2 className="font-bold text-xl text-foreground mt-1">
              Patient Success Stories
            </h2>
            <p className="text-muted-foreground text-xs mt-2">
              Real experiences from patients.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`rounded-lg p-4 flex flex-col gap-3 ${i === 1 ? "bg-primary text-primary-foreground" : "bg-card border border-border"}`}
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className={`h-3 w-3 fill-current ${i === 1 ? "text-primary-foreground" : "text-brand"}`} />
                  ))}
                </div>
                <p className={`text-xs leading-relaxed ${i === 1 ? "text-primary-foreground" : "text-muted-foreground"}`}>{t.text}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-8 w-8 rounded-full bg-brand-soft" />
                  <div>
                    <div className="font-semibold text-xs text-foreground">{t.name}</div>
                    <div className={`text-xs ${i === 1 ? "opacity-60 text-primary-foreground" : "opacity-60 text-muted-foreground"}`}>Verified Patient</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-4 md:py-24 bg-gradient-to-b from-brand-soft/40 to-white">
        {/* Desktop Contact */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto reveal">
              <div className="inline-block mb-3 px-4 py-1.5 bg-white border border-brand/15 rounded-full text-brand text-[11px] font-bold tracking-[0.2em]">
                CONTACT
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Get In <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Touch</span></h2>
              <p className="mt-3 text-muted-foreground text-sm">Reach out to us and our team will get back to you shortly.</p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-10">
              <form className="space-y-4 reveal bg-white rounded-3xl p-8 border border-border/60 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <h3 className="font-semibold text-lg">Send Message</h3>
                <input className="w-full rounded-full border border-input px-5 py-3.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300" placeholder="Full Name" />
                <input type="email" className="w-full rounded-full border border-input px-5 py-3.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300" placeholder="Email Address" />
                <textarea rows={4} className="w-full rounded-2xl border border-input px-5 py-3.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 transition-all duration-300 resize-none" placeholder="Message" />
                <button className="btn-shine group w-full rounded-full bg-gradient-to-r from-brand to-accent text-brand-foreground py-3.5 text-sm font-medium hover:shadow-lg hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2">
                  Send Message <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
              <div className="reveal" style={{ transitionDelay: "0.15s" }}>
                <h3 className="font-semibold mb-6 text-lg">Contact Information</h3>
                <div className="space-y-4">
                  <ContactRow icon={Mail} label="Email Address" value="infochl@carehospitals.com" />
                  <ContactRow icon={Phone} label="Phone Number" value="+91 731 4774444" />
                  <ContactRow icon={MapPin} label="Hospital Address" value="CARE CHL Hospitals, AB Road, Near LIG Square, Indore, MP – 452008" />
                  <ContactRow icon={Clock} label="Working Hours" value="Monday–Friday: 9:00 AM – 6:00 PM • Saturday: 9:00 AM – 2:00 PM" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Contact */}
        <div className="md:hidden bg-card px-4 py-8">
          <div className="text-center mb-6">
            <span className="text-brand text-xs font-medium tracking-widest uppercase">Contact</span>
            <h2 className="font-bold text-xl text-foreground mt-1">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-xs mt-2">
              Schedule consultation or visit directly.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold text-sm text-foreground mb-4">
                Send Message
              </h3>
              <div className="flex flex-col gap-3">
                <div className="bg-input border border-border rounded-md px-3 py-2 text-muted-foreground text-xs">
                  Your Name
                </div>
                <div className="bg-input border border-border rounded-md px-3 py-2 text-muted-foreground text-xs">
                  Your Email
                </div>
                <div className="bg-input border border-border rounded-md px-3 py-2 text-muted-foreground text-xs">
                  Your Mobile
                </div>
                <div className="bg-input border border-border rounded-md px-3 py-6 text-muted-foreground text-xs">
                  Your Message
                </div>
                <button className="bg-brand text-white px-4 py-2 rounded-md text-xs font-medium w-full">
                  Send Message
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm text-foreground mb-4">
                Contact Information
              </h3>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-start gap-2">
                  <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-brand" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-xs font-semibold text-foreground">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-3.5 w-3.5 text-brand" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-xs font-semibold text-foreground">dr.rajat@vascularclinic.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-brand" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Address</div>
                    <div className="text-xs font-semibold text-foreground">CMS City Heart, CG Square,</div>
                    <div className="text-xs text-muted-foreground">Vijay Nagar, Indore, MP 452010</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="h-3.5 w-3.5 text-brand" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Hours</div>
                    <div className="text-xs font-semibold text-foreground">Mon–Sat: 10 AM – 2 PM</div>
                    <div className="text-xs text-muted-foreground">5 PM – 8 PM</div>
                  </div>
                </div>
              </div>
              <a className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground border border-border rounded-md py-2 text-xs font-medium">
                <ArrowRight className="h-3 w-3" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-brand via-brand to-accent text-brand-foreground relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          <div className="col-span-3 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 group">
              <div className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-white/20 grid place-items-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Stethoscope className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span className="font-semibold text-sm md:text-base">Dr. Rajat Maheshwari</span>
            </div>
            <p className="text-xs md:text-sm opacity-80 leading-relaxed">
              Vascular & Endovascular Surgeon delivering compassionate, world-class care in Indore.
            </p>
          </div>
          <FooterCol title="Menu" items={["Home", "About", "Services", "Contact"]} />
          <FooterCol title="Services" items={["Vascular Surgery", "Endovascular", "Varicose Vein", "Diabetic Foot"]} />
          <FooterCol title="Legal" items={["Terms & Conditions", "Privacy Policy", "Support"]} />
        </div>
        <div className="relative border-t border-white/10 py-4 md:py-5">
          <div className="mx-auto max-w-7xl px-4 md:px-6 text-[10px] md:text-xs opacity-70 text-center md:text-left">© 2026 Dr. Rajat Maheshwari. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="group flex gap-4 p-3 rounded-2xl hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-soft to-blue-100 grid place-items-center text-brand flex-shrink-0 transition-all duration-300 group-hover:from-brand group-hover:to-accent group-hover:text-white group-hover:rotate-6">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium mt-0.5 break-words">{value}</div>
      </div>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm opacity-80">
        {items.map((i) => (
          <li key={i} className="hover:opacity-100 hover:translate-x-1 transition-all duration-300 cursor-pointer">{i}</li>
        ))}
      </ul>
    </div>
  );
}
