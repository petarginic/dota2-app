import React from 'react'

const SectionItems = (props) => {
    return (
        <div className="section-items">
            <div className="section-items-image">
                <h1>{props.title}</h1>
                <div className="section-item-card-heroes">{props.children}</div>
            </div>
        </div>
    )
}

export default SectionItems
