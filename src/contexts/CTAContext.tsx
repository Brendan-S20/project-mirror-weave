import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import CTAModal from "@/components/CTAModal";

interface CTAContextType {
  openModal: () => void;
}

const CTAContext = createContext<CTAContextType>({ openModal: () => {} });

export const useCTAModal = () => useContext(CTAContext);

export function CTAProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);

  return (
    <CTAContext.Provider value={{ openModal }}>
      {children}
      <CTAModal open={open} onClose={() => setOpen(false)} />
    </CTAContext.Provider>
  );
}
