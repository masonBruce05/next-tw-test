import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id}
             className="bg-white border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-green-500 font-semibold">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ItemList;
