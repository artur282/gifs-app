import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitApp } from './Git-app'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitApp></GitApp>
  </StrictMode>,
)
