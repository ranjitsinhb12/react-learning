import React from 'react'

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    console.log('render')    

    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

  return (
      <div className="App">
          <h2> No {count} </h2>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
          <h2>{starWarsData.name} </h2>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
          
    </div>
  )
}