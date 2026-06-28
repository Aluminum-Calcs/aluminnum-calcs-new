import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../scss/pages/Home.scss";
import { Helmet } from "react-helmet-async";
import { PageContext } from "../context/PageContext.jsx";

export default function Home() {
  const { setCurrentPage } = useContext(PageContext)
  useEffect(() => {
    setCurrentPage('Home');
  }, []);

  return (
    <>
      <main className="home">
        <section className="hero">
          <div className="container">
            <h1>Make Life easier!!</h1>
            <p>Enjoy the variety of tools here to create windows, calculate dimensions and efficiently manage your business</p>
          </div>
        </section>

        <section className="tools">
          <div className="container">
            {/* <h2>Tools</h2> */}
            <div className="cards">
              <div className="card">
                <h3>Glass Price Calculator</h3>
                <p>Calculate the price of glass based on dimensions and type of glass</p>
                <NavLink to="/glass-price-calculator" className="btn">Check it out!</NavLink>
              </div>
              <div className="card">
                <h3>Channels</h3>
                <p>Learn more about local  aluminum channels and their uses.</p>
                <NavLink to="/channels" className="btn">learn More</NavLink>
              </div>
              <div className="card">
                <h3>Stile Calculator</h3>
                <p>Calculate the dimensions of stiles based on the type of stile and the dimensions of the window</p>
                <NavLink to="/stile-calculator" className="btn">Try it.</NavLink>
              </div>
              <div className="card">
                <h3>Cart</h3>
                <p>View, tabulate and calculate your customer cart and manage your customer orders</p>
                <NavLink to="/cart" className="btn">View Carts</NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}