import Cabecalho from "./cabecalho";
import CalendarioEquipe from "./calendario_equipe";
import Cards from "./cards_infos";
import Informacoes from "./informacoes";
import Rodape from "./rodape";

export default function Home() {
  return (
    <div className='container'>
      {/* Cabeçalho fixo em todas as rotas */}
      <Cabecalho />

      <Informacoes />
      <Cards />
      <CalendarioEquipe />
      <Rodape />
    </div>
  );
}
