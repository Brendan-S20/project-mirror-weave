import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import StartProjectModal from "@/components/StartProjectModal";
import StrategyCallModal from "@/components/StrategyCallModal";

interface CTAContextType {
  openModal: () => void;        // backwards-compat: opens Start a Project
  openProjectModal: () => void;
  openStrategyModal: () => void;
}

const CTAContext = createContext<CTAContextType>({
  openModal: () => {},
  openProjectModal: () => {},
  openStrategyModal: () => {},
});

export const useCTAModal = () => useContext(CTAContext);

export function CTAProvider({ children }: { children: ReactNode }) {
  const [projectOpen, setProjectOpen] = useState(false);
  const [strategyOpen, setStrategyOpen] = useState(false);

  const openProjectModal = useCallback(() => {
    setStrategyOpen(false);
    setProjectOpen(true);
  }, []);
  const openStrategyModal = useCallback(() => {
    setProjectOpen(false);
    setStrategyOpen(true);
  }, []);

  return (
    <CTAContext.Provider value={{ openModal: openProjectModal, openProjectModal, openStrategyModal }}>
      {children}
      <StartProjectModal open={projectOpen} onClose={() => setProjectOpen(false)} />
      <StrategyCallModal open={strategyOpen} onClose={() => setStrategyOpen(false)} />
    </CTAContext.Provider>
  );
}
