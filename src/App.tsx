import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cabecalho from './components/Cabecalho'
import CalendarioEquipe from './components/calendario_equipe'
import Cards from './components/cards_infos'
import Informacoes from './components/informacoes'
import Rodape from './components/rodape'
import Login from './components/login'
import Register from './components/cadastro'
import PerguntasRespostas from './components/perguntas_respostas'
import Equipe_pagina from './components/equipe_pagina'
import CursoEja from './components/cursos_eja'
import CursoProfissionalizante from './components/cursos_profissionalizante'
import AdminPanel from './components/AdminPanel'

function App() {
  return (
    <div className='container'>
      {/* Cabeçalho fixo em todas as rotas */}
      <Cabecalho />
      
      {/* Conteúdo dinâmico baseado na rota */}
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={
          <>
            <Informacoes />
            <Cards />
            <CalendarioEquipe />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/perguntas_respostas" element={<PerguntasRespostas />} />
        <Route path="/equipe_pagina" element={<Equipe_pagina />} />
        <Route path='/cursos_eja' element={<CursoEja />} />
        <Route path='/cursos_profissionalizante' element={<CursoProfissionalizante/>} />
      </Routes>
      
      {/* Rodapé fixo em todas as rotas */}
      <Rodape />
    </div>
  )
}

export default App