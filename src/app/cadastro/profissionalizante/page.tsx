import { FormEvent, ReactElement, useState } from 'react';
import '../styles.css';
import Step1 from './Step1';
import Step2 from './Step2';


export interface StudentData {
    name: string,
    cpf: string,
    mothersName: string,
    birthDate: string,
    email: string,
    applyCourse: string,
    applyShift: string
}

export default function RegisterProfissionalizante(): ReactElement {

    const [step, setStep] = useState(1);

    const [studentData, setStudentData] = useState<StudentData>({
        name: '',
        cpf: '',
        mothersName: '',
        birthDate: '',
        email: '',
        applyCourse: '',
        applyShift: ''
    }
    )

    const nextPage = () => setStep((prev) => prev + 1);
    const prevPage = () => setStep((prev) => prev - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 nextPage={nextPage} />;
            case 2:
                return <Step2 studentData={studentData} handleInputChange={handleInputChange} prevPage={prevPage}/>;
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
                if (value === null) continue;
                formData.append(key, value as string);
            }

            const response = await fetch('http://localhost:3000/api/students', {
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
        <form onSubmit={handleSubmit}>
            <div className='register-container'>
                {renderStep()}
            </div>
        </form>
    );
}
