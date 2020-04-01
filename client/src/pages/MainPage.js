import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import { CollectionsList } from '../components/CollectionsList'

export const MainPage = () => {
    const {request, loading} = useHttp()
    const [collections, setCollections] = useState([])
    const getCollections = useCallback(async () => {
        try {
            const fetched = await request(`/api/collection/all`, 'GET', null)
            setCollections(fetched)
        } catch (e) {}
    }, [request])

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