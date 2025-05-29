import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cabecalho from './components/Cabecalho'
import CalendarioEquipe from './components/calendario_equipe'
import Cards from './components/cards_infos'
import Informacoes from './components/informacoes'
import Rodape from './components/rodape'
import Login from './components/login'
import RegisterEJA from './components/cadastro/eja'
import RegisterProfissionalizante from './components/cadastro/profissionalizante'
import PerguntasRespostas from './components/perguntas_respostas'
import Equipe_pagina from './components/equipe_pagina'
import CursoEja from './components/cursos/eja'
import CursoProfissionalizante from './components/cursos/profissionalizante'
import Video from './components/video'

function App() {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/informacoes') // Substitua pela sua API real
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => console.error('Erro ao buscar informações:', err))
  }, [])

  return (
    <div className='container'>
      <Cabecalho />
      
      <Routes>
        <Route path="/" element={
          <>
            <Informacoes dados={info} />
            <Cards />
            <Video />
            <CalendarioEquipe />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro/eja" element={<RegisterEJA />} />
        <Route path="/cadastro/profissionalizante" element={<RegisterProfissionalizante />} />
        <Route path="/perguntas_respostas" element={<PerguntasRespostas />} />
        <Route path="/equipe_pagina" element={<Equipe_pagina />} />
        <Route path='/cursos/eja' element={<CursoEja />} />
        <Route path='/cursos/profissionalizante' element={<CursoProfissionalizante />} />
      </Routes>

      <Rodape />
    </div>
  )
}

export default App
