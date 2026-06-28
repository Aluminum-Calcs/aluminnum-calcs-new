import { useState, useContext, useEffect } from "react";
import { PageContext } from "../context/PageContext";

import "../scss/components/Form.scss";
import "../scss/pages/GlassPrice.scss";

import InputField from "../components/InputField.jsx";

export default function GlassPrice() {
  const {setCurrentPage} = useContext(PageContext)

  useEffect(() => {
    setCurrentPage("Glass Price Calc")
  }, []);

  return (
    <>
      <main className="glass-price-page">
        <section className="form">
          <div className="container">
            <InputField
              id="width"
              val="400"
            />
            <InputField
              id="height"
              val="900"
            />
            <InputField
              id="quantity"
              val="1"
            />
            <InputField
              id="fullsheet-price"
              val="90000"
              msgType="static"
              msg="Default price is ₦90,000"
            />

            <div className="btns">
              <button className="calculate">Calculate</button>
              <button className="addToTable">
                <i className="fa fa-table"></i>
                Add to <b>Table</b>
              </button>
              <button className="addToCart">
                <i className="fa fa-cart-plus"></i>
                Add to <b>Cart</b>
              </button>
            </div>
          </div>
        </section>

        <GlassPriceResults/>
      </main>
    </>
  )
}

export function GlassPriceResults() {
  return <section className="results">
    <div className="container">

      <div className="results__empty">
        <i className="fa fa-table"></i>
        <p>No previous entries</p>
      </div>
    </div>
  </section>;
}