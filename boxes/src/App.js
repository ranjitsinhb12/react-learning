import React from 'react'
import boxes from './boxes'

function App() {
    const [squares, setSqure] = React.useState(boxes)
    const squareElement = squares.map(square => (
        <div className="box" key={squares.id}></div>
    ))
  return (
      <div className="App">
          {squareElement}
    </div>
  );
}

export default App;
