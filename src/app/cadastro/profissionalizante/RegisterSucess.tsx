import React from 'react';
import Link from 'next/link';

export default function RegisterSucess() {
    return (<div className="register-container">
        <div className="register-card">
            <div className="register-header">
                <h1> Matrícula Online no Profissionalizante</h1>
                <br></br>
                <p>Parabéns! sua pedido de matrícula foi registrado com sucesso! </p>
                <br></br>
                <p>Para efetivar sua matrícula, compareça presencialmente ao CESAS </p>
                <br></br>
                <p>Caso não tenha anexado o restante dos documentos, compareça presencialmente ao CESAS para a entrega</p>
            </div>
            <div className="button-container">
                <Link href='/'>
                    <button type="button" className="pagination-button">Voltar para a página inicial</button>
                </Link>
            </div>
        </div>
    </div>
    );
}
