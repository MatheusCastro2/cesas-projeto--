import Cabecalho from '../cabecalho';
import Rodape from '../rodape';
import './styles.css';

export default function Equipe_Pagina() {
    return (
        <> <Cabecalho />
            <article className="equipe-pagina">
                <div>
                    <section className="principais">
                        <h2>Diretor: Flavio Luis Leite Sousa</h2>
                        <br></br>
                        <br></br>
                        <h2>Vice Diretor: Rita Roriz da Silva Andrade</h2>
                        <br></br>
                        <br></br>
                        <h2>Secretário: Ricardo Pinto dos Santos</h2>
                        <br></br>
                        <br></br>
                        <h2>Supervisão:</h2>
                        <ul>
                            <li>Consuelo da Piedade Bernardo Ferreira</li>
                            <li>Ana Carolina Leonel Emediato</li>
                        </ul>
                    </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <section className="coordenadores">
                        <h2>Coordenadores</h2>
                        <ul>
                            <li>Alexandre Adriano Neves de Paula</li>
                            <li>Ana Isabel Lopes da Costa</li>
                            <li>Nathan Belcavello de Oliveira</li>
                            <li>Regiane Prata da Fonseca Silva</li>
                        </ul>
                    </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <section className="equipe-docente">
                        <h2>Equipe Docente</h2>
                        <ul>
                            <li>Alexandre Adriano Neves de Paula</li>
                            <li>Augusto Rodrigues Pereira</li>
                            <li>Custódio Joanes de Oliveira</li>
                            <li>Daniela Filgueira Costa</li>
                            <li>Henrique Sanjiro Yuzuki Farias</li>
                            <li>Janaina Rosa da Silva Corsino</li>
                            <li>Magna Pedreira da Silva</li>
                            <li>Mércia Bandeira Nunes de Paiva</li>
                            <li>José Ricardo de Almeida</li>
                        </ul>
                    </section>
                </div>
            </article>
            <Rodape />
        </>
    );
}
