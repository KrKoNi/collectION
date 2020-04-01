import React, { useState, useCallback, useContext, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { ItemsList } from '../components/ItemsList'

export const CollectionPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [items, setItems] = useState(null)
    const collectionId = useParams().id
    
    const getItems = useCallback(async () => {
        try {
            const fetched = await request(`/api/item/${collectionId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setItems(fetched)
        } catch (e) {}
    }, [token, collectionId, request])

    useEffect(() => {
        getItems()
    }, [getItems])

    if(loading) {
        return <Loader/>
    }

    return (
        <div>
            {!loading && items && <ItemsList items={items}/>}
            <div>
                <Link to={`/create_item/${collectionId}`}>ADD ITEM</Link>
            </div>
        </div>
    )
}