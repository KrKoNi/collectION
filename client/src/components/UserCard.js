import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useHistory } from 'react-router-dom'

export const UserCard = ({user}) => {
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const history = useHistory()

    const deleteHandler = async () => {
        try {
            await request('/api/user/'+user._id, 'DELETE', null, {
                Authorization: `Bearer ${auth.token}`
            })
            history.push('/users')
        } catch (e) {
            
        }
    }

    return ( 
          <tr>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.isAdmin.toString()}</td>
            <td>{!user.isAdmin ? <button className="waves-effect waves-light btn">Make Admin</button> : null}{' '}<button className="waves-effect waves-light btn" onClick={deleteHandler}>Delete User</button></td>
          </tr>
    
    )
}