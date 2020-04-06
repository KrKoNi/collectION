import React, { useState, useCallback, useContext, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { ItemsList } from '../components/ItemsList'
import { useMessage } from '../hooks/message.hook'

export const CollectionPage = () => {
    const {token, userId} = useContext(AuthContext)
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
    const [item, setItem] = useState({
        name: '', col: collectionId, description: ''
    })
    const message = useMessage()

    const changeHandler = event => {
        setItem({...item, [event.target.name]: event.target.value})
    }
    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const createHandler = async () => {
        try {
            const data = await request('/api/item/create', 'POST', {...item}, {
                Authorization: `Bearer ${token}`
            })
            if (data) {
                message('Item added')
            }
            window.location = `/collection/${collectionId}`
        } catch (e) {}
    }

    if(loading) {
        return <Loader/>
    }

    return (
        <div className="row">
        <div className="col s6 m4 l3">  
            {!loading && items && <ItemsList items={items}/>}
            <div className="card">
                <div className="card-image">
                    <img src="https://materializecss.com/images/sample-1.jpg"/>
                </div>
                <div className="card-content">
                    <div className="input-field">
                        <input name="name" id="name" type="text" className="validate" value={item.name} onChange={changeHandler}/>
                        <label className="active" htmlFor="name">Name</label>
                    </div> 
                    <div className="input-field">
                        <input name="description" id="description" type="text" className="validate" value={item.description} onChange={changeHandler}/>
                        <label className="active" htmlFor="description">Description</label>
                    </div>
                </div>
                <div>
                    <button onClick={createHandler} className="waves-effect waves-light btn">Create Item</button>
                </div>
            </div>
        </div>
        </div>
    )
}
                