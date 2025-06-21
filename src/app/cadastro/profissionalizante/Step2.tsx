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

    if(cleanedCPF.length !== 11){
        return false;
    }
    const invalidCPFs = [
        '00000000000', '11111111111', '22222222222', '33333333333', '44444444444',
        '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'
    ];
    if(invalidCPFs.includes(cleanedCPF)){
        return false;
    }

    let sum=0
    for(let i=0; i< 10; i++){
        sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
    }
    let remainder = sum % 11;
    let firstCheckDigit = remainder < 2 ? 0 : 11 - remainder;

    sum = 0
    for(let i=0; i<10; i++){
        sum +=parseInt(cleanedCPF.charAt(i)) * (11-i);
    }
    remainder = sum % 11;
    let secondCheckDigit = remainder < 2 ? 0 : 11 - remainder;

    return cleanedCPF.charAt(9) === firstCheckDigit.toString() && cleanedCPF.charAt(10) === secondCheckDigit.toString();

}

export default function Step2({ studentData, handleInputChange,nextPage,prevPage }: Props) {

    const [isInvalidCPF, setIsInvalidCPF] = useState(false);
    
        const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            if (name === 'cpf') {
                if (!validateCPF(value)) {
                    setIsInvalidCPF(true);
                } else {
                    setIsInvalidCPF(false);
                }
            }
            handleInputChange(e);  
        };

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
                        onChange={handleCPFChange}
                        placeholder="Exemplo: 123.456.789-00"
                        required />
                    {isInvalidCPF && <span style={{ color: 'red' }}>CPF inválido!</span>}
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
