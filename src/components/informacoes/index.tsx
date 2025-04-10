import FotoEscola from './assets/foto_escola.svg'
import './style.css'


export default function Informacoes(){
    return(
        <article>
            <div className='card-informacoes'>
                <img src={FotoEscola} alt="Escola" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada dapibus mollis. Curabitur nulla sem, tempor et tincidunt nec, rutrum non magna. Nulla imperdiet, arcu volutpat commodo convallis, tortor nulla tincidunt justo, at porta lacus magna a nulla. Phasellus non dapibus lorem. Nam ac semper lectus, eget gravida dolor. Mauris porta arcu ut nisi feugiat porttitor. Etiam fermentum nulla in dictum fermentum. Donec faucibus molestie est, non luctus nibh pellentesque eu
                </p>

            </div>
        </article>
    )
}