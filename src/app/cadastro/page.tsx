
'use client'

import { FormEvent, ReactElement, useState } from 'react';
import './styles.css';
import Cabecalho from '../cabecalho';
import Register_Page_Two from './register_page_two';
import Register_Page_Three from './register_page_three';
import Register_Page_Four from './register_page_four';
import Register_Page_Five from './register_page_five';
import Register_Page_Six from './register_page_six';

export interface StudentData {
    name: string,
    cpf: string,
    nationality: string,
    state: string,
    idNumber: string,
    idExpDate: string,
    idIssuingBody: string,
    socialName: string,
    birthDate: string,
    gender: string,
    responsibleName: string,
    responsibleId: string,
    email: string,
    cellphoneNumber: string,
    landlinePhone: string,
    emergencyPhone: string,
    shift: string,
    applyType: string,
    ethnicity: string,
    legacyStudent: boolean
    disabledStudent: boolean,
    recordlessStudent: boolean,
    studentPhoto?: File | null,
    studentId?: File | null,
    studentProofOfResidence?: File | null,
    studentAcademicRecord?: File | null,
    studentMedicalReport?: File | null,
    address: string,
    cep: string
}



export default function ShowRegisterPage(): ReactElement {

    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => setCurrentPage(currentPage + 1);

    const [studentData, setStudentData] = useState<StudentData>({
        name: '',
        cpf: '',
        nationality: '',
        state: '',
        idNumber: '',
        idExpDate: '',
        idIssuingBody: '',
        socialName: '',
        birthDate: '',
        gender: '',
        responsibleName: '',
        responsibleId: '',
        email: '',
        cellphoneNumber: '',
        landlinePhone: '',
        emergencyPhone: '',
        shift: '',
        applyType: '',
        ethnicity: '',
        legacyStudent: false,
        disabledStudent: false,
        recordlessStudent: false,
        studentPhoto: null,
        studentId: null,
        studentProofOfResidence: null,
        studentAcademicRecord: null,
        studentMedicalReport: null,
        address: '',
        cep: ''
    }
    )


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (e.target instanceof HTMLInputElement && (e.target.type === 'checkbox' || e.target.type === 'radio')) {
            const checked = e.target.checked;

            setStudentData(prev => ({
                ...prev,
                [name]: checked,
            }));
        }
        else if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
            const file = e.target.files?.[0] || null;
            setStudentData(prev => ({
                ...prev,
                [name]: file,
            }));
        } else {
            setStudentData(prev => ({
                ...prev,
                [name]: value,
            }));
        }

    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Dados do cadastro:', studentData);
        try {
            const formData = new FormData();

            for (const [key, value] of Object.entries(studentData)) {
                if (value instanceof File || value === null) continue;
                formData.append(key, value as string);
            }

            if (studentData.studentPhoto) formData.append('studentPhoto', studentData.studentPhoto);
            if (studentData.studentId) formData.append('studentId', studentData.studentId);
            if (studentData.studentProofOfResidence) formData.append('studentProofOfResidence', studentData.studentProofOfResidence);
            if (studentData.studentAcademicRecord) formData.append('studentAcademicRecord', studentData.studentAcademicRecord);
            if (studentData.studentMedicalReport) formData.append('studentMedicalReport', studentData.studentMedicalReport);

            const response = await fetch('http://localhost:3001/api/students', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Erro ao enviar dados');

            alert('Dados enviados com sucesso!');
        } catch (err) {
            console.error(err);
            alert('Erro ao enviar formulário.');
        }
    }


    return (
        <><Cabecalho />
            {currentPage === 1 && (<section className='register'>
                <div className="register-container">
                    <div className="register-card">
                        <div className="register-header">
                            <h1> Matrícula Online </h1>
                            <p>Para se matricular no EJA você precisa ter 15 anos completos para 1a ou 2a Etapa ou 18 anos completos se for estudar na 3a Etapa</p>
                        </div>
                        <form onSubmit={handleSubmit}>
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
                        </form>

                        <div className="button-container">
                            <button className="submit-button" onClick={() => nextPage()}>Prosseguir</button>
                        </div>

                        <div className="register-footer">
                            <p>Já é Aluno? <a href="/login" className="signup-link">Acesse a Área do Aluno</a></p>
                        </div>
                    </div>
                </div>
            </section>)}

            {currentPage === 2 && (
                <Register_Page_Two studentData={studentData} setStudentData={setStudentData} goBack={() => setCurrentPage(1)} goOn={() => setCurrentPage(3)} />
            )}

            {currentPage === 3 && (
                <Register_Page_Three studentData={studentData} setStudentData={setStudentData} goBack={() => setCurrentPage(2)} goOn={() => setCurrentPage(4)} />
            )}

            {currentPage === 4 && (
                <Register_Page_Four studentData={studentData} setStudentData={setStudentData} goBack={() => setCurrentPage(3)} goOn={() => setCurrentPage(5)} />
            )}

            {currentPage === 5 && (
                <Register_Page_Five studentData={studentData} setStudentData={setStudentData} goBack={() => setCurrentPage(4)} goOn={() => setCurrentPage(6)} />
            )}

            {currentPage === 6 && (
                <Register_Page_Six studentData={studentData} setStudentData={setStudentData} goBack={() => setCurrentPage(5)} goOn={() => setCurrentPage(6)} />
            )}

        </>
    );
}
