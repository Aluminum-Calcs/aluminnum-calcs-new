import { useState, createContext } from "react";

export const PageContext = createContext();

export default function PageContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("Home");
  const [carts, updatecarts] = useState([]);
  const [calcMode, setCalcMode] = useState('hide');

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        carts,
        calcMode,
        setCalcMode
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
