import React from 'react'
import { UserRow } from './UserRow'


export const UsersList = ({ users }) => {
  if (!users.length) {
    return <p className="center">There is no users</p>
  }

  return (
      <div className="row">
        <table className="striped highlight responsive-table">
          <thead>
            <tr>
                <th>E-mail</th>
                <th>Username</th>
                <th>Admin Status</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            { users.map((user) => {return (<UserRow user={user}/>)})}
          </tbody>
        </table>
      </div>
  )
}