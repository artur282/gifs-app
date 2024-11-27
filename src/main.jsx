import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitApp } from './Git-app'
import RegistroAcademico from './RegistroPeriodo'
import RegistroTipoAutoridad from './TipoDeAutoridad'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistroTipoAutoridad></RegistroTipoAutoridad>
    <RegistroAcademico></RegistroAcademico>
  </StrictMode>,
)
