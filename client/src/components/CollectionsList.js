import React from 'react'
import { CollectionCard } from './CollectionCard'


export const CollectionsList = ({ collections }) => {
  if (!collections.length) {
    return <p className="center">There is no collections</p>
  }
  return (
      <div className="row">     
      { collections.map((collection) => {
        return (
          <CollectionCard collection={collection}/>
        )
      }) 
      }
      </div>
  )
}