import React from 'react';
import { StudentData } from '.';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    setStudentData: React.Dispatch<React.SetStateAction<StudentData>>;
    nextPage: () => void;
}

export default function Step1({ studentData, handleInputChange, setStudentData, nextPage }: Props) {
    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h1> Matrícula Online </h1>
                    <p>Para se matricular no EJA você precisa ter 15 anos completos para 1a ou 2a Etapa ou 18 anos completos se for estudar na 3a Etapa</p>
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

                <div className='form-group dropdown'>
                    <label htmlFor='applyType'>Matrícula para: </label>
                    <select
                        id="applyType"
                        name="applyType"
                        value={studentData.applyType}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Selecione o tipo da matrícula</option>
                        <option value="EF1">Ensino Fundamental I - 1ª a 4ª etapa (15 anos completos)</option>
                        <option value="EF2">Ensino Fundamental II - 5ª a 8ª etapa (15 anos completos)</option>
                        <option value="EM">Ensino Médio - 1º ao 3º ano (18 anos completos)</option>
                    </select>
                </div>
                <br></br>
                <div className='form-group dropdown'>
                    <label htmlFor='shift'>Turno: </label>
                    <select
                        id="shift"
                        name="shift"
                        value={studentData.shift}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Selecione o turno</option>
                        <option value="matutino">Matutino (07:50-12:00)</option>
                        <option value="vespertino">Vespertino (15:50-18:00)</option>
                        <option value="noturno">Noturno (19:00-23:00)</option>
                    </select>
                </div>
                <br></br>

                <div className='form-group checkbox'>
                    <label htmlFor='student-state'>Já foi Aluno do CESAS?</label>
                    <div className='student-state-checkbox'>
                        <label>
                            <input
                                type="radio"
                                name="legacyStudent"
                                value="true"
                                checked={studentData.legacyStudent === true}
                                onChange={(e) => setStudentData({
                                    ...studentData,
                                    legacyStudent: e.target.value === "true",
                                })} />
                            Matrícula nova
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="legacyStudent"
                                value="false"
                                checked={studentData.legacyStudent === false}
                                onChange={(e) => setStudentData({
                                    ...studentData,
                                    legacyStudent: e.target.value === "true",
                                })} />
                            Estou retornando ao CESAS
                        </label>
                    </div>
                </div>

                <br></br>

                <div className='form-group checkbox'>
                    <label htmlFor='student-state'>Você tem algum tipo de deficiênia com laudo?</label>
                    <div className='student-state-checkbox'>
                        <label>
                            <input
                                type="radio"
                                name="disabledStudent"
                                value="true"
                                checked={studentData.disabledStudent === true}
                                onChange={(e) => setStudentData({
                                    ...studentData,
                                    disabledStudent: e.target.value === "true",
                                })} />
                            Sim
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="disabledStudent"
                                value="false"
                                checked={studentData.disabledStudent === false}
                                onChange={(e) => setStudentData({
                                    ...studentData,
                                    disabledStudent: e.target.value === "true",
                                })} />
                            Não
                        </label>
                    </div>
                </div>

                <br></br>

                <br></br>

                <div className="button-container">
                    <button className="submit-button" onClick={() => nextPage()}>Prosseguir</button>
                </div>

                <div className="register-footer">
                    <p>Já é Aluno? <a href="/login" className="signup-link">Acesse a Área do Aluno</a></p>
                </div>
            </div>
        </div>
    );
}
