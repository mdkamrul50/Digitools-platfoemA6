import React from 'react';

export const CartSection = ({ buyProduct, setBuyProduct }) => {

  const handelDelete = (product) => {
    const filterData = buyProduct.filter((p) => p.id !== product.id);
    setBuyProduct(filterData);
  };

  const handelPayment = ()=>{
    setBuyProduct([])
  }
  const totalPrice = buyProduct.reduce(
    (sum, product) => sum + product.price,
    0
  );
  console.log(buyProduct);
  return (
    <div className="container mx-auto  shadow-md p-11 rounded-2xl">
      <h2 className="text-3xl font-bold text-gray-700 pb-6">Your Cart</h2>
      {buyProduct.length === 0 ? (
        <div className="text-center">
          <i className="fa-solid fa-cart-shopping text-4xl text-gray-600"></i>
          <p className="text-2xl font-semibold text-gray-400 pt-4">
            Your Cart Is Empty
          </p>
        </div>
      ) : (
        <>
          {buyProduct.map((product) => {
            return (
              <div
                key={product.id}
                className="flex justify-between mb-5 bg-gray-100 items-center p-5 rounded-2xl"
              >
                <div className=" flex gap-6">
                  <img
                    className="shadow-md  p-2 rounded-full h-16"
                    src={product.icon}
                    alt=""
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-xl font-semibold text-gray-500 pt-2">
                      ${product.price}
                    </p>
                  </div>
                </div>
                <p
                  onClick={() => handelDelete(product)}
                  className="btn border-none rounded-2xl font-bold text-red-400 cursor-pointer"
                >
                  Remove
                </p>
              </div>
            );
          })}

          <div className="flex justify-between my-6 px-3">
            <p className="text-xl text-gray-700">Total:</p>
            <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <button
            onClick={handelPayment}
            className="btn bg-linear-to-r from-[#402cd4] to-violet-600 text-gray-100 font-bold w-full rounded-full py-6 text-xl"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};
