import React, {useState} from 'react';
import { StudentData } from './page';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    nextPage: () => void;
    prevPage: () => void;
}

const validatePhone = (tel: string): boolean => {
    const cleanedTel = tel.replace(/\D/g, '');

    if (cleanedTel.length !== 11){
        return false;
    }

    if (!/^\d+$/.test(cleanedTel)) {
        return false;
    }
    return true
}

export default function Step3({ studentData, handleInputChange, prevPage, nextPage }: Props) {
    
    const [isInvalidTel, setInvalidTel] = useState(false);

    const handleTelChange = () =>{
        const isTelValid = validatePhone(studentData.phone);

        if (isTelValid){
            setInvalidTel(false);
            nextPage();
        }else{
            setInvalidTel(true);
        }
    };
    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h1> Matrícula Online no Profissionalizante</h1>
                </div>
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
                    <label htmlFor="phone">Número de Celular (Com Prefixo)</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={studentData.phone}
                        onChange={handleInputChange}
                        placeholder="Exemplo: (12) 34567-8901"
                        required />
                    {isInvalidTel && <span style={{ color: 'red' }}>Celular inválido!</span>}
                    <br></br>
                </div>

                <div className="form-group">
                    <label htmlFor="text">Nacionalidade</label>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={studentData.nationality}
                        onChange={handleInputChange}
                        placeholder="Exemplo: Brasileiro"
                        required />
                    <br></br>
                </div>

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
                    <br></br>
                </div>

                <div className="form-group">
                    <label htmlFor="text">CEP</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        value={studentData.cep}
                        onChange={handleInputChange}
                        placeholder="Exemplo: 12345-678"
                        required />
                    <br></br>
                </div>

                <div className="form-group">
                    <label htmlFor="text">Naturalidade</label>
                    <input
                        type="text"
                        id="naturality"
                        name="naturality"
                        value={studentData.naturality}
                        onChange={handleInputChange}
                        placeholder="Exemplo: Brasília-DF"
                        required />
                    <br></br>
                </div>
                <br></br>

                <br></br>

                <br></br>

                <div className="button-container">
                    <button type='button' className="pagination-button" onClick={() => prevPage()}>Voltar</button>
                    <button type='button' className="pagination-button" onClick={handleTelChange}>Prosseguir</button>
                </div>
            </div>
        </div>
    );
}
