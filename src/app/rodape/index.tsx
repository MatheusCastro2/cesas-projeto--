'use client'

import { useEffect, useState } from 'react';
import './styles.css';

export default function Rodape() {
  const [footerData, setFooterData] = useState({
    siteLink: '',
    youtubeLink: '',
    instagramLink: '',
    facebookLink: '',
    whatsappLink: '',
    phone: '',
    email: ''
  });
  useEffect(() => {
    async function fetchFormTitle() {
      try {
        const response = await fetch('http://srv762003.hstgr.cloud:3000/getFooterData');  // método GET
        const data = await response.json();

        setFooterData(data);
      } catch (error) {
        console.error("Erro ao buscar título do formulário:", error);
      }
    }

    fetchFormTitle();
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <ul className="links-rodape">
          <h2>Centro de Educação de Jovens e Adultos Asa Sul-Cesas</h2>
          <li>
            <img src={'/assets/icon_site.svg'} alt="Site oficial do CESAS" />
            <a href={footerData.siteLink} target="_blank" rel="noopener noreferrer">
              Site
            </a>
          </li>
          <li>
            <img src={'/assets/icon_telefone.svg'} alt="Telefone de contato" />
            <a href={'tel:' + footerData.phone} target="_blank" rel="noopener noreferrer">
              {footerData.phone}
            </a>
          </li>
          <li>
            <img src='/assets/icon_email.svg' alt="E-mail de contato" />
            <a href={'mailto:' + footerData.email} target="_blank" rel="noopener noreferrer">
              {footerData.email}
            </a>
          </li>
        </ul>
        <ul className="redes-sociais">

          <li>
            <a href={footerData.facebookLink} target="_blank" rel="noopener noreferrer">
              <img src={'/assets/icon_facebook.svg'} alt="Facebook oficial do CESAS" />
            </a>
          </li>
          <li>
            <a href={footerData.instagramLink} target="_blank" rel="noopener noreferrer">
              <img src={'/assets/icon_instagram.svg'} alt="Instagram oficial do CESAS" />
            </a>
          </li>
          <li>
            <a href={footerData.whatsappLink} target="_blank" rel="noopener noreferrer">
              <img src={'/assets/icon_whats.svg'} alt="WhatsApp do CESAS" />
            </a>
          </li>
          <li>
            <a href={footerData.youtubeLink} target="_blank" rel="noopener noreferrer">
              <img src={'/assets/icon_youtube.svg'} alt="Canal do CESAS no YouTube" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
