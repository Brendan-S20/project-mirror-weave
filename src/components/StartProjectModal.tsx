import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, ArrowRight, ArrowLeft, Check, Layers, Workflow, Megaphone, Server, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  open: boolean;
  onClose: () => void;
}

const PROJECT_TYPES = [
  { value: "growth-infrastructure", label: "Growth Infrastructure", desc: "Systems for scalable growth", Icon: Layers },
  { value: "automation-systems", label: "Automation & Systems", desc: "Workflows and AI ops", Icon: Workflow },
  { value: "creative-content", label: "Creative & Content", desc: "Brand, content, performance", Icon: Megaphone },
  { value: "technology-it", label: "Technology & IT Services", desc: "Infrastructure, MSP, tools", Icon: Server },
] as const;

const TIMELINES = [
  { value: "asap", label: "ASAP" },
  { value: "1-3", label: "1–3 months" },
  { value: "3-6", label: "3–6 months" },
];

const BUDGETS = [
  { value: "2-5k", label: "$2k–$5k" },
  { value: "5-10k", label: "$5k–$10k" },
  { value: "10-25k", label: "$10k–$25k" },
  { value: "25k+", label: "$25k+" },
];

const TOTAL_STEPS = 4;

export default function StartProjectModal({ open, onClose }: Props) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(1);
        setName(""); setCompany(""); setEmail("");
        setTypes([]); setDescription(""); setTimeline(""); setBudget("");
        setErrors({}); setSubmitting(false);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const validateStep = () => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!name.trim()) e.name = "Required";
      if (!email.trim()) e.email = "Required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email";
    }
    if (step === 2 && types.length === 0) e.types = "Pick at least one";
    if (step === 3 && !timeline) e.timeline = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(s + 1, TOTAL_STEPS)); };
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const toggleType = (v: string) =>
    setTypes((arr) => arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setSubmitting(true);
    (async () => {
      const submissionId = (crypto as any).randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
      const typeLabels = types
        .map((v) => PROJECT_TYPES.find((p) => p.value === v)?.label)
        .filter(Boolean)
        .join(", ");
      const timelineLabel = TIMELINES.find((t) => t.value === timeline)?.label ?? timeline;
      const budgetLabel = BUDGETS.find((b) => b.value === budget)?.label ?? budget;
      const data = {
        name, email, company,
        types: typeLabels,
        description,
        timeline: timelineLabel,
        budget: budgetLabel,
      };
      try {
        await Promise.all([
          supabase.functions.invoke("send-transactional-email", {
            body: {
              templateName: "project-intake-confirmation",
              recipientEmail: email,
              idempotencyKey: `project-confirm-${submissionId}`,
              templateData: { name },
            },
          }),
          supabase.functions.invoke("send-transactional-email", {
            body: {
              templateName: "internal-project-notification",
              recipientEmail: "SchmidtBrendan@outlook.com",
              idempotencyKey: `project-internal-${submissionId}`,
              templateData: data,
            },
          }),
        ]);
      } catch (err) {
        console.error("Email send failed", err);
      }
      setSubmitting(false);
      setStep(4);
    })();
  };

  const finish = () => {
    onClose();
    navigate("/thank-you");
  };

  const inputCls = (field: string) =>
    `w-full rounded-lg border ${errors[field] ? "border-destructive" : "border-border"} bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl border border-border/40 bg-[hsl(var(--surface-elevated))] shadow-2xl animate-fade-in-scale">
        <div className="absolute inset-0 gradient-mesh-cta opacity-40 pointer-events-none rounded-2xl" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/30"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative p-7 lg:p-9">
          {/* Progress */}
          {step < 4 && (
            <div className="mb-7">
              <div className="flex items-center justify-between mb-2.5 text-xs">
                <span className="font-semibold text-foreground/80">Step {step} of {TOTAL_STEPS - 0}</span>
                <span className="text-muted-foreground">
                  {step === 1 && "Basic info"}
                  {step === 2 && "Project type"}
                  {step === 3 && "Project details"}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted/40 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(step / (TOTAL_STEPS - 1)) * 100}%`,
                    background: "linear-gradient(90deg, hsl(var(--aurora-green)), hsl(var(--aurora-teal)))",
                  }}
                />
              </div>
            </div>
          )}

          {/* Header */}
          {step < 4 && (
            <div className="mb-6">
              <div className="badge-pill mb-3 text-[10px]">Start a Project</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                {step === 1 && "Let's get started"}
                {step === 2 && "What are you building?"}
                {step === 3 && "Tell us the details"}
              </h2>
              <p className="text-sm text-muted-foreground mt-1.5">
                {step === 1 && "A few quick details so we know who's reaching out."}
                {step === 2 && "Select all that apply. We work across the full stack."}
                {step === 3 && "The more we know, the sharper our first response."}
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
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wide">Company</label>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} className={inputCls("company")} placeholder="Your company" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wide">Email *</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls("email")} placeholder="you@company.com" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
              </>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map(({ value, label, desc, Icon }) => {
                  const active = types.includes(value);
                  return (
                    <button
                      type="button"
                      key={value}
                      onClick={() => toggleType(value)}
                      className={`group relative text-left rounded-xl border p-4 transition-all ${
                        active
                          ? "border-primary/60 bg-primary/[0.06]"
                          : "border-border/60 bg-background/40 hover:border-border hover:bg-background/70"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`shrink-0 rounded-lg p-2 ${active ? "bg-primary/15 text-primary" : "bg-muted/50 text-foreground/70"}`}>
                          <Icon className="w-4 h-4" strokeWidth={1.75} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-foreground">{label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{desc}</div>
                        </div>
                        {active && <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2.5} />}
                      </div>
                    </button>
                  );
                })}
                {errors.types && <p className="text-xs text-destructive col-span-full">{errors.types}</p>}
              </div>
            )}

            {step === 3 && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wide">Brief description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className={`${inputCls("description")} resize-none`}
                    placeholder="What outcome are you trying to drive?"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wide">Timeline *</label>
                  <div className="grid grid-cols-3 gap-2">
                    {TIMELINES.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setTimeline(t.value)}
                        className={`rounded-lg border px-3 py-2.5 text-xs font-medium transition-all ${
                          timeline === t.value
                            ? "border-primary/60 bg-primary/[0.08] text-foreground"
                            : "border-border/60 text-foreground/70 hover:border-border hover:text-foreground"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  {errors.timeline && <p className="text-xs text-destructive mt-1">{errors.timeline}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wide">
                    Budget range <span className="text-muted-foreground normal-case font-normal">(optional)</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => setBudget(budget === b.value ? "" : b.value)}
                        className={`rounded-lg border px-3 py-2.5 text-xs font-medium transition-all ${
                          budget === b.value
                            ? "border-primary/60 bg-primary/[0.08] text-foreground"
                            : "border-border/60 text-foreground/70 hover:border-border hover:text-foreground"
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <div className="text-center py-6 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                  style={{ background: "linear-gradient(135deg, hsl(var(--aurora-green) / 0.15), hsl(var(--aurora-teal) / 0.15))" }}>
                  <Sparkles className="w-7 h-7 text-primary" strokeWidth={1.75} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Your project request has been submitted
                </h2>
                <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  A member of our team will review your request and follow up with next steps within 24 hours.
                </p>
                <button type="button" onClick={finish} className="btn-lime mt-7 group justify-center">
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}

            {step < 4 && (
              <div className="flex items-center justify-between pt-2 gap-3">
                {step > 1 ? (
                  <button type="button" onClick={back} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1.5" strokeWidth={1.75} /> Back
                  </button>
                ) : <span />}

                {step < 3 ? (
                  <button type="button" onClick={next} className="btn-lime group ml-auto">
                    Continue <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </button>
                ) : (
                  <button type="submit" disabled={submitting} className="btn-lime group ml-auto disabled:opacity-60">
                    {submitting ? "Submitting..." : "Submit request"}
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
