import { useState, FormEvent, useEffect } from "react";
import { X, ArrowRight, ArrowLeft, Check, CalendarCheck, Mail, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  open: boolean;
  onClose: () => void;
}

const FOCUS_TAGS = [
  { value: "lead-gen", label: "Lead generation" },
  { value: "operations", label: "Operations" },
  { value: "automation", label: "Automation" },
  { value: "it-systems", label: "IT / systems" },
  { value: "general", label: "General strategy" },
] as const;

const TOTAL_STEPS = 3;
const TIME_SLOTS = [
  { day: "Tomorrow", time: "10:00 AM" },
  { day: "Tomorrow", time: "2:00 PM" },
  { day: "In 2 days", time: "11:00 AM" },
  { day: "In 2 days", time: "3:30 PM" },
  { day: "This week", time: "Flexible — email me times" },
];

export default function StrategyCallModal({ open, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [slot, setSlot] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(1); setName(""); setEmail(""); setFocus([]); setNote("");
        setErrors({}); setSubmitting(false); setSlot(""); setSubmitted(false);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!name.trim()) e.name = "Required";
      if (!email.trim()) e.email = "Required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email";
    }
    if (step === 3 && !slot) {
      e.slot = "Choose a time to continue";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep((s) => Math.min(s + 1, TOTAL_STEPS)); };
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const toggleFocus = (v: string) =>
    setFocus((arr) => arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step !== TOTAL_STEPS || !validate()) return;
    setSubmitting(true);
    (async () => {
      const submissionId = (crypto as any).randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
      const focusLabels = focus
        .map((v) => FOCUS_TAGS.find((t) => t.value === v)?.label)
        .filter(Boolean)
        .join(", ");
      const slotLabel = slot ? slot.replace(/-/g, " — ") : "";
      try {
        await Promise.all([
          supabase.functions.invoke("send-transactional-email", {
            body: {
              templateName: "strategy-call-confirmation",
              recipientEmail: email,
              idempotencyKey: `strategy-confirm-${submissionId}`,
              templateData: { name, slot: slotLabel },
            },
          }),
          supabase.functions.invoke("send-transactional-email", {
            body: {
              templateName: "internal-strategy-notification",
              recipientEmail: "SchmidtBrendan@outlook.com",
              idempotencyKey: `strategy-internal-${submissionId}`,
              templateData: { name, email, focus: focusLabels, note, slot: slotLabel },
            },
          }),
        ]);
      } catch (err) {
        console.error("Email send failed", err);
      }
      setSubmitting(false);
      setSubmitted(true);
    })();
  };

  const inputCls = (field: string) =>
    `w-full rounded-lg border ${errors[field] ? "border-destructive" : "border-border"} bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-2xl border border-border/40 bg-[hsl(var(--surface-elevated))] shadow-2xl animate-fade-in-scale">
        <div className="absolute inset-0 gradient-mesh-section opacity-40 pointer-events-none rounded-2xl" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/30"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative p-7 lg:p-9">
          {!submitted && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2 text-xs">
                <span className="font-semibold text-foreground/80">Step {step} of {TOTAL_STEPS}</span>
                <span className="text-muted-foreground">
                  {step === 1 ? "Contact info" : step === 2 ? "Context" : "Scheduling"}
                </span>
              </div>
              <div className="h-1 w-full rounded-full bg-muted/40 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(step / TOTAL_STEPS) * 100}%`,
                    background: "linear-gradient(90deg, hsl(var(--aurora-blue)), hsl(var(--aurora-teal)))",
                  }}
                />
              </div>
            </div>
          )}

          {!submitted && (
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest mb-3"
                style={{ background: "hsl(var(--aurora-blue) / 0.12)", color: "hsl(var(--aurora-blue))" }}>
                <CalendarCheck className="w-3 h-3" strokeWidth={2} /> Strategy Call
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                {step === 1 ? "Book a strategy call" : step === 2 ? "What should we focus on?" : "Pick a time that works"}
              </h2>
              <p className="text-sm text-muted-foreground mt-1.5">
                {step === 1
                  ? "A 30-minute call to map your current bottlenecks and next moves. No pitch."
                  : step === 2
                  ? "Optional, but it helps us prep the right questions."
                  : "Choose a slot below — we'll confirm by email within one business day."}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wide">Name *</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls("name")} placeholder="Your name" />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wide">Email *</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls("email")} placeholder="you@company.com" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wide">What are you looking to improve?</label>
                  <div className="flex flex-wrap gap-2">
                    {FOCUS_TAGS.map((t) => {
                      const active = focus.includes(t.value);
                      return (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => toggleFocus(t.value)}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
                            active
                              ? "border-accent/60 bg-accent/[0.1] text-foreground"
                              : "border-border/60 text-foreground/70 hover:border-border hover:text-foreground"
                          }`}
                        >
                          {active && <Check className="w-3 h-3" strokeWidth={2.5} />}
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wide">Anything specific?</label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                    className={`${inputCls("note")} resize-none`}
                    placeholder="A short note helps us prep (optional)"
                  />
                </div>
              </>
            )}

            {step === 3 && !submitted && (
              <div>
                <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wide">Available windows</label>
                <div className="space-y-2">
                  {TIME_SLOTS.map((s) => {
                    const id = `${s.day}-${s.time}`;
                    const active = slot === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => {
                          setSlot(id);
                          setErrors((current) => {
                            const { slot: _slot, ...rest } = current;
                            return rest;
                          });
                        }}
                        className={`w-full flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                          active
                            ? "border-accent/60 bg-accent/[0.1] text-foreground"
                            : "border-border/60 text-foreground/80 hover:border-border hover:text-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" strokeWidth={1.75} />
                          {s.day}
                        </span>
                        <span className="text-muted-foreground">{s.time}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.slot && <p className="text-xs text-destructive mt-2">{errors.slot}</p>}
              </div>
            )}

            {submitted && (
              <div className="text-center py-6 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                  style={{ background: "linear-gradient(135deg, hsl(var(--aurora-blue) / 0.15), hsl(var(--aurora-teal) / 0.15))" }}>
                  <Mail className="w-7 h-7" strokeWidth={1.75} style={{ color: "hsl(var(--aurora-blue))" }} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  You're on the list
                </h2>
                <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  We'll follow up with available times and next steps within one business day.
                </p>
                <button type="button" onClick={onClose} className="btn-outline-light mt-7">
                  Close
                </button>
              </div>
            )}

            {!submitted && (
              <div className="flex items-center justify-between pt-2 gap-3">
                {step > 1 ? (
                  <button type="button" onClick={back} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1.5" strokeWidth={1.75} /> Back
                  </button>
                ) : <span />}

                {step < TOTAL_STEPS ? (
                  <button type="button" onClick={next} className="btn-lime group ml-auto">
                    Continue <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </button>
                ) : (
                  <button type="submit" disabled={submitting || !slot} className="btn-lime group ml-auto disabled:opacity-60">
                    {submitting ? "Booking..." : "Request call"}
                    {!submitting && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />}
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
