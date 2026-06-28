import { useState, createContext } from "react";

export const PageContext = createContext();

export default function PageContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("Home");
  const [carts, updatecarts] = useState([]);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage, carts }}>
      {children}
    </PageContext.Provider>
  )
}
