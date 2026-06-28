import { createContext, useState } from "react";

export const StileContext = createContext();

export default function StileContextProvider({ children }) {
  const [windowType, setWindowType] = useState("casement-window");

  const [sashType, setSashType] = useState("two");


  return <StileContext.Provider
    value={{
      windowType,
      setWindowType,
      sashType,
      setSashType
    }}
  >
    { children }
  </StileContext.Provider>
} 