import { useState, useEffect, useContext } from "react";
import { PageContext } from "../context/PageContext.jsx";
import "../scss/components/Header.scss";
import { NavLink } from "react-router";
import { Helmet } from "react-helmet-async";

export default function Header() {
  const { currentPage } = useContext(PageContext);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(currentPage);
  }, [currentPage]);

  return (
    <>
      <Helmet>
        <title>
          {`Aluminum Calcs | ${title && title}`}
        </title>
      </Helmet>
      <header>
        <div className="wrapper">
          <div className="logo">
            <svg className="logo__svg" viewBox="0 0 10 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="9" height="17" />
              <path d="M0.5 15.5V26H3V24M9.5 15.5V26H7V24" />
            </svg>
            <div className="logo__text">
              <h2>Aluminum Calc</h2>
              <span>{currentPage}</span>
            </div>
          </div>
          <input type="checkbox" id="ch"/>
          <label htmlFor="ch" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <label htmlFor="ch" className="overlay"></label>
          <nav>
            <label htmlFor="ch" className="close">
              <span></span>
              <span></span>
              <span></span>
            </label>
      
            <ul>
              <li>
                <NavLink to="/glass-price-calculator">Glass Price Calc</NavLink>
              </li>
              <li>
                <NavLink to="/stile-calculator">Stile Calc</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}