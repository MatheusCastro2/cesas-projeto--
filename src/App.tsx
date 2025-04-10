
import './App.css'
import Cabecalho from './components/Cabecalho'
import Cards from './components/cards_infos'
import Informacoes from './components/informacoes'

function App() {
  

  return (
    <div className='container'>
      <Cabecalho />
      <Informacoes />
      <Cards />
    </div>
  )
}

export default App
