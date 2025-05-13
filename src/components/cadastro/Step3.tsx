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
                <h1> Matrícula Online </h1>
                <p>Para se matricular no EJA você precisa ter 15 anos completos para 1a ou 2a Etapa ou 18 anos completos se for estudar na 3a Etapa</p>
            </div>
            <div className="form-group">
                <label htmlFor="text">Naturalidade do Estudante</label>
                <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={studentData.nationality}
                    onChange={handleInputChange}
                    placeholder="Exemplo: Brasileiro/Americano"
                    required />
            </div>

            <br></br>

            <div className="form-group">
                <label htmlFor="text">Estado de Residência</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={studentData.state}
                    onChange={handleInputChange}
                    placeholder="Exemplo: DF"
                    required />
            </div>

            <br></br>

            <div className="form-group">
                <label htmlFor="text">Numero de Identidade (RG)</label>
                <input
                    type="text"
                    id="idNumber"
                    name="idNumber"
                    value={studentData.idNumber}
                    onChange={handleInputChange}
                    placeholder="Exemplo: 1.234.567"
                    required />
            </div>

            <br></br>

            <div className="form-group">
                <label htmlFor="address">Data de Expedição da Identidade</label>
                <input
                    type="date"
                    id="expeditionDate"
                    name="idExpDate"
                    value={studentData.idExpDate}
                    onChange={handleInputChange}
                    required />
            </div>

            <br></br>

            <div className="form-group">
                <label htmlFor="text">Orgão Expeditor da Identidade</label>
                <input
                    type="text"
                    id="idIssuingBody"
                    name="idIssuingBody"
                    value={studentData.idIssuingBody}
                    onChange={handleInputChange}
                    placeholder="Exemplo: SSP/DF"
                    required />
            </div>

            <br></br>
            <br></br>


            <div className="button-container">
                <button className="submit-button" onClick={() => prevPage()}>Voltar</button>
                <button className="submit-button" onClick={() => nextPage()}>Prosseguir</button>
            </div>

            <div className="register-footer">
                <p>Já é Aluno? <a href="/login" className="signup-link">Acesse a Área do Aluno</a></p>
            </div>
        </div>
    </div>
    );
}
