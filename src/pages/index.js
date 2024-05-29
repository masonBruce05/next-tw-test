import React from 'react';
import ItemList from '../components/ItemList';
import items from '../data/items.json';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Our Items</h1>
      <ItemList items={items} />
    </div>
  );
};

export default Home;
