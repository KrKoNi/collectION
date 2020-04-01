import React from 'react'
import { ItemCard } from './ItemCard'


export const ItemsList = ({ items }) => {
  if (!items.length) {
    return <p className="center">There is no items</p>
  }

  return (
      <div className="row">
      { items.map((item) => {
        return (
          <ItemCard item={item}/>
        )
      }) }
    </div>
  )
}