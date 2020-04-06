import React, { useContext, useState, useCallback, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useHistory } from 'react-router-dom'


export const CollectionCard = ({collection}) => { 
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const history = useHistory()
    const [author, setAuthor] = useState()
    const deleteHandler = async () => {
        try {
            await request('/api/collection/'+collection._id, 'DELETE', null, {
                Authorization: `Bearer ${auth.token}`
            })
            history.push('/')
        } catch (e) {
            
        }
    }
    const getAuthor = useCallback(async () => {
        try {
            const fetched = await request('/api/user/'+collection.owner, 'GET', null, {
                Authorization: `Bearer ${auth.token}`
            })
            setAuthor(fetched)
        } catch (e) {}
    }, [auth.token, request, collection.owner])
    useEffect(() => {
        getAuthor()
    }, [getAuthor])


    return (
        <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle"/>
            <span className="title">{collection.name}</span>
            <p>{collection.type}<br/>
            author: {author && author.username}
            </p>
            <a href={'/collection/'+collection._id} className="waves-effect waves-light btn">Open Collection</a>{' '}
            <a className="waves-effect waves-light btn" onClick={deleteHandler}>Delete</a>
        </li>
    )
}