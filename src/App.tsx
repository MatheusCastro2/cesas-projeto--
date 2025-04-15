
import './App.css'
import Cabecalho from './components/Cabecalho'
import CalendarioEquipe from './components/calendario_equipe'
import Cards from './components/cards_infos'
import Informacoes from './components/informacoes'
import Rodape from './components/rodape'

function App() {
  

  return (
    <div className='container'>
      <Cabecalho />
      <Informacoes />
      <Cards />
      <CalendarioEquipe />
      <Rodape />
    </div>
  )
}

export default App
