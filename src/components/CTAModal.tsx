import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";

interface CTAModalProps {
  open: boolean;
  onClose: () => void;
}

const COMPANY_SIZES = [
  { value: "solo", label: "Solo / Freelancer", route: "/thank-you-solo" },
  { value: "small", label: "Small Business (1–10 employees)", route: "/thank-you-small-business" },
  { value: "growing", label: "Growing Team (11–50 employees)", route: "/thank-you-growing-team" },
  { value: "midmarket", label: "Mid-Market (51–200 employees)", route: "/thank-you-mid-market" },
  { value: "enterprise", label: "Enterprise (200+ employees)", route: "/thank-you-enterprise" },
] as const;

export default function CTAModal({ open, onClose }: CTAModalProps) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!open) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!companySize) newErrors.companySize = "Please select a company size";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const selected = COMPANY_SIZES.find((s) => s.value === companySize);

    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setCompany("");
      setCompanySize("");
      setMessage("");
      setErrors({});
      onClose();
      navigate(selected?.route || "/thank-you");
    }, 800);
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg border ${errors[field] ? "border-red-500/60" : "border-border"} bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border/40 bg-[hsl(var(--surface-elevated))] p-8 lg:p-10 shadow-2xl animate-fade-in-scale">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/30"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Let's talk about your project</h2>
          <p className="text-muted-foreground">Fill in the details and our team will reach out within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="cta-name" className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
            <input id="cta-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClass("name")} placeholder="Your name" />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="cta-email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
            <input id="cta-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass("email")} placeholder="you@company.com" />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="cta-company" className="block text-sm font-medium text-foreground mb-1.5">Company</label>
            <input id="cta-company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass("company")} placeholder="Your company" />
          </div>
          <div>
            <label htmlFor="cta-size" className="block text-sm font-medium text-foreground mb-1.5">Company Size *</label>
            <div className="relative">
              <select
                id="cta-size"
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
                className={`${inputClass("companySize")} appearance-none pr-10 cursor-pointer`}
              >
                <option value="">Select company size</option>
                {COMPANY_SIZES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            {errors.companySize && <p className="text-xs text-red-400 mt-1">{errors.companySize}</p>}
          </div>
          <div>
            <label htmlFor="cta-message" className="block text-sm font-medium text-foreground mb-1.5">Project details</label>
            <textarea id="cta-message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClass("message")} resize-none`} placeholder="Tell us about your creative needs..." />
          </div>
          <button type="submit" disabled={submitting} className="btn-lime w-full text-center justify-center disabled:opacity-60">
            {submitting ? "Sending..." : "Get in touch"}
          </button>
        </form>
      </div>
    </div>
  );
}
