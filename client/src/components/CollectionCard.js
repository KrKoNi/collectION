import React from 'react'

export const CollectionCard = ({collection}) => { 
    return (
        <div>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{collection.name}</span>
                    <p>{collection.type}</p>
                </div>
            </div>           
        </div>
          
    )
}