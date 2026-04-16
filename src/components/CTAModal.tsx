import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

interface CTAModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CTAModal({ open, onClose }: CTAModalProps) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onClose();
      navigate("/thank-you");
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-2xl border border-border/40 bg-[hsl(var(--surface-elevated))] p-8 lg:p-10 shadow-2xl animate-fade-in-scale">
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
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">Company</label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="Your company"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Project details</label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              placeholder="Tell us about your creative needs..."
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="btn-lime w-full text-center justify-center disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Get in touch"}
          </button>
        </form>
      </div>
    </div>
  );
}
