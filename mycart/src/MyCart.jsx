import { useState } from "react";

function MyCart() {
  const products = [
    { id: 1, name: "iPhone 15", price: 99999 },
    { id: 2, name: "MacBook Air", price: 124999 },
    { id: 3, name: "AirPods Pro", price: 24999 },
    { id: 4, name: "Apple Watch", price: 45999 },
  ];

  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    } else {
      alert(`${product.name} is already in cart!`);
    }
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => setCart([]);

  // Calculate total
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ textAlign: "center", padding: "20px", color: "#fff" }}>
      <h1>🛒 MyCart App</h1>

      {/* Products Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
        margin: "20px auto",
        maxWidth: "800px"
      }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #646cff",
              borderRadius: "12px",
              padding: "15px",
              backgroundColor: "#1a1a1a"
            }}
          >
            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div style={{
        marginTop: "40px",
        borderTop: "2px solid #646cff",
        paddingTop: "20px",
      }}>
        <h2>🧺 Cart ({cart.length} items)</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} — ₹{item.price}{" "}
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <h3>Total: ₹{totalPrice}</h3>
            <button onClick={clearCart}>Clear Cart</button>
          </>
        )}
      </div>
    </div>
  );
}

export default MyCart;