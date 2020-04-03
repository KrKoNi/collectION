import React from 'react'

export const UserCard = ({user}) => {
    return ( 
        <div className="col s6 m4 l3">
        <div className="card">
            <div className="card-content">
                <p>{user.email}</p>
            </div>
            <div className="card-actions">
                <button>Make Ddmin</button>
                <button>Delete User</button>
            </div>
        </div>     
        </div>
    )
}