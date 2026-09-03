import { createContext, useContext, useState } from "react";

const ActiveDestinationContext = createContext(null);

export function ActiveDestinationProvider({ children }) {
  const [activeDestination, setActiveDestination] = useState(null);
  return (
    <ActiveDestinationContext.Provider value={{ activeDestination, setActiveDestination }}>
      {children}
    </ActiveDestinationContext.Provider>
  );
}

export function useActiveDestination() {
  const ctx = useContext(ActiveDestinationContext);
  if (!ctx) throw new Error("useActiveDestination must be used within ActiveDestinationProvider");
  return ctx;
}
