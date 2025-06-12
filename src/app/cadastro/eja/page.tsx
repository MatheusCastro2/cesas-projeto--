'use client'

import { FormEvent, ReactElement, useState } from 'react';
import '../styles.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Cabecalho from '@/app/cabecalho';
import Rodape from '@/app/rodape';
import RegisterFailed from './RegisterFailed';
import RegisterSucess from './RegisterSucess';

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

export default function RegisterEJA(): ReactElement {

    const [step, setStep] = useState(1);

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

    const nextPage = () => setStep((prev) => prev + 1);
    const prevPage = () => setStep((prev) => prev - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 nextPage={nextPage} />;
            case 2:
                return <Step2 studentData={studentData} handleInputChange={handleInputChange} setStudentData={setStudentData} nextPage={nextPage} prevPage={prevPage} />;
            case 3:
                return <Step3 studentData={studentData} handleInputChange={handleInputChange} nextPage={nextPage} prevPage={prevPage} />;
            case 4:
                return <Step4 studentData={studentData} handleInputChange={handleInputChange} nextPage={nextPage} prevPage={prevPage} />;
            case 5:
                return <Step5 studentData={studentData} handleInputChange={handleInputChange} nextPage={nextPage} prevPage={prevPage} />;
            case 6:
                return <Step6 studentData={studentData} handleInputChange={handleInputChange} setStudentData={setStudentData} nextPage={nextPage} prevPage={prevPage} />;
            case 7:
                return <Step7 handleInputChange={handleInputChange} prevPage={prevPage}/>;
            case 8:
                return <RegisterSucess/>;
            case 9:
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

            const response = await fetch('http://srv762003.hstgr.cloud::3000/eja/students', {
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
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className='register-container'>
                    {renderStep()}
                </div>
            </form>
            <Rodape />
        </>
    );
}
