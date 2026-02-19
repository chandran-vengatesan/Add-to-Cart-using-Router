import React from "react";

const ProductCard = ({ product, addToCart, removeFromCart, cart }) => {
  const isInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
      <div className="h-48 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="grow">
        <h3 className="text-sm font-bold text-gray-800 line-clamp-2 min-h-10">
          {product.title}
        </h3>
        <p className="text-lg font-extrabold text-blue-600 mt-2">
          ${product.price}
        </p>
      </div>

      <div className="mt-4">
        {isInCart ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="w-full bg-red-500 text-white py-2.5 rounded-lg font-semibold hover:bg-red-600 active:scale-95 transition-all shadow-sm"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;