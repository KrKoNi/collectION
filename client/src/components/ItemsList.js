import React from 'react'
import { ItemCard } from './ItemCard'


export const ItemsList = ({ items }) => {
  if (!items.length) {
    return <p className="center">There is no item</p>
  }

  return (
      <>
      {items.map((item) => {return (<ItemCard item={item}/>)})}
      </>
  )
}