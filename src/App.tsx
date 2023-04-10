import React from 'react';
import Card from './components/Card';
import dataCard from './components/Card/CardData.json';

const App = () => {
  return (
    <Card
      title={dataCard.title}
      price={dataCard.price}
      description={dataCard.description}
      subDescription={dataCard.subDescription}
      size={dataCard.size}
      items={dataCard.items}
      benefits={dataCard.benefits}
    />
  );
};

export default App;
