import React from 'react';
import { StudentData } from '.';

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    setStudentData: React.Dispatch<React.SetStateAction<StudentData>>;
    nextPage: () => void;
    prevPage: () => void;
}

export default function Step5({ studentData, handleInputChange, setStudentData, nextPage, prevPage }: Props) {
    return (<div className="register-container">
        <div className="register-card">
            <div className="register-header">
                <h1> Matrícula Online </h1>
                <p>Para se matricular no EJA você precisa ter 15 anos completos para 1a ou 2a Etapa ou 18 anos completos se for estudar na 3a Etapa</p>
            </div>
            <div className="form-group">
                <label htmlFor="address">Nome do Responsável (Para Alunos Menores de Idade)</label>
                <input
                    type="text"
                    id="responsibleName"
                    name='responsibleName'
                    value={studentData.responsibleName}
                    onChange={handleInputChange}
                    placeholder="Nome do seu Responsável" />
                <br></br>
            </div>
            <div className="form-group">
                <label htmlFor="address">CPF da Mãe (Para Alunos Menores de Idade) </label>
                <input
                    type="text"
                    id="responsibleId"
                    name='responsibleId'
                    value={studentData.responsibleId}
                    onChange={handleInputChange}
                    placeholder="Exemplo: 123.456.789-01" />
                <br></br>
            </div>
            <br></br>
            <div className="form-group">
                <label htmlFor="phone">Número de Telefone de Emergência (Com Prefixo)</label>
                <input
                    type="text"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    value={studentData.emergencyPhone}
                    onChange={handleInputChange}
                    placeholder="Exemplo: (12) 34567-8901"
                    required />
            </div>
            <br></br>
            <div className='form-group checkbox'>
                <label htmlFor='student-state'>Caso você não tenha Histórico ou Certificado de Conclusão, Faça o exame para descobrir sua série. Necessita de exame de classificação ou reclassificação?</label>
                <div className='student-state-checkbox'>
                    <label>
                        <input
                            type="radio"
                            name="recorlessStudent"
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
                            name="recordlessStudent"
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
