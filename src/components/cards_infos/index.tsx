import Seta from "./assets/seta_baixo.svg"
import './styles.css';

export default function Cards(){
    return(
        <section className='cards'>
                    <div>
            <ul className='lista-cards'>
                <li>
                    <div className='card'>
                        <h2>Card 1</h2>
                        <p>Descrição do Card 1</p>
                        <button className="botao-imagem">
                            <img src={Seta} alt="Seta para baixo" />
                        </button>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <h2>Card 2</h2>
                        <p>Descrição do Card 2</p>
                        <button className="botao-imagem">
                            <img src={Seta} alt="Seta para baixo" />
                        </button>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <h2>Card 3</h2>
                        <p>Descrição do Card 3</p>
                        <button className="botao-imagem">
                            <img src={Seta} alt="Seta para baixo" />
                        </button>
                    </div>
                </li>
                <li>
                    <div className='card'>
                        <h2>Card 4</h2>
                        <p>Descrição do Card 4</p>
                        <button className="botao-imagem">
                            <img src={Seta} alt="Seta para baixo" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
        </section>
    )
}