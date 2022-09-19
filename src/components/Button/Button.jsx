import React from 'react'

const Button = (props) => {
    return (
        <div className="my-btn" onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default Button
