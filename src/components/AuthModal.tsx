import { useEffect, useState, useCallback } from "react";
import { X, Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";
import doctorImg from "@/assets/doctor.png";

export function AuthModal() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [remember, setRemember] = useState(true);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setMounted(false);
      setClosing(false);
    }, 280);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem("drr_seen_auth") === "1") return;
    } catch {}
    const t = setTimeout(() => {
      setMounted(true);
      try {
        localStorage.setItem("drr_seen_auth", "1");
      } catch {}
      requestAnimationFrame(() => setOpen(true));
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onOpen = () => {
      setClosing(false);
      setMounted(true);
      requestAnimationFrame(() => setOpen(true));
    };
    window.addEventListener("open-auth-modal", onOpen);
    return () => window.removeEventListener("open-auth-modal", onOpen);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted, close]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={close}
        className={`absolute inset-0 bg-slate-900/50 backdrop-blur-[4px] ${
          closing ? "animate-backdrop-out" : "animate-backdrop-in"
        }`}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-[900px] overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(30,64,175,0.45)] ${
          closing ? "animate-modal-out" : "animate-modal-in"
        }`}
        style={{ transformOrigin: "center" }}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-500 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:bg-white hover:text-slate-900 hover:rotate-90 hover:scale-110"
        >
          <X className="h-4 w-4" />
        </button>


        <div className="grid md:grid-cols-2">
          {/* Left brand panel */}
          <div className="relative hidden md:flex flex-col overflow-hidden bg-gradient-to-b from-[#4f8dfa] via-[#3b82f6] to-[#1e40af] text-white">
            <div className="relative z-10 flex items-center gap-2 p-6">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#2563eb] font-bold shadow">
                R
              </div>
              <span className="text-lg font-semibold">Dr. Rajat</span>
            </div>

            <div className="relative mt-auto flex-1">
              <img
                src={doctorImg}
                alt="Dr. Rajat"
                className="absolute inset-x-0 bottom-0 mx-auto h-full w-full object-contain object-bottom"
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1e40af]/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <h3 className="text-xl font-bold tracking-tight drop-shadow">
                  Your Health, Our Priority
                </h3>
                <p className="mt-1 text-xs text-white/85">
                  Expert Vascular Care
                </p>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="p-6 sm:p-8">
            {/* Tabs */}
            <div className="relative mb-6 grid grid-cols-2 rounded-full bg-slate-100 p-1">
              {/* Sliding indicator */}
              <span
                aria-hidden
                className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-[#2563eb] shadow-md shadow-[#2563eb]/30 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: tab === "login" ? "translateX(0%)" : "translateX(100%)",
                }}
              />
              <button
                onClick={() => setTab("login")}
                className={`relative z-10 rounded-full py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  tab === "login" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setTab("signup")}
                className={`relative z-10 rounded-full py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  tab === "signup" ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sign Up
              </button>
            </div>


            {tab === "login" ? (
              <form
                key="login"
                className="animate-fade-up"
                onSubmit={(e) => {
                  e.preventDefault();
                  close();
                }}
              >
                <h2
                  id="auth-title"
                  className="text-2xl font-bold tracking-tight text-slate-900"
                >
                  Welcome Back
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Sign in to manage your appointments and health records.
                </p>

                <div className="mt-6 space-y-4">
                  <FieldLabel label="Email Address">
                    <InputIcon icon={<Mail className="h-4 w-4" />}>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full bg-transparent outline-none placeholder:text-slate-400"
                      />
                    </InputIcon>
                  </FieldLabel>

                  <FieldLabel label="Password">
                    <InputIcon
                      icon={<Lock className="h-4 w-4" />}
                      right={
                        <button
                          type="button"
                          onClick={() => setShowPwd((s) => !s)}
                          className="text-slate-400 hover:text-slate-600"
                          aria-label="Toggle password visibility"
                        >
                          {showPwd ? (
                            <Eye className="h-4 w-4" />
                          ) : (
                            <EyeOff className="h-4 w-4" />
                          )}
                        </button>
                      }
                    >
                      <input
                        type={showPwd ? "text" : "password"}
                        required
                        placeholder="Enter your password"
                        className="w-full bg-transparent outline-none placeholder:text-slate-400"
                      />
                    </InputIcon>
                  </FieldLabel>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-slate-600">
                      <button
                        type="button"
                        onClick={() => setRemember((r) => !r)}
                        className={`grid h-4 w-4 place-items-center rounded border transition ${
                          remember
                            ? "border-[#2563eb] bg-[#2563eb] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                        aria-pressed={remember}
                      >
                        {remember && (
                          <svg viewBox="0 0 12 12" className="h-3 w-3">
                            <path
                              d="M2 6.5l2.5 2.5L10 3.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                      Remember me
                    </label>
                    <a
                      href="#"
                      className="font-medium text-[#2563eb] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#2563eb] py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/25 transition hover:bg-[#1d4ed8] active:scale-[0.99]"
                  >
                    Sign In
                  </button>

                  <Divider />

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <GoogleIcon />
                    Continue with Google
                  </button>

                  <p className="pt-1 text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setTab("signup")}
                      className="font-semibold text-[#2563eb] hover:underline"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              <form
                key="signup"
                className="animate-fade-up"
                onSubmit={(e) => {
                  e.preventDefault();
                  close();
                }}
              >
                <h2
                  id="auth-title"
                  className="text-2xl font-bold tracking-tight text-slate-900"
                >
                  Create Account
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Join us to book appointments and access your health records.
                </p>

                <div className="mt-6 space-y-4">
                  <FieldLabel label="Full Name">
                    <InputIcon icon={<User className="h-4 w-4" />}>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-transparent outline-none placeholder:text-slate-400"
                      />
                    </InputIcon>
                  </FieldLabel>

                  <FieldLabel label="Email Address">
                    <InputIcon icon={<Mail className="h-4 w-4" />}>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full bg-transparent outline-none placeholder:text-slate-400"
                      />
                    </InputIcon>
                  </FieldLabel>

                  <FieldLabel label="Phone Number">
                    <InputIcon icon={<Phone className="h-4 w-4" />}>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone"
                        className="w-full bg-transparent outline-none placeholder:text-slate-400"
                      />
                    </InputIcon>
                  </FieldLabel>

                  <FieldLabel label="Password">
                    <InputIcon
                      icon={<Lock className="h-4 w-4" />}
                      right={
                        <button
                          type="button"
                          onClick={() => setShowPwd2((s) => !s)}
                          className="text-slate-400 hover:text-slate-600"
                          aria-label="Toggle password visibility"
                        >
                          {showPwd2 ? (
                            <Eye className="h-4 w-4" />
                          ) : (
                            <EyeOff className="h-4 w-4" />
                          )}
                        </button>
                      }
                    >
                      <input
                        type={showPwd2 ? "text" : "password"}
                        required
                        placeholder="Create a password"
                        className="w-full bg-transparent outline-none placeholder:text-slate-400"
                      />
                    </InputIcon>
                  </FieldLabel>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#2563eb] py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/25 transition hover:bg-[#1d4ed8] active:scale-[0.99]"
                  >
                    Create Account
                  </button>

                  <Divider />

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <GoogleIcon />
                    Continue with Google
                  </button>

                  <p className="pt-1 text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setTab("login")}
                      className="font-semibold text-[#2563eb] hover:underline"
                    >
                      Login
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldLabel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-800">
        {label}
      </span>
      {children}
    </label>
  );
}

function InputIcon({
  icon,
  right,
  children,
}: {
  icon: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-slate-100/80 px-3.5 py-3 text-sm text-slate-700 ring-1 ring-transparent transition focus-within:bg-white focus-within:ring-[#2563eb]/40">
      <span className="text-slate-400">{icon}</span>
      <div className="flex-1">{children}</div>
      {right}
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 py-1 text-xs text-slate-400">
      <span className="h-px flex-1 bg-slate-200" />
      or
      <span className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.8 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5c10.8 0 19.5-8.7 19.5-19.5 0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.1l6.6 4.8C14.7 15.3 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.1z"
      />
      <path
        fill="#4CAF50"
        d="M24 43.5c5 0 9.5-1.7 12.9-4.6l-6-4.9c-2 1.4-4.4 2.2-6.9 2.2-5.3 0-9.8-3.1-11.3-7.5l-6.6 5.1C9.6 39 16.2 43.5 24 43.5z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.7 2-2 3.8-3.6 5l6 4.9c-.4.4 6.3-4.6 6.3-13.9 0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}
