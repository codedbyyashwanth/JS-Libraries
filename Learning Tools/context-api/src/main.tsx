import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import dataContext from './utils/data.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
            <dataContext.Provider value={{ data: "This is the data" }}>
                  <BrowserRouter>
                        <Navbar />
                        <App />
                  </BrowserRouter>
            </dataContext.Provider>
      </React.StrictMode>,
)
