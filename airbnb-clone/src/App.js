import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
          <Navbar />
          <Hero />
          <Card
              img="zaferes.png"
              star = "star.png"
              rating="5.0"
              reviewCount={6}
              country="INDIA"
              title="Life Lessons with katie Zaferes"
              price={136}
          />
          <Card
              img="zaferes.png"
              star="star.png"
              rating="5.0"
              reviewCount={6}
              country="INDIA"
              title="Life Lessons with katie Zaferes"
              price={136}
          />
    </div>
  );
}

export default App;
