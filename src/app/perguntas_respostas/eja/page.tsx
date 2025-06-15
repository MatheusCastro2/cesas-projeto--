'use client'
import { useEffect, useState } from "react";

import "../styles.css";
import Cabecalho from "../../cabecalho";
import Rodape from "../../rodape";

interface Faq {
    id: number;
    question: string;
    answer: string;
}

export default function PerguntasRespostasEja() {
  const [abertos, setAbertos] = useState([false]);

  const alternacard = (index: number) => {
    const novos = [...abertos];
    novos[index] = !novos[index];
    setAbertos(novos);
  };

  const [faqs, setFaqs] = useState<Faq[]>([]);
            useEffect(() => {
                async function fetchFaqs() {
                    try {
                        const response = await fetch("http://localhost:3000/getEJAFaqs"); 
                        const data = await response.json();
                        setFaqs(data);
                    } catch (error) {
                        console.error("Erro ao buscar cursos:", error);
                    }
                }
        
                fetchFaqs();
            }, []);

  // const dados = [
  //   { 
  //     pergunta: "O EJA é gratuito?", 
  //     resposta: "O CESAS é uma escola pública da Secretaria de Estado de Educação do Distrito Federal. Portanto, todos os cursos oferecidos aqui são gratuitos." 
  //   },
  //   { 
  //     pergunta: "O curso é só para alunos do CESAS?", 
  //     resposta: "Não. O curso é aberto para a comunidade. Qualquer pessoa da comunidade que atenda aos requisitos mínimos de ingresso em cada curso pode se inscrever." 
  //   },
  //   { 
  //     pergunta: "Posso me inscrever em mais de um curso?", 
  //     resposta: "Você pode se inscrever em mais de um curso desde que eles estejam em turnos diferentes, por exemplo, um curso de manhã e outro de tarde." 
  //   },
  //   { 
  //     pergunta: "A inscrição garante minha vaga?", 
  //     resposta: "Não. A inscrição é uma pré-matrícula. Após o período de inscrição haverá o período de matrícula em que você confirma seu interesse no curso e apresenta os documentos. Se estiver interessado em um curso, você deve ficar atento aos prazos. Os cursos são condicionados à formação de um número mínimo de estudantes para que eles sejam ofertados, por isso a necessidade de haver uma pré-matrícula. Havendo maior número de interessados que a disponibilidade de vagas, os editais dos cursos preveem a realização de um sorteio. Havendo vagas remanescentes, o período de inscrição será prorrogado." 
  //   },
  // Não. A inscrição é uma pré-matrícula. Após o período de inscrição haverá o período de matrícula em que você confirma seu interesse no curso e apresenta os documentos. Se estiver interessado em um curso, você deve ficar atento aos prazos. Os cursos são condicionados à formação de um número mínimo de estudantes para que eles sejam ofertados, por isso a necessidade de haver uma pré-matrícula. Havendo maior número de interessados que a disponibilidade de vagas, os editais dos cursos preveem a realização de um sorteio. Havendo vagas remanescentes, o período de inscrição será prorrogado.
  //   { 
  //     pergunta: "Quais os documentos necessários para efetivar minha matrícula?", 
  //     resposta: "Para a formalização da matrícula será necessário enviar por meio do formulário, digitalizados, os documentos: a) Identidade - RG; b) CPF; c) Histórico Escolar; d) Declaração de Escolaridade; e) Comprovante de Residência; f) Laudo médico comprobatório de deficiência ou transtorno, para candidatos(as) a vagas para Pessoas com Deficiência ou Transtorno do Espectro Autista. Você receberá as orientações para o envio dos documentos no e-mail de confirmação da sua matrícula." 
  //   }
  // ];

  return (
    <> <Cabecalho/>
    <section className="perguntas-respostas">
      <h1>Educação de Jovens e Adultos e Profissionais do CESAS</h1>
      <h2>Perguntas e Respostas</h2>
      <ul className="lista-perguntas">
        {faqs.map((item, index) => (
          <li key={index}>
            <div className={`pergunta ${abertos[index] ? 'aberto' : ''}`}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </div>
            <button className="botao-imagem" onClick={() => alternacard(index)}>
              <img src="/assets/seta_pergunta.svg" alt="Expandir pergunta" />
            </button>
          </li>
        ))}
      </ul>
    </section>
    <Rodape/>
    </>
  );
}
