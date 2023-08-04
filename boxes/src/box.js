import React from 'react'

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#FFEB00" : "transparent"
    }
    return (
        <div
            style={styles}
            className="box"
            key={props.id}
            onClick={props.handleClick}
        >
        </div>
        )
}