import React from 'react'

const CardHero = (props) => {
    return (
        <div className="card-hero" style={props.style}>
            <div className="card-content">
                <h1>{props.title}</h1>
                <ul>
                    <li>Group: {props.type}</li>
                    <li className="border">
                        <div>Tank:</div>
                        <div className="border">
                            <div className="progress-bar" style={{ width: `${props.attack}` }}></div>
                        </div>
                    </li>
                    <li className="border">
                        <div>Support:</div>
                        <div className="border">
                            <div className="progress-bar" style={{ width: `${props.defense}` }}></div>
                        </div>
                    </li>
                    <li>
                        <div>Carry:</div>
                        <div className="border">
                            <div className="progress-bar" style={{ width: `${props.mobility}` }}></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardHero
