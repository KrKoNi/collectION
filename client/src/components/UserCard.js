import React from 'react'


export const UserCard = ({user}) => {
    return ( 
        <div className="row">
            <div className="col s12 m6 l3">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{user.username}</span>
                    <p>email: {user.email}</p>
                    <p>admin status: {user.isAdmin.toString()}</p>
                    <p>created at: {user.createdAt.slice(0,10)}</p>
                </div>
            </div>
            </div>
        </div>
    
    )
}