import React from 'react'
import WindowTracker from './WindowTracker'
import './App.css';

function App() {
    const [show, setShow] = React.useState(true)

    function handleClick() {
        setShow(prevValue => !prevValue)
    }

  return (
      <div className="container">
          <button
              className="windowTrackerButton"
              onClick={handleClick}
          >
            Toggle WindowTracker
          </button>
          {show && <WindowTracker />}
    </div>
  );
}

export default App;
