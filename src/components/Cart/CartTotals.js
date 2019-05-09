import React from 'react'

export default function CartTotals({value}) {
  const {cartSubtotal, cartTax, cartTotal, clearCart} = value
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>Clear Cart</button>
            <h5>
              <span className="tex-title">Subtotal: </span>
              <strong>$ {cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="tex-title">Tax: </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="tex-title">Total: </span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
