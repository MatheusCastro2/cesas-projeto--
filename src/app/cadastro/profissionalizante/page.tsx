'use client'
import { FormEvent, ReactElement, useState } from 'react';
import '../styles.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Cabecalho from '@/app/cabecalho';
import Rodape from '@/app/rodape';
import Step3 from './Step3';
import Step4 from './Step4';
import RegisterSucess from './RegisterSucess';
import RegisterFailed from './RegisterFailed';


export interface StudentData {
    name: string,
    cpf: string,
    mothersName: string,
    fathersName: string,
    birthDate: string,
    email: string,
    applyCourse: string,
    applyShift: string,
    gender: string,
    nationality: string,
    phone: string,
    address: string,
    cep: string,
    naturality: string,
    levelOfEducation: string,
    specialNecessity: string,
    disabledStudent: boolean,
    studentMedicalReport?: File | null,
}

export default function RegisterProfissionalizante(): ReactElement {

    const [step, setStep] = useState(1);

    const [studentData, setStudentData] = useState<StudentData>({
        name: '',
        cpf: '',
        mothersName: '',
        fathersName: '',
        birthDate: '',
        email: '',
        applyCourse: '',
        applyShift: '',
        gender: '',
        nationality: '',
        phone: '',
        address: '',
        cep: '',
        naturality: '',
        levelOfEducation: '',
        specialNecessity: '',
        disabledStudent: false,
        studentMedicalReport: null
    }
    )

    const nextPage = () => setStep((prev) => prev + 1);
    const prevPage = () => setStep((prev) => prev - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 nextPage={nextPage} />;
            case 2:
                return <Step2 studentData={studentData} handleInputChange={handleInputChange} prevPage={prevPage} nextPage={nextPage} />;
            case 3:
                return <Step3 studentData={studentData} handleInputChange={handleInputChange} prevPage={prevPage} nextPage={nextPage}/>;
            case 4:
                return <Step4 studentData={studentData} setStudentData={setStudentData} handleInputChange={handleInputChange} prevPage={prevPage} />;
            case 5:
                return <RegisterSucess/>;
            case 6:
                return <RegisterFailed/>;
            default:
                return null;
        }
    };


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
                if (value instanceof File && value) {
                    formData.append(key, value);
                } else if (value !== null && value !== undefined) {
                    formData.append(key, String(value));
                }
            }

            const response = await fetch('http://srv762003.hstgr.cloud:3000/professionalizing/students', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Erro ao enviar dados');

            nextPage();
        } catch (err) {
            console.error(err);
            nextPage();
            nextPage();
        }
    }


    return (
        <> <Cabecalho />
            <form onSubmit={handleSubmit}>
                <div className='register-container'>
                    {renderStep()}
                </div>
            </form>
            <Rodape />
        </>
    );
}
