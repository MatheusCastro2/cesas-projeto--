import React from 'react';
import { StudentData } from './page';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    nextPage: () => void;
    prevPage: () => void;
}

export default function Step5({ studentData, handleInputChange, nextPage, prevPage }: Props) {
    return (<div className="register-container">
        <div className="register-card">
            <div className="register-header">
                <h1> Matrícula Online no EJA</h1>
            </div>
            <div className='form-group dropdown'>
                <label htmlFor='ethnicity'>Cor/Raça</label>
                <select
                    id="ethnicity"
                    name="ethnicity"
                    value={studentData.ethnicity}
                    onChange={handleInputChange}
                    required
                >
                    <option value="" disabled>Selecione sua etnia</option>
                    <option value="amarela">Amarela</option>
                    <option value="branca">Branca</option>
                    <option value="parda">Parda</option>
                    <option value="preta">Preta</option>
                    <option value="indigena">Indígena</option>
                    <option value="nao-declarada">Não declarada</option>
                </select>
            </div>

            <br></br>

            <div className="form-group">
                <label htmlFor="text">Informe seu CEP</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={studentData.cep}
                    onChange={handleInputChange}
                    placeholder="Exemplo: 12345-678"
                    required />
            </div>

            <br></br>

            <div className="form-group">
                <label htmlFor="text">Informe seu Endereço/Bairro/Cidade</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={studentData.address}
                    onChange={handleInputChange}
                    placeholder="Exemplo: Rua X/ Bairro Y/ Cidade Z"
                    required />
            </div>

            <br></br>


            <div className="form-group">
                <label htmlFor="phone">Número de Celular (Com Prefixo)</label>
                <input
                    type="text"
                    id="cellphoneNumber"
                    name='cellphoneNumber'
                    value={studentData.cellphoneNumber}
                    onChange={handleInputChange}
                    placeholder="Exemplo: (12) 34567-8901"
                    required />
                <br></br>
            </div>

            <div className="form-group">
                <label htmlFor="phone">Número do Telefone Fixo (Com Prefixo)</label>
                <input
                    type="text"
                    id="landlinePhone"
                    name='landlinePhone'
                    value={studentData.landlinePhone}
                    onChange={handleInputChange}
                    placeholder="Exemplo: (12) 34567-8901"
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
