import React from 'react'

export const ItemCard = ({item}) => {
    return ( 
        <div className="col s6 m4 l3">
        <div className="card">
            <div className="card-image">
                <img src="https://materializecss.com/images/sample-1.jpg"/>
                <span className="card-title">{item.name}</span>
            </div>
            <div className="card-content">
                <p>{item.description}</p>
            </div>
        </div>     
        </div>
    )
}