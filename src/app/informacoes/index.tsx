'use client'

import { useEffect, useState } from 'react';
import './style.css'

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3000'

interface Evento {
    id: number;
    text: string;
    createdAt?: string;
    updatedAt?: string;
}

interface HomeData {
    mainContent: {
        text: string;
        image: string;
    };
    events: Evento[];
}

const DEFAULT_DATA: HomeData = {
  mainContent: {
    text: 'Carregando conteúdo...',
    image: '/imagem-padrao.jpg'
  },
  events: []
};

export default function Informacoes() {
    const [homeinfos, setHomeinfos] = useState<HomeData>(DEFAULT_DATA);

    useEffect(() => {
        async function fetchHomeData() {
            try {
                const response = await fetch(`${API_HOST}/getHomeData`); // rota certa aqui
                const apiData = await response.json();
                const transformedData: HomeData = {
                    mainContent: {
                        text: apiData.data[0]?.text || '',
                        image: apiData.data[0]?.image || ''
                    },
                    events: apiData.events || []
                };
                setHomeinfos(transformedData);
            } catch (error) {
                console.error("Erro ao buscar home infos:", error);
            }
        }

        fetchHomeData();
    }, []);
    return (
        <div className="card-informacoes">
            <div className="card-topo">
                <img src={`${API_HOST}${homeinfos.mainContent.image}`} alt="Banner" />
                <div className="card-texto">
                    <h2>Bem-vindo ao Portal do Aluno - Escola CESAS!</h2>
                    <p>{homeinfos.mainContent.text}</p>
                    {/* <p>Este site foi criado especialmente para facilitar o seu acesso à matrícula online e para responder às dúvidas gerais sobre a nossa instituição.</p>
                    <p>Na Escola CESAS, acreditamos que a educação transforma vidas, todos os nossos cursos são totalmente gratuitos, garantindo mais oportunidades para quem busca crescimento pessoal e profissional.</p> */}
                    <h2> Eventos:</h2>
                    {/* <p> Entre os dias 12 e 16 de agosto, acontecerá o X, um evento repleto de X, o evento acontecerá no local X</p> */}
                    <ul className="eventos-lista">
                        {homeinfos.events.map((evento) => (
                            <li key={evento.id}>{evento.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}