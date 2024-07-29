import "./Product.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component to display products
function Products({ Images, cart, setCart }) {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (id, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [id]: size,
    }));
  };

  const handlecart = (id, price, dis, img, count) => {
    const size = selectedSizes[id] || "";
    const obj = {
      id,
      price,
      dis,
      img,
      count: 1,
      size,
    };
    setCart([...cart, obj]);
    console.log(cart);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <div className="container-fluid d-flex row row-cols-1 mt-4 ms-0 row-cols-sm-2 row-cols-md-4">
      {Images.map((item, index) => (
        <div key={index}>
          <img className="img-fluid" src={item.img} alt={item.dis} />
          <p>{item.dis}</p>
          <div className="d-flex justify-content-between mt-3">
            <div className="disflex">
              <button
                onClick={() => handleSizeChange(item.id, "S")}
                className={`hovcolor btn border border-1 ${
                  selectedSizes[item.id] === "S" ? "active" : ""
                }`}
              >
                {item.sizeS}
              </button>
              <button
                onClick={() => handleSizeChange(item.id, "M")}
                className={`hovcolor btn border border-1 ${
                  selectedSizes[item.id] === "M" ? "active" : ""
                }`}
              >
                {item.sizeM}
              </button>
              <button
                onClick={() => handleSizeChange(item.id, "L")}
                className={`hovcolor btn border border-1 ${
                  selectedSizes[item.id] === "L" ? "active" : ""
                }`}
              >
                {item.sizeL}
              </button>
            </div>
            <div className="price">${item.price}</div>
          </div>

          {isInCart(item.id) ? (
            <Link to="/Cart" className="border border-0 btn btn-success mt-2">
              Go to Cart
            </Link>
          ) : (
            <button
              onClick={() =>
                handlecart(
                  item.id,
                  item.price,
                  item.dis,
                  item.img,
                  item.count
                )
              }
              className="border border-0 btn btn-success mt-2"
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;
