import React from 'react'
import { Switch, Redirect, Route, Link } from 'react-router-dom'
import { CollectionPage } from './pages/CollectionPage'
import { MainPage } from './pages/MainPage'
import { UsersListPage } from './pages/UsersListPage'
import { UserPage } from './pages/UserPage'
import { CreateCollectionPage } from './pages/CreateCollectionPage'
import { AuthPage } from './pages/AuthPage'
import { CreateItemPage } from './pages/CreateItemPage'
import { LoginPage } from './pages/LoginPage'


export const useRoutes = (isAuthenticated, isAdmin) => {
    if(isAdmin) {
        return (
            <Switch>
                <Route path="/" exact>
                    <MainPage/>
                </Route>
                <Route path="/user" exact>
                    <UserPage/>
                </Route>
                <Route path="/users" exact>
                    <UsersListPage/>
                </Route>
                <Route path="/create_collection" exact>
                    <CreateCollectionPage/>
                </Route>
                <Route path="/create_item/:id">
                    <CreateItemPage/>
                </Route>
                <Route path="/collection/:id">
                    <CollectionPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
          
        )
    }
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <MainPage/>
                </Route>
                <Route path="/user" exact>
                    <UserPage/>
                </Route>
                <Route path="/create_collection" exact>
                    <CreateCollectionPage/>
                </Route>
                <Route path="/create_item/:id">
                    <CreateItemPage/>
                </Route>
                <Route path="/collection/:id">
                    <CollectionPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
          
        )
    }
    return (
        <Switch>
            <Route path="/auth">
                <AuthPage/>
            </Route>
            <Route path="/login">
                <LoginPage/>
            </Route>
            <Route path="/">
                <MainPage/>
            </Route>
            <Redirect to="/auth"/>
        </Switch>
    )
}