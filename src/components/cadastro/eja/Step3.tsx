import React from 'react';
import { StudentData } from '.';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    nextPage: () => void;
    prevPage: () => void;
}

export default function Step3({ studentData, handleInputChange, nextPage, prevPage }: Props) {
    return (<div className="register-container">
        <div className="register-card">
            <div className="register-header">
                <h1> Matrícula Online no EJA</h1>
            </div>
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
                <label htmlFor="text">Nome Social (Se Houver)</label>
                <input
                    type="text"
                    id="nome-social"
                    name="socialName"
                    value={studentData.socialName}
                    onChange={handleInputChange}
                    placeholder="Nome social" />
            </div>

            <br></br>

            <div className='form-group dropdown'>
                <label htmlFor='ethnicity'>Genêro:</label>
                <select
                    id="gender"
                    name="gender"
                    value={studentData.gender}
                    onChange={handleInputChange}
                    required
                >
                    <option value="" disabled>Selecione seu genêro</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="nao-binario">Não-Binário</option>
                </select>
            </div>

            <br></br>

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
            <br></br>

            <div className="button-container">
                <button type='button' className="pagination-button" onClick={() => prevPage()}>Voltar</button>
                <button type='button' className="pagination-button" onClick={() => nextPage()}>Prosseguir</button>
            </div>
        </div>
    </div>
    );
}
