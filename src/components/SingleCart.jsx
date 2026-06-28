import React from 'react'

function SingleCart() {
  return (
    <div className="cart">
      <div className="header">
        <h2 className="cart-name">Cart 1</h2>
        <div className="cart-tools">
         {/* <button><i className="fa fa-refresh"></i></button> */}
          <button><i className="fa fas fa-share-alt"></i></button>
          <button className="edit-cart" title="Rename cart"><i className="fa fa-pencil"></i></button>
          <button className="delete-cart"><i className="fa fa-trash"></i></button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>s/n</th>
            <th>Item name</th>
            <th>qty</th>
            <th colspan="2">price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Roller</td>
            <td>1000(×1)</td>
            <td>1000</td>
            <td>×</td>
          </tr>
          <tr>
            <td>2</td>
            <td>width-channel</td>
            <td>17800(×2)</td>
            <td>35600</td>
            <td>×</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">Total</td>
            <td colspan="2">36,600</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default SingleCart;