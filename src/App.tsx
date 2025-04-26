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
import Curso from './components/cursos'

function App() {
  return (
    <div className='container'>
      {/* Cabeçalho fixo em todas as rotas */}
      <Cabecalho />
      
      {/* Conteúdo dinâmico baseado na rota */}
      <Routes>
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
        <Route path='/cursos' element={<Curso />} />
      </Routes>
      
      {/* Rodapé fixo em todas as rotas */}
      <Rodape />
    </div>
  )
}

export default App