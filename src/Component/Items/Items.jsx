import React, { use } from 'react';
import Item from '../Item/Item';

const Items = ({ productsPromises, buyProduct, setBuyProduct }) => {
  const items = use(productsPromises);
  
  return (
    <div className="grid grid-cols-3 gap-8  container mx-auto mt-10">
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
