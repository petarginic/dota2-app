import React from 'react'

const Section = (props) => {
    return (
        <div className="section">
            <div className="section-image">
                <div className="section-content-text">
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                </div>

                <div className="section-card-heroes">{props.children}</div>
            </div>
        </div>
    )
}

export default Section
