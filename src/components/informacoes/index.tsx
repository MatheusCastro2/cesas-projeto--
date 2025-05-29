import FotoEscola from './assets/foto_escola.svg'
import './style.css'

type InformacoesProps = {
  dados: {
    titulo: string
    descricao: string
  } | null
}

export default function Informacoes({ dados }: InformacoesProps) {
  if (!dados) {
    return <p>Carregando informações...</p>
  }

  return (
    <div className="card-informacoes">
      <div className="card-topo">
        <img src={FotoEscola} alt="Banner" />
        <h2>{dados.titulo}</h2>
        <p>{dados.descricao}</p>
      </div>
    </div>
  )
}
