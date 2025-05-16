import React from 'react';
import { StudentData } from '.';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    nextPage: () => void;
    prevPage: () => void;
}

export default function Step4({ studentData, handleInputChange, nextPage, prevPage }: Props) {
    return (<div className="register-container">
        <div className="register-card">
            <div className="register-header">
                <h1> Matrícula Online no EJA</h1>
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
                <button type='button' className="pagination-button" onClick={() => prevPage()}>Voltar</button>
                <button type='button' className="pagination-button" onClick={() => nextPage()}>Prosseguir</button>
            </div>
        </div>
    </div>
    );
}
