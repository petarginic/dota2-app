import React from 'react'

const Hero = (props) => {
    return (
        <div className="hero-container">
            {props.video ? <video src={props.video} autoPlay loop muted /> : null}
            {props.image ? <img src={props.image} alt={props.title} /> : null}

            <div className="hero-content">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
            <div className="hero-btns">{props.children}</div>
        </div>
    )
}

export default Hero
