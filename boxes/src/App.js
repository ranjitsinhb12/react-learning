import React from 'react'
import boxes from './boxes'
import Box from './box'

function App(props) {
/*    div color change on click funciton and state handles*/ 
    const [squares, setSquare] = React.useState(boxes)
    function toggle(id) {
        setSquare(prevSquare => {
            return prevSquare.map(square => {
                return square.id === id ? { ...square, on: !square.on } : square
            })
            
        })
    }    
    const squareElement = squares.map(square => (
        <Box
            key={square.id}
            on={square.on}
            handleClick={() => toggle(square.id)}
        />
    ))

    /* Message notifaction state*/
    const [messages, setMessages] = React.useState(["a", "b", "c"])

  return (
      <div className="App">
            {/* Display clickable boxes here*/}
          {squareElement}
          <hr />
            {/* display message notification here*/}
          <h2> Message Notification </h2>
          <div>
              {
                  messages.length === 0 ?
                  <h3> You're all caught up! </h3> :
                  <h3> You have {messages.length} unread
                      {messages.length > 1 ? " messages" : " messages"}</h3>
              }
          </div>
    </div>
  );
}

export default App;
