import React, { useState } from "react";
import ProductCard from "./ProductCard";

function ShoppingCart() {
  // Products data (could come from props or API)
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 99999,
      image: "https://via.placeholder.com/100?text=iPhone+15",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 124999,
      image: "https://via.placeholder.com/100?text=MacBook+Air",
    },
    {
      id: 3,
      name: "Apple Watch",
      price: 45999,
      image: "https://via.placeholder.com/100?text=Apple+Watch",
    },
  ];

  // State to store cart items
  const [cart, setCart] = useState([]);

  // Add to cart event
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove from cart event
  const removeFromCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
      );
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <h1>🛍 E-Commerce Shopping Cart</h1>

      {/* Product Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "20px auto",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* Cart Section */}
      <div style={{ marginTop: "40px" }}>
        <h2>🧺 Your Cart ({cart.length} items)</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <table
            border="1"
            style={{
              margin: "auto",
              borderCollapse: "collapse",
              minWidth: "400px",
              background: "#1a1a1a",
            }}
          >
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.price * item.qty}</td>
                  <td>
                    <button onClick={() => addToCart(item)}>+</button>
                    <button
                      onClick={() => removeFromCart(item)}
                      style={{ marginLeft: "5px" }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {cart.length > 0 && (
          <h3 style={{ marginTop: "20px" }}>💰 Total: ₹{totalPrice}</h3>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;