import React, { useEffect } from 'react'
import 'materialize-css'

import { useRoutes } from './routes'
import {BrowserRouter as Router } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'
import { Loader } from './components/Loader'
import { verify, decode  } from 'jsonwebtoken'
//const config = require('config')

function App() {  
  const {login, logout, token, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const decoded = isAuthenticated && token ? decode(token, "uhsduh92hfhwes8hwbdguwrgho213rtrio") : false
  const isAdmin = decoded ? decoded.adminStatus : false
  
  const routes = useRoutes(isAuthenticated, isAdmin) 

  if(!ready) {
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated, isAdmin
    }}>
      <Router>
        <Navbar/>
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App
