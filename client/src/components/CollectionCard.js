import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useHistory } from 'react-router-dom'

export const CollectionCard = ({collection}) => { 
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const history = useHistory()
    const deleteHandler = async () => {
        try {
            await request('/api/collection/'+collection._id, 'DELETE', {...collection}, {
                Authorization: `Bearer ${auth.token}`
            })
            history.push('/')
        } catch (e) {
            
        }
    }
    return (
        <div>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{collection.name}</span>
                    <p>{collection.type}</p>
                </div>
                <div className="card-actions">
                    <a href={'/collection/'+collection._id}>Open collection</a>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
            </div>           
        </div>
          
    )
}