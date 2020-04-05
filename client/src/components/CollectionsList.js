import React from 'react'
import { CollectionCard } from './CollectionCard'


export const CollectionsList = ({ collections }) => {
  if (!collections.length) {
    return <p className="center">There is no collection</p>
  }
  return (
      <div className="row">     
        <div className="col s12 m6 l4">
          { collections.map((collection) => {
            return (
              <CollectionCard collection={collection}/>
            )
          }) 
          }
        </div>
      </div>
  )
}