import React, {useState} from 'react';
import { StudentData } from './page';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    nextPage: () => void;
    prevPage: () => void;
}

const validateCPF = (cpf: string): boolean => {
    const cleanedCPF = cpf.replace(/\D/g, '');

    if (cleanedCPF.length !== 11) {
        return false;
    }

    
    if (/^(\d)\1+$/.test(cleanedCPF)) {
        return false;
    }

   
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        
        sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    let firstCheckDigit = remainder < 2 ? 0 : 11 - remainder;

    
    if (parseInt(cleanedCPF.charAt(9)) !== firstCheckDigit) {
        return false;
    }

    
    sum = 0;
    for (let i = 0; i < 10; i++) {
        
        sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    let secondCheckDigit = remainder < 2 ? 0 : 11 - remainder;

    
    return parseInt(cleanedCPF.charAt(10)) === secondCheckDigit;
}

export default function Step3({ studentData, handleInputChange, nextPage, prevPage }: Props) {

    const [isInvalidCPF, setIsInvalidCPF] = useState(false);

    
    const handleProceed = () => {
        
        const isCpfValid = validateCPF(studentData.cpf);

        
        if (isCpfValid) {
            setIsInvalidCPF(false);
            nextPage();
        } else {
            
            setIsInvalidCPF(true);
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
                    max={today}
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
                {isInvalidCPF && <span style={{ color: 'red' }}>CPF inválido!</span>}
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