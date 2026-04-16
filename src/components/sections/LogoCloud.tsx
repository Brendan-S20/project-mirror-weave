import { useInView } from "@/hooks/useInView";

interface LogoCloudProps {
  title?: string;
}

export default function LogoCloud({ title = "Trusted by growing teams and ambitious brands" }: LogoCloudProps) {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 lg:py-20 overflow-hidden relative" ref={ref}>
      <div className="absolute inset-0 bg-[hsl(var(--surface-subtle))]" />
      <div className="relative z-10">
        <div className={`text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">{title}</p>
        </div>
      </div>
    </section>
  );
}
