import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom';
import {Route} from 'react-router';
import { AuthProvider } from './contexts/authContext/index.jsx';
import './App.css'

import Home from './pages/Home/Home.jsx'
import Login from './pages/Auth/Login/Login.jsx';
import Register from './pages/Auth/Register/Register.jsx';
import Chat from './pages/Chat/Chat.jsx'
import ProtectedRoute from './pages/Auth/ProtectedRoute/ProtectedRoute.jsx';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<Register/>}/>

          <Route path="/chat" element={<ProtectedRoute />}>
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
