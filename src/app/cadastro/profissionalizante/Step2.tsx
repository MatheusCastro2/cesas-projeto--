import React from 'react';
import { StudentData } from './page';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    // setStudentData: React.Dispatch<React.SetStateAction<StudentData>>;
    prevPage: () => void;
}

export default function Step2({ studentData, handleInputChange,  prevPage }: Props) {
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
                    <label htmlFor="text">Nome Completo da Mãe ou Responsável</label>
                    <input
                        type="text"
                        id="mothersName"
                        name="mothersName"
                        value={studentData.mothersName}
                        onChange={handleInputChange}
                        placeholder="Nome completo"
                        required />
                    <br></br>
                </div>

                <div className='form-group dropdown'>
                    <label htmlFor='applyCourse'>Curso desejado: </label>
                    <select
                        id="applyCourse"
                        name="applyCourse"
                        value={studentData.applyCourse}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Selecione o curso desejado</option>
                        <option value="cozinheiro">Cozinheiro</option>
                        <option value="op-comp">Operador de Computador</option>
                        <option value="assis-adm">Assistente Administrativo</option>
                    </select>
                </div>
                <br></br>
                <div className='form-group dropdown'>
                    <label htmlFor='applyShift'>Turno desejado: </label>
                    <select
                        id="applyShift"
                        name="applyShift"
                        value={studentData.applyShift}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Selecione o turno desejado</option>
                        <option value="matutino">Matutino (07:50-12:00)</option>
                        <option value="vespertino">Vespertino (15:50-18:00)</option>
                        <option value="noturno">Noturno (19:00-23:00)</option>
                    </select>
                </div>
                <br></br>

                <br></br>

                <br></br>

                <div className="button-container">
                    <button type='button' className="pagination-button" onClick={() => prevPage()}>Voltar</button>
                    <button type='submit' className="submit-button">Registrar</button>
                </div>
            </div>
        </div>
    );
}
