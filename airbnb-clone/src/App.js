import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import data from './data';
import Card from './components/Card';

function App() {
  const cards = data.map(item => {
    return(
    <Card
    key = {item.id}
    {...item}
    />
    )
  })
  return (
    <div className="App">
          <Navbar />
          <Hero />
          <section className='card--title'>
            {cards}
          </section>
    </div>
  );
}

export default App;
