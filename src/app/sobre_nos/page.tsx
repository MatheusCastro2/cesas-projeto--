import Cabecalho from '../cabecalho';
import Rodape from '../rodape';
import './styles.css';

export default function Sobre_Nos() {
    return (
        <> <Cabecalho />
            <br></br>
            <br></br>
            <h1> Sobre Nós</h1>
            <br></br>
            <br></br>
            <br></br>
            <article className="sobre-nos">
                <div className='texto'>
                    <p>O Centro de Educação de Jovens e Adultos da Asa Sul (CESAS) é uma instituição pública vinculada à Secretaria de Estado de Educação do Distrito Federal, localizada na SGAS 602, Projeção D, em Brasília. Desde sua fundação, o CESAS tem como missão oferecer oportunidades educacionais a jovens e adultos que não puderam concluir seus estudos na idade apropriada, promovendo a inclusão social e o desenvolvimento pessoal e profissional.</p>
                    <br></br>
                    <p>Nosso compromisso com a qualidade educacional é refletido em uma equipe dedicada, composta por diretores, vice-diretores, supervisores escolares, coordenadores pedagógicos, orientadores educacionais, professores, funcionários administrativos e auxiliares de educação.</p>
                    <br></br>
                    <p>No CESAS, acreditamos que a educação é uma ferramenta poderosa para transformar vidas. Estamos aqui para apoiar nossos estudantes em sua jornada de aprendizado, oferecendo um ambiente acolhedor e recursos que facilitam o alcance de seus objetivos educacionais e profissionais.</p>
                </div>
                <img src={"/assets/foto_escola.svg"} alt="Banner" />
            </article>
            <Rodape />
        </>
    );
}
