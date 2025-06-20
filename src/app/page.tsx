import Cabecalho from "./cabecalho";
import SobrenosEquipe from "./sobrenos_equipe_btns";
import Cards from "./cards_infos";
import Informacoes from "./informacoes";
import Rodape from "./rodape";
import Video from "./video";
import Head from 'next/head';

export default function Home() {
  return (

    // <><Head>
    //   <title>Escola CESAS</title>
    //   <meta name="description" content="Portal Online CESAS" />
    //   <link rel="icon" href="/favicon.ico" />
    // </Head>

      <div className='cesas-container'>
        <Cabecalho />
        <Informacoes />
        <Cards />
        <Video />
        <SobrenosEquipe />
        <Rodape />
      </div>
    // </>
  );
}
