import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      alert("Item already added to the cart");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen pb-10">
        <Navbar cartCount={cart.length} />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} />
            <Route path="/cart" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
