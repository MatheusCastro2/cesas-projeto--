import React, {useState} from 'react';
import { StudentData } from './page';


interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    nextPage: () => void;
    prevPage: () => void;
}

const validateRG = (rg: string): boolean => {

 const cleanedRG = rg.replace(/\D/g, '');

    if (cleanedRG.length !== 7 && cleanedRG.length !== 12) {
        return false;
    }

    if (!/^\d+$/.test(cleanedRG)) {
        return false;
    }

    return true;

}

export default function Step4({ studentData, handleInputChange, nextPage, prevPage }: Props) {
    
    const [isInvalidRg, setIsInvalidRg]= useState(false);

    const handleProceed = ()=>{
        const isRgValid = validateRG(studentData.idNumber);

        if (isRgValid){
            setIsInvalidRg(false);
            nextPage();
        }else{
            setIsInvalidRg(true);
        }
    };

    new Date().toISOString() 
    .slice(0, 10) 
    const today = new Date().toISOString().slice(0, 10);
    
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
                {isInvalidRg && <span style={{ color: 'red' }}>RG inválido!</span>}
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
                    max={today}
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
                <button type='button' className="pagination-button" onClick={handleProceed}>Prosseguir</button>
            </div>
        </div>
    </div>
    );
}
