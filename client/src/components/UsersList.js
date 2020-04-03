import React from 'react'
import { ItemCard } from './ItemCard'


export const UsersList = ({ users }) => {
  if (!users.length) {
    return <p className="center">There is no users</p>
  }

  return (
      <div className="row">
      { users.map((user) => {
        return (
          <ItemCard user={user}/>
        )
      }) }
    </div>
  )
}