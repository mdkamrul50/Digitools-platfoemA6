import React from 'react';
import { useState } from 'react';

const Item = ({ item, setBuyProduct }) => {
  const [isAddToCart, setIsAddToCart] = useState(false);

  const handelClick = () => {
    setBuyProduct((prev) => {
      const exists = prev.find((items) => items.id === item.id);

      if (exists) {
        return prev;
      }

      
      return [...prev, item];
    });
    setIsAddToCart(true);
  };
  return (
    <div className=" space-y-4 p-6 rounded-2xl shadow-md bg-gray-50">
      <div className="flex justify-end  pt-3 ">
        {' '}
        <p
          className={`fl pr-4 badge badge-soft  font-semibold uppercase ${item.tag === 'best seller' ? 'badge-warning ' : 'badge-primary'} ${item.tag === 'new' && 'badge-success'}`}
        >
          {item.tag}
        </p>
      </div>
      <div className="">
        <img
          className="shadow-md  p-2 rounded-full h-14"
          src={item.icon}
          alt=""
        />
      </div>
      <h3 className="text-3xl font-bold text-gray-700">{item.name}</h3>
      <p className="text-xl text-gray-600">{item.description}</p>
      <p>
        <span className="text-3xl font-bold text-gray-700">${item.price}</span>
        /Mo
      </p>

      <ul className="text-xl text-gray-500 space-y-3">
        <li>
          <i className="fa-solid fa-check text-green-500"></i>{' '}
          {item.features[0]}
        </li>
        <li>
          <i className="fa-solid fa-check text-green-500"></i>{' '}
          {item.features[1]}
        </li>
        <li>
          <i className="fa-solid fa-check text-green-500"></i>{' '}
          {item.features[2]}
        </li>
      </ul>
      <button
        onClick={handelClick}
        className={`btn rounded-full w-full text-white font-bold ${
          isAddToCart
            ? 'bg-green-500'
            : 'bg-linear-to-r from-[#402cd4] to-violet-600'
        }`}
      >
        {isAddToCart ? 'Added ✔' : 'Buy Now'}
      </button>
    </div>
  );
};

export default Item;
