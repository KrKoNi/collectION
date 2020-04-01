import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'

import { CollectionsList } from '../components/CollectionsList'

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

    useEffect(() => {
        getCollections()
    }, [getCollections])

    if(loading) {
        return <Loader/>
    }

    return (
        <div>
            {!loading && <CollectionsList collections={collections}/>}
        </div>
    )
}