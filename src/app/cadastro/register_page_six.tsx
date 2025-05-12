
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
                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe uma foto 3x4 ou Selfie (Fundo Branco)</label>
                            <input type="file" name='studentPhoto' accept="image/*" onChange={handleInputChange} />
                        </div>
                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe seu documento de Identidade</label>
                            <input type="file" name='studentId' accept="image/*" onChange={handleInputChange} />
                        </div>

                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe seu Comprovante de Residência (Com CEP)</label>
                            <input type="file" name='studentProofOfResidence' accept="image/*" onChange={handleInputChange} />
                        </div>

                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe seu Histórico Escolar e Comprovante de Conclusão Mais Recentes</label>
                            <input type="file" name='studentAcademicRecord' accept="image/*" onChange={handleInputChange} />
                        </div>

                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe seu Laudo Médico (Para Estudante com Deficiência)</label>
                            <input type="file" name='studentMedicalReport' accept="image/*" onChange={handleInputChange} />
                        </div>
                        <div className="button-container">
                            <button className="submit-button" onClick={() => goBack()}>Voltar</button>
                            <button type="submit" className="submit-button">Registrar</button>
                        </div>
                    </form>

                    <div className="register-footer">
                        <p>Já é Aluno? <a href="/login" className="signup-link">Acesse a Área do Aluno</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
