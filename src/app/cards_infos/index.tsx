'use client'
import { useState } from 'react';
import './styles.css';

export default function Cards() {
  const [abertos, setAbertos] = useState([false, false, false, false]);

  const alternarCard = (index: number) => {
    const novos = [...abertos];
    novos[index] = !novos[index];
    setAbertos(novos);
  };

  const dados = [
    { titulo: "Card 1", descricao: "Descrição do Card 1", detalhes: "Mais informações sobre o Card 1." },
    { titulo: "Card 2", descricao: "Descrição do Card 2", detalhes: "Mais informações sobre o Card 2." },
    { titulo: "Card 3", descricao: "Descrição do Card 3", detalhes: "Mais informações sobre o Card 3." },
    { titulo: "Card 4", descricao: "Descrição do Card 4", detalhes: "Mais informações sobre o Card 4." },
  ];

  return (
    <section className='cards'>
      <ul className='lista-cards'>
        {dados.map((card, index) => (
          <li key={index}>
            <div className={`card ${abertos[index] ? 'aberto' : ''}`}>
              <h2>{card.titulo}</h2>
              <p>{card.descricao}</p>
              <div className="detalhes">
                <p>{card.detalhes}</p>
              </div>
              <button className="botao-imagem houver-simulado" onClick={() => alternarCard(index)}>
                <img src='/assets/seta_baixo.svg' alt="Expandir card" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
