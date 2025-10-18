import React from "react";
import useFetch from "../hooks/useFetch";
import "./ProductList.css";

function ProductList() {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <h2 className="loading">Loading products...</h2>;
  if (error) return <h2 className="error">Error: {error}</h2>;

  return (
    <div className="product-container">
      {data &&
        data.slice(0, 12).map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price}</p>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
