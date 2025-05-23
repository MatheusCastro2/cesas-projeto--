import Cabecalho from "./cabecalho";
import CalendarioEquipe from "./calendario_equipe";
import Cards from "./cards_infos";
import Informacoes from "./informacoes";
import Rodape from "./rodape";
import Video from "./video";

export default function Home() {
  return (
    <div className='container'>
      {/* Cabeçalho fixo em todas as rotas */}
      <Cabecalho />

      <Informacoes />
      <Cards />
      <Video/>
      <CalendarioEquipe />
      <Rodape />
    </div>
  );
}
