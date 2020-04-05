import React, { useState, useCallback, useContext, useEffect } from 'react'
import { Link} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { UsersList } from '../components/UsersList'

export const UsersListPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [users, setUsers] = useState(null)
    
    const getUsers = useCallback(async () => {
        try {
            const fetched = await request(`/api/user`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsers(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    if(loading) {
        return <Loader/>
    }

    return (
        <div>
            {!loading && users && <UsersList users={users}/>}
        </div>
    )
}