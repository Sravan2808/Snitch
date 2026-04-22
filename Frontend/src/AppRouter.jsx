import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app/App'
import "./app/index.css"

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter
