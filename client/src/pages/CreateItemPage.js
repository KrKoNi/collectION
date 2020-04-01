import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory, useParams } from 'react-router-dom'

export const CreateItemPage = () => {
    //const history = useHistory()
    const auth = useContext(AuthContext)
    const collectionId = useParams().id
    const {request} = useHttp()
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
                Authorization: `Bearer ${auth.token}`
            })
            if (data) {
                message('Item added')
            }
        } catch (e) {
            
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2">    
                <div className="input-field">
                    <input name="name" id="name" type="text" className="validate" value={item.name} onChange={changeHandler}/>
                    <label className="active" htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                    <input name="description" id="description" type="text" className="validate" value={item.description} onChange={changeHandler}/>
                    <label className="active" htmlFor="description">Description</label>
                </div>
                <div>
                    <button onClick={createHandler} className="waves-effect waves-light btn">Create Item</button>
                </div>
                
            </div>
        </div>
    )
}