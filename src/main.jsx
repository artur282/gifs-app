import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegistroAcademico from './RegistroPeriodo'
import RegistroTipoAutoridad from './TipoDeAutoridad'
import RecuperarUsuario from './RecuperarUsuario'
import PeriodosLista from './ListaPeriodoAcademico'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <PeriodosLista></PeriodosLista>
  </StrictMode>,
)
