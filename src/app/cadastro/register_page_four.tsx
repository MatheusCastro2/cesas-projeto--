
'use client'

import { FormEvent, ReactElement, useState } from 'react';
import './styles.css';
import Cabecalho from '../cabecalho';
import { StudentData } from './page';

interface RegisterProps {
    studentData: StudentData;
    setStudentData: React.Dispatch<React.SetStateAction<StudentData>>;
    goBack: () => void;
    goOn: () => void;
}



export default function Register_Page_Four({ studentData, setStudentData, goBack, goOn }: RegisterProps): ReactElement {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (e.target instanceof HTMLInputElement && (e.target.type === 'checkbox' || e.target.type === 'radio')) {
            const checked = e.target.checked;

            setStudentData((prev: StudentData) => ({
                ...prev,
                [name]: checked,
            }));
        }
        else if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
            const file = e.target.files?.[0] || null;
            setStudentData((prev: StudentData) => ({
                ...prev,
                [name]: file,
            }));
        } else {
            setStudentData((prev: StudentData) => ({
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
        <section className='register'>
            <div className="register-container">
                <div className="register-card">
                    <div className="register-header">
                        <h1> Matrícula Online </h1>
                        <p>Para se matricular no CESAS você precisa ter 15 anos completos para o Ensino Fundamental ou 18 anos completos se for estudar no Ensino Médio.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
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

                        {/* <br></br> */}

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
                    </form>

                    <div className="button-container">
                        <button className="submit-button" onClick={() => goBack()}>Voltar</button>
                        <button className="submit-button" onClick={() => goOn()}>Prosseguir</button>
                    </div>
                    <div className="register-footer">
                        <p>Já é Aluno? <a href="/login" className="signup-link">Acesse a Área do Aluno</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
