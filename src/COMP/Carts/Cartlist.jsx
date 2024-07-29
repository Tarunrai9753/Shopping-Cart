import React, { useState } from "react";
import "./cart.css";

function CartList({ cart, setCart }) {
  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    const ProductIndex = updatedCart.findIndex(
      (product) =>
        product.id === updatedCart[index].id ||
        product.size === updatedCart[index].size
    );

    if (ProductIndex >= 0) {
      updatedCart[ProductIndex].count += 1;
      setCart(updatedCart);
    }
     else if(ProductIndex){
      updatedCart.filter((value, index) => updatedCart.indexOf(value) === index);
      setCart(updatedCart)
    }
  };

  // Function to handle decrementing the count of a product
  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 0) {
      updatedCart[index].count -= 1;
      if (updatedCart[index].count === 0) {
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    }
  };

  // Shipping price constant
  const shippingPrice = 20;

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  // JSX
  return (
    <>
      {cart.length === 0 ? (
        <h1 className="d-flex place">Cart is Empty</h1>
      ) : (
        <div className="main d-md-flex justify-content-evenly mt-3 ms-3 gap-2">
          <div className="products">
            {/* Mapping over each product in the cart */}
            {cart.map((product, index) => (
              <div key={product._id}>
                <div className="mt-2">
                  <div className="d-flex border border-1 gap-3">
                    <img className="imgg" src={product.img} alt="cap" />
                    <div className="mt-5">
                      <p>{product.dis}</p>
                      <h4>${product.price}</h4>
                      <p>Size: {product.size}</p>
                      <div className="">
                        {/* Button to decrement count */}
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => handleDecrement(index)}
                        >
                          -
                        </button>
                        {/* Display count */}
                        <span className="mx-3">{product.count}</span>
                        {/* Button to increment count */}
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => handleIncrement(index)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*subtotal  */}
          <div className="mt-2">
            <div className="card">
              <div className="card-header">
                <h2 className="text-xl font-bold">Summary</h2>
                <p className="text-sm text-body-secondary">
                  This information will be displayed on the checkout page.
                </p>
              </div>
              <div className="card-body">
                {/* Display subtotal */}
                <div className="d-flex justify-content-between align-items-center">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                {/* Display shipping */}
                <div className="d-flex justify-content-between align-items-center">
                  <span>Shipping</span>
                  <span>${shippingPrice}</span>
                </div>
                <hr className="border-gray-200 dark:border-gray-800" />
                {/* Display total */}
                <div className="d-flex justify-content-between align-items-center">
                  <span>Total</span>
                  <span>${subtotal + shippingPrice}</span>
                </div>
              </div>
              <form className="card-body">
                <div className="form-group">
                  <label
                    htmlFor="coupon"
                    className="text-sm font-medium leading-6"
                  >
                    Coupon code
                  </label>
                  <div className="row g-4">
                    <div className="col-md-12">
                      <div className="d-flex gap-3">
                        <input
                          type="text"
                          className="form-control"
                          id="coupon"
                          placeholder="Enter coupon code"
                        />
                        <button type="button" className="btn btn-dark">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* Button to proceed to checkout */}
              <button className="btn btn-dark w-100" size="lg">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartList;
