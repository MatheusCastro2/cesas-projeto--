
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cabecalho from './components/Cabecalho'
import CalendarioEquipe from './components/calendario_equipe'
import Cards from './components/cards_infos'
import Informacoes from './components/informacoes'
import Rodape from './components/rodape'
import Login from './components/login'
import Register from './components/cadastro'

function App() {


  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={
          <>
            <Cabecalho />
            <Cards />
          </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
<Informacoes />
      <CalendarioEquipe />
      <Rodape />
    </div>
  )
}

export default App
