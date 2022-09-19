import React from 'react'

const Banner = (props) => {
    return (
        <div className="banner" style={props.style}>
            {props.children}
        </div>
    )
}

export default Banner
