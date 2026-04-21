import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Mail, Check, AlertTriangle, Loader2 } from "lucide-react";

type State = "loading" | "valid" | "already" | "invalid" | "submitting" | "done" | "error";

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    if (!token) { setState("invalid"); return; }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const apikey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
      headers: { apikey },
    })
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (data?.valid) setState("valid");
        else if (data?.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("invalid"));
  }, [token]);

  const confirm = async () => {
    setState("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
    if (error) { setState("error"); return; }
    if ((data as any)?.success) setState("done");
    else if ((data as any)?.reason === "already_unsubscribed") setState("already");
    else setState("error");
  };

  return (
    <Layout>
      <Helmet>
        <title>Unsubscribe — The North</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-24">
        <div className="relative max-w-md w-full rounded-2xl border border-border/40 bg-[hsl(var(--surface-elevated))] shadow-2xl p-8 lg:p-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 bg-muted/40">
            {state === "loading" || state === "submitting" ? (
              <Loader2 className="w-6 h-6 text-muted-foreground animate-spin" strokeWidth={1.75} />
            ) : state === "done" || state === "already" ? (
              <Check className="w-6 h-6 text-primary" strokeWidth={2} />
            ) : state === "invalid" || state === "error" ? (
              <AlertTriangle className="w-6 h-6 text-destructive" strokeWidth={1.75} />
            ) : (
              <Mail className="w-6 h-6 text-foreground/70" strokeWidth={1.75} />
            )}
          </div>

          {state === "loading" && <p className="text-muted-foreground">Checking your link…</p>}

          {state === "valid" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2">Unsubscribe from emails</h1>
              <p className="text-sm text-muted-foreground mb-6">You will no longer receive transactional updates from The North.</p>
              <button onClick={confirm} className="btn-lime w-full justify-center">Confirm unsubscribe</button>
            </>
          )}

          {state === "submitting" && <p className="text-muted-foreground">Processing…</p>}

          {state === "done" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2">You're unsubscribed</h1>
              <p className="text-sm text-muted-foreground mb-6">We've removed you from our email list.</p>
              <Link to="/" className="btn-outline-light">Back to home</Link>
            </>
          )}

          {state === "already" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2">Already unsubscribed</h1>
              <p className="text-sm text-muted-foreground mb-6">This email is no longer on our list.</p>
              <Link to="/" className="btn-outline-light">Back to home</Link>
            </>
          )}

          {state === "invalid" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2">Invalid link</h1>
              <p className="text-sm text-muted-foreground mb-6">This unsubscribe link is invalid or has expired.</p>
              <Link to="/" className="btn-outline-light">Back to home</Link>
            </>
          )}

          {state === "error" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2">Something went wrong</h1>
              <p className="text-sm text-muted-foreground mb-6">Please try again in a moment.</p>
              <button onClick={confirm} className="btn-lime w-full justify-center">Retry</button>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}