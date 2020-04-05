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
            await request('/api/collection/'+collection._id, 'DELETE', null, {
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
                    <a href={'/collection/'+collection._id} className="waves-effect waves-light btn">Open Collection</a>{' '}
                    <a className="waves-effect waves-light btn" onClick={deleteHandler}>Delete</a>
                </div>
            </div>           
        </div>
          
    )
}