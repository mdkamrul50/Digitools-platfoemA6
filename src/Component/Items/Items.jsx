import React, { use } from 'react';
import Item from '../Item/Item';

const Items = ({ productsPromises, buyProduct, setBuyProduct }) => {
  const items = use(productsPromises);
  
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8  container mx-auto mt-10 px-4 md:px-0">
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          buyProduct={buyProduct}
          setBuyProduct={setBuyProduct}
        ></Item>
      ))}
    </div>
  );
};

export default Items;
