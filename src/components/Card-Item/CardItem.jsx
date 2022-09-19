import React from 'react'

const CardItem = (props) => {
    return (
        <>
            <div className="card-item" style={props.style} onClick={props.onClick}>
                <h3>{props.title}</h3>
            </div>
        </>
    )
}

export default CardItem
