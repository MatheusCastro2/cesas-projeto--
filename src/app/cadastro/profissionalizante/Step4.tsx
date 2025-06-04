import React from 'react';
import { StudentData } from './page';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    setStudentData: React.Dispatch<React.SetStateAction<StudentData>>;
    prevPage: () => void;
}

export default function Step2({ studentData, handleInputChange, prevPage, setStudentData }: Props) {
    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h1> Matrícula Online no Profissionalizante</h1>
                </div>
                <div className='form-group dropdown'>
                    <label htmlFor='applyType'>Grau de escolaridade: </label>
                    <select
                        id="levelOfEducation"
                        name="levelOfEducation"
                        value={studentData.levelOfEducation}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Selecione seu grau de escolaridade</option>
                        <option value="EF1">Ensino Fundamental I</option>
                        <option value="EF2">Ensino Fundamental II</option>
                        <option value="EM">Ensino Médio</option>
                    </select>
                </div>
                <br></br>
                <div className='form-group checkbox'>
                    <label htmlFor='student-state'>Possui algum tipo de deficiência?</label>
                    <div className='student-state-checkbox'>
                        <label>
                            <input
                                type="radio"
                                name="legacyStudent"
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
                                name="legacyStudent"
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
                <div className="form-group">
                    <label htmlFor="text">Possui alguma necessidade especial? Se sim, infome abaixo</label>
                    <input
                        type="text"
                        id="specialNecessity"
                        name="specialNecessity"
                        value={studentData.specialNecessity}
                        onChange={handleInputChange}
                        placeholder="Exemplo: Cadeirante"
                    />
                    <br></br>
                </div>
                <div className='form-group image'>
                    <label htmlFor='image'>Anexe seu Laudo Médico (Para Estudante com Deficiência)</label>
                    <input type="file" name='studentMedicalReport' accept="image/*" onChange={handleInputChange} />
                </div>
                <br></br>
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
