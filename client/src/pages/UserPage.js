import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'

import { CollectionsList } from '../components/CollectionsList'
import { UserCard } from '../components/UserCard'
import { UsersList } from '../components/UsersList'

export const UserPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [collections, setCollections] = useState([])
    const getCollections = useCallback(async () => {
        try {
            const fetched = await request(`/api/collection`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setCollections(fetched)
        } catch (e) {}
    }, [token, request])
    const [user, setUser] = useState()
    const getUser = useCallback(async () => {
        try {
            const fetched = await request('/api/user/profile', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUser(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        getCollections()
        getUser()
    }, [getCollections, getUser])

    if(loading) {
        return <Loader/>
    }

    return (
        
        <div className="wrapper">
            <div className="box-1">
                {!loading && user && <UserCard user={user}/>}
            </div>
            <div className="box-2">
            {!loading && <CollectionsList collections={collections}/>}
            </div>
        </div>
    )
}