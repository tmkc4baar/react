import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #646cff",
        borderRadius: "12px",
        padding: "15px",
        textAlign: "center",
        backgroundColor: "#1a1a1a",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="100"
        height="100"
        style={{ borderRadius: "8px" }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;