import React from 'react'
import { CollectionCard } from './CollectionCard'


export const CollectionsList = ({ collections }) => {
  if (!collections.length) {
    return <p className="center">There is no collection</p>
  }
  return (
      <ul className="collection">
        {collections.map((collection) => {return (
        <CollectionCard collection={collection}/>
        )})}
      </ul>
  )
}