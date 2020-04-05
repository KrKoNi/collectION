import React from 'react'
import { UserCard } from './UserCard'


export const UsersList = ({ users }) => {
  if (!users.length) {
    return <p className="center">There is no users</p>
  }

  return (
      <div className="row">
      { users.map((user) => {
        return (
          <UserCard user={user}/>
        )
      }) }
    </div>
  )
}