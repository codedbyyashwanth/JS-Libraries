import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import Text from './Text.tsx'
import './index.css'
import { SVG } from './SVG.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
            <SVG />
      </React.StrictMode>,
)
