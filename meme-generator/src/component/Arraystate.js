import React from 'react'
import data from '../memesData.js'

export default function Arraystate() {  
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        setThingsArray(prevState => [...prevState, `Things ${prevState.length + 1}`])
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <main className="array">
            <div className="array__container">                
                <button onClick={addItem}>
                    Add item
                </button>
                <p>{thingsElements}</p>
            </div>            
        </main>
    )
}