import React from 'react';
import { StudentData } from './page';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    nextPage: () => void;
    prevPage: () => void;
}

export default function Step2({ studentData, handleInputChange,nextPage,prevPage }: Props) {
    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h1> Matrícula Online no Profissionalizante</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={studentData.email}
                        onChange={handleInputChange}
                        placeholder="Seu email"
                        required />
                    <br></br>
                </div>

                <div className="form-group">
                    <label htmlFor="text">CPF do Estudante</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={studentData.cpf}
                        onChange={handleInputChange}
                        placeholder="Exemplo: 123.456.789-00"
                        required />
                </div>

                <br></br>

                <div className="form-group">
                    <label htmlFor="text">Nome Completo</label>
                    <input
                        type="text"
                        id="nome"
                        name="name"
                        value={studentData.name}
                        onChange={handleInputChange}
                        placeholder="Nome completo"
                        required />
                    <br></br>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Data de Nascimento</label>
                    <input
                        type="date"
                        id="birth-date"
                        name="birthDate"
                        value={studentData.birthDate}
                        onChange={handleInputChange}
                        required />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="text">Filiação 1</label>
                    <input
                        type="text"
                        id="mothersName"
                        name="mothersName"
                        value={studentData.mothersName}
                        onChange={handleInputChange}
                        placeholder="Nome completo da Mãe"
                        required />
                    <br></br>
                </div>
    

                <div className="form-group">
                    <label htmlFor="text">Filiação 2</label>
                    <input
                        type="text"
                        id="fathersName"
                        name="fathersName"
                        value={studentData.fathersName}
                        onChange={handleInputChange}
                        placeholder="Nome completo do Pai"
                        required />
                    <br></br>
                </div>
                <br></br>

                <br></br>

                <br></br>

                <div className="button-container">
                    <button type='button' className="pagination-button" onClick={() => prevPage()}>Voltar</button>
                    <button type='button' className="pagination-button" onClick={() => nextPage()}>Prosseguir</button>
                </div>
            </div>
        </div>
    );
}
