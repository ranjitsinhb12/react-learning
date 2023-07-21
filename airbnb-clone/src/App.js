import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import data from './data'
import Card from './components/Card';

console.log(data)

function App() {

    const cards = data.map(item => {
        return (
        <Card
            img = {item.coverImg}
            star = "star.png"
                rating={item.stats.rating }
            reviewCount = { item.stats.reviewCount }
            country = { item.location }
            title = {item.title}
            price={item.price}
            />
            )
    })
  return (
    <div className="App">
          <Navbar />
          <Hero />
          {cards}
    </div>
  );
}

export default App;
