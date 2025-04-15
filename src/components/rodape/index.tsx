import Email from './assets/icon_email.svg';
import Facebook from './assets/icon_facebook.svg';
import Instagram from './assets/icon_instagram.svg';
import Globo from './assets/icon_site.svg';
import Telefone from './assets/icon_telefone.svg';
import Whats from './assets/icon_whats.svg';
import Youtube from './assets/icon_youtube.svg';

import './styles.css';

export default function Rodape() {
  return (
    <footer>
      <div className="footer-container">
        <ul className="links-rodape">
          <h2>Centro de Educação de Jovens e Adultos Asa Sul-Cesas</h2>
          <li>
            <img src={Globo} alt="Site oficial do CESAS" />
            <a href="https://www.cesas.se.df.gov.br/ead/" target="_blank" rel="noopener noreferrer">
              Site
            </a>
          </li>
          <li>
            <img src={Telefone} alt="Telefone de contato" />
            <a href="tel:+5561991184868">+55 (61) 99118-4868</a>
          </li>
          <li>
            <img src={Email} alt="E-mail de contato" />
            <a href="mailto:presencacesas@gmail.com">presencacesas@gmail.com</a>
          </li>
        </ul>
        <ul className="redes-sociais">
        
          <li>
            <a href="https://www.facebook.com/cesas.planopiloto" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook oficial do CESAS" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/c.e.s.a.s/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram oficial do CESAS" />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=+5561991184868" target="_blank" rel="noopener noreferrer">
              <img src={Whats} alt="WhatsApp do CESAS" />
            </a>
          </li>
          <li>
            <a href="https://tvradiocesas.blogspot.com" target="_blank" rel="noopener noreferrer">
              <img src={Youtube} alt="Canal do CESAS no YouTube" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
