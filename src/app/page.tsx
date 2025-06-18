import Cabecalho from "./cabecalho";
import SobrenosEquipe from "./sobrenos_equipe_btns";
import Cards from "./cards_infos";
import Informacoes from "./informacoes";
import Rodape from "./rodape";
import Video from "./video";

export default function Home() {
  return (
    
    <div className='cesas-container'>
      <Cabecalho />
      <Informacoes />
      <Cards />
      <Video/>
      <SobrenosEquipe />
      <Rodape />
    </div>
  );
}
