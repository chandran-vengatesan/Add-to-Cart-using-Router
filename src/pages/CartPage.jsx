import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.10; // 10% Discount logic
  const total = subtotal - discount;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      {/* Continue Shopping Link - Always Visible */}
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block font-medium">
        &larr; Continue Shopping
      </Link>
      
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="text-center bg-white p-10 rounded-xl shadow-sm border">
          <p className="text-gray-500 text-xl mb-4">Your cart is empty!</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                <div className="grow">
                  <h4 className="font-bold text-gray-800 line-clamp-1">{item.title}</h4>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                  
                  {/* +/- Quantity Buttons */}
                  <div className="flex items-center gap-2 mt-2 bg-gray-100 w-fit rounded-lg px-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-2 font-bold hover:text-blue-600">-</button>
                    <span className="font-semibold w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-2 font-bold hover:text-blue-600">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-medium hover:text-red-700">Remove</button>
              </div>
            ))}
          </div>

          {/* Summary Section with 10% Discount */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit border sticky top-24">
            <h3 className="text-xl font-bold border-b pb-3 text-gray-700">Order Summary</h3>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span> 
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600 font-medium">
                <span>Discount (10%):</span> 
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-3 mt-3 text-gray-800">
                <span>Total:</span> 
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white mt-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;