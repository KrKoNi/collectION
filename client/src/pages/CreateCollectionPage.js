import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export const CreateCollectionPage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [collection, setCollection] = useState({
        type: '', name: ''
    })
    const message = useMessage()

    const changeHandler = event => {
        setCollection({...collection, [event.target.name]: event.target.value})
    }
    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const createHandler = async () => {
        try {
            const data = await request('/api/collection/create', 'POST', {...collection}, {
                Authorization: `Bearer ${auth.token}`
            })
            if (data) {
                message('Collection created')
            }
            history.push(`/collection/${data.collection._id}`)
        } catch (e) {
            
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2">    
                <div className="input-field">
                    <select className="browser-default" id="type" name="type" value={collection.type} onChange={changeHandler} >
                        <option disabled value=''>Choose Collection</option>
                        <option value='Books'>Books</option>
                        <option value='Coins'>Coins</option>
                        <option value='Other'>Smth else</option>
                    </select>
                    <label className="active" htmlFor="type">Type</label>
                </div>
                <div className="input-field">
                    <input name="name" id="name" type="text" className="validate" value={collection.name} onChange={changeHandler}/>
                    <label className="active" htmlFor="name">Name</label>
                </div>
                <div>
                    <button onClick={createHandler} className="waves-effect waves-light btn">Create Collection</button>
                </div>
            </div>
        </div>
    )
}