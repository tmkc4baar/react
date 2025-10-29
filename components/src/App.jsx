import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "40px" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;