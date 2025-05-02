import { FormEvent, ReactElement, useState } from 'react';
import './styles.css';

interface StudentData {
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

function captureData() {

}

export default function Register(): ReactElement {

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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Dados do cadastro:', studentData);
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
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={studentData.email}
                                onChange={handleInputChange}
                                placeholder="Seu email"
                                required
                            />
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
                                        onChange={(e) =>
                                            setStudentData({
                                                ...studentData,
                                                legacyStudent: e.target.value === "true",
                                            })
                                        }
                                    />
                                    Matrícula nova
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="legacyStudent"
                                        value="false"
                                        checked={studentData.legacyStudent === false}
                                        onChange={(e) =>
                                            setStudentData({
                                                ...studentData,
                                                legacyStudent: e.target.value === "true",
                                            })
                                        }
                                    />
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
                                        onChange={(e) =>
                                            setStudentData({
                                                ...studentData,
                                                disabledStudent: e.target.value === "true",
                                            })
                                        }
                                    />
                                    Sim
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="disabledStudent"
                                        value="false"
                                        checked={studentData.disabledStudent === false}
                                        onChange={(e) =>
                                            setStudentData({
                                                ...studentData,
                                                disabledStudent: e.target.value === "true",
                                            })
                                        }
                                    />
                                    Não
                                </label>
                            </div>
                        </div>

                        <br></br>

                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe uma foto 3x4 ou Selfie (Fundo Branco)</label>
                            <input type="file" name='studentPhoto' accept="image/*" onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="text">Nome Completo</label>
                            <input
                                type="text"
                                id="nome"
                                name="name"
                                value={studentData.name}
                                onChange={handleInputChange}
                                placeholder="Nome completo"
                                required
                            />
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label htmlFor="text">Nome Social (Se Houver)</label>
                            <input
                                type="text"
                                id="nome-social"
                                name="socialName"
                                value={studentData.socialName}
                                onChange={handleInputChange}
                                placeholder="Nome social"
                            />
                        </div>

                        <br></br>

                        <div className='form-group dropdown'>
                            <label htmlFor='ethnicity'>Genêro:</label>
                            <select
                                id="gender"
                                name="gender"
                                value={studentData.gender}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="" disabled>Selecione seu genêro</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="nao-binario">Não-Binário</option>
                            </select>
                        </div>

                        <br></br>

                        <div className="form-group">
                            <label htmlFor="address">Data de Nascimento</label>
                            <input
                                type="date"
                                id="birth-date"
                                name="birthDate"
                                value={studentData.birthDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <br></br>

                        <div className="form-group">
                            <label htmlFor="text">CPF do Estudante</label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={studentData.cpf}
                                onChange={handleInputChange}
                                placeholder="Exemplo: 123.456.789-00"
                                required
                            />
                        </div>

                        <br></br>

                        <div className="form-group">
                            <label htmlFor="text">Naturalidade do Estudante</label>
                            <input
                                type="text"
                                id="nationality"
                                name="nationality"
                                value={studentData.nationality}
                                onChange={handleInputChange}
                                placeholder="Exemplo: Brasileiro/Americano"
                                required
                            />
                        </div>

                        <br></br>

                        <div className="form-group">
                            <label htmlFor="text">Estado de Residência</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={studentData.state}
                                onChange={handleInputChange}
                                placeholder="Exemplo: DF"
                                required
                            />
                        </div>

                        <br></br>

                        <div className="form-group">
                            <label htmlFor="text">Numero de Identidade (RG)</label>
                            <input
                                type="text"
                                id="idNumber"
                                name="idNumber"
                                value={studentData.idNumber}
                                onChange={handleInputChange}
                                placeholder="Exemplo: 1.234.567"
                                required
                            />
                        </div>

                        <br></br>

                        <div className="form-group">
                            <label htmlFor="address">Data de Expedição da Identidade</label>
                            <input
                                type="date"
                                id="expeditionDate"
                                name="idExpDate"
                                value={studentData.idExpDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <br></br>

                        <div className="form-group">
                            <label htmlFor="text">Orgão Expeditor da Identidade</label>
                            <input
                                type="text"
                                id="idIssuingBody"
                                name="idIssuingBody"
                                value={studentData.idIssuingBody}
                                onChange={handleInputChange}
                                placeholder="Exemplo: SSP/DF"
                                required
                            />
                        </div>

                        <br></br>

                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe seu documento de Identidade</label>
                            <input type="file" name='studentId' accept="image/*" onChange={handleInputChange} />
                        </div>

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
                                required
                            />
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
                                required
                            />
                        </div>

                        <br></br>

                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe seu Comprovante de Residência (Com CEP)</label>
                            <input type="file" name='studentProofOfResidence' accept="image/*" onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Número de Celular (Com Prefixo)</label>
                            <input
                                type="text"
                                id="cellphoneNumber"
                                name='cellphoneNumber'
                                value={studentData.cellphoneNumber}
                                onChange={handleInputChange}
                                placeholder="Exemplo: (12) 34567-8901"
                                required
                            />
                            <br></br>
                        </div>

                        <br></br>

                        <div className="form-group">
                            <label htmlFor="phone">Número do Telefone Fixo (Com Prefixo)</label>
                            <input
                                type="text"
                                id="landlinePhone"
                                name='landlinePhone'
                                value={studentData.landlinePhone}
                                onChange={handleInputChange}
                                placeholder="Exemplo: (12) 34567-8901"
                                required
                            />
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
                                required
                            />
                        </div>

                        <br></br>

                        <div className="form-group">
                            <label htmlFor="address">Nome do Responsável (Para Alunos Menores de Idade)</label>
                            <input
                                type="text"
                                id="responsibleName"
                                name='responsibleName'
                                value={studentData.responsibleName}
                                onChange={handleInputChange}
                                placeholder="Nome do seu Responsável"
                            />
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
                                placeholder="Exemplo: 123.456.789-01"
                            />
                            <br></br>
                        </div>
                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe seu Histórico Escolar e Comprovante de Conclusão Mais Recentes</label>
                            <input type="file" name='studentAcademicRecord' accept="image/*" onChange={handleInputChange} />
                        </div>
                        <div className='form-group checkbox'>
                            <label htmlFor='student-state'>Caso você não tenha Histórico ou Certificado de Conclusão, Faça o exame para descobrir sua série. Necessita de exame de classificação ou reclassificação?</label>
                            <div className='student-state-checkbox'>
                                <label>
                                    <input
                                        type="radio"
                                        name="recorlessStudent"
                                        value="true"
                                        checked={studentData.disabledStudent === true}
                                        onChange={(e) =>
                                            setStudentData({
                                                ...studentData,
                                                disabledStudent: e.target.value === "true",
                                            })
                                        }
                                    />
                                    Sim
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="recordlessStudent"
                                        value="false"
                                        checked={studentData.disabledStudent === false}
                                        onChange={(e) =>
                                            setStudentData({
                                                ...studentData,
                                                disabledStudent: e.target.value === "true",
                                            })
                                        }
                                    />
                                    Não
                                </label>
                            </div>
                        </div>
                        <div className='form-group image'>
                            <label htmlFor='image'>Anexe seu Laudo Médico (Para Estudante com Deficiência)</label>
                            <input type="file" name='studentMedicalReport' accept="image/*" onChange={handleInputChange} />
                        </div>
                        <br></br>
                        <div className="button-container">
                            <button type="submit" className="login-button">Registrar</button>
                        </div>
                    </form>
                    <div className="login-footer">
                        <p>Já é Aluno? <a href="/login" className="signup-link">Acesse</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
