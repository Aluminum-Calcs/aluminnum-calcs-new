import {useState, useContext, useEffect} from 'react'
import { PageContext } from '../context/PageContext.jsx';

import "../scss/pages/Cart.scss";

import InputField from '../components/InputField.jsx';
import SingleCart from '../components/SingleCart.jsx';

function Cart() {
  const { setCurrentPage } = useContext(PageContext);
  const { carts } = useContext(PageContext);

  useEffect(() => {
    setCurrentPage('Cart')
  }, []);

  return (
    <main className="cart">
      <section className='form'>
        <form className="container">
          <InputField
            inputType="text"
            id="item-name"
            val="Roller"
            key="1"
          />
          <InputField
            id="Quantity"
            val="1"
            key="2"
          />
          <InputField
            id="Price"
            val="1000"
            key="3"
            msgType="static"
            msg="You can set a custom price for this item"
          />

          <div className="btns">
            <button id="submit">Add</button>
            <button id="submit-new">
              <i className="fa fa-shopping-cart"></i>
              Add to <b>New</b> Cart
            </button>
        </div>
        </form>
      </section>

      <section className="results carts">
        <div className="container">
          { carts.length > 0
            ? carts.map(cart => <SingleCart cartData={cart} />)
            : <div className="carts__empty">
            <i className="fa fa-shopping-cart"></i>
              <p>
                Your cart is empty<br />
                Create and populate carts.
              </p>
            </div>
          }
          

        </div>
      </section>
    </main>
  )
}

export default Cart