import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GoogleAnalytics from './utils/GoogleAnalytics.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleAnalytics>
      <App />
    </GoogleAnalytics>
  </React.StrictMode>,
)
