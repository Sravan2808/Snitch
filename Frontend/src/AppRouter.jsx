import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app/App'
import "./app/index.css"
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/Login'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter
