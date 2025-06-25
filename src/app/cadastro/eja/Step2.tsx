import React, { useEffect, useState } from 'react';
import { StudentData } from './page';

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3000'

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    setStudentData: React.Dispatch<React.SetStateAction<StudentData>>;
    nextPage: () => void;
    prevPage: () => void;
}

interface Curso {
    id: number;
    name: string;
    morningShift: boolean;
    afternoonShift: boolean;
    nightShift: boolean;
}


export default function Step2({ studentData, handleInputChange, setStudentData, nextPage, prevPage }: Props) {

    const [cursos, setCursos] = useState<Curso[]>([]);
    const [availableShifts, setAvailableShifts] = useState<string[]>([]);



    useEffect(() => {
        async function fetchCursos() {
            try {
                const response = await fetch(`${API_HOST}/getEJACursos`);
                const data = await response.json();
                // normaliza os campos de turno
                const normalized: Curso[] = data.map((c: any) => ({
                    id: c.id,
                    name: c.name,
                    morningShift: Boolean(c.morningShiftAvailable),
                    afternoonShift: Boolean(c.afternoonShiftAvailable),
                    nightShift: Boolean(c.nightShiftAvailable),
                }));
                console.log("Cursos normalizados:", normalized);
                setCursos(normalized);
            } catch (error) {
                console.error("Erro ao buscar cursos:", error);
            }
        }
        fetchCursos();
    }, []);

    useEffect(() => {
        console.log("Curso selecionado:", studentData.applyType);
        console.log("Cursos disponíveis:", cursos);
        if (!cursos.length || !studentData.applyType) return;

        const selectedCurso = cursos.find(curso => curso.id === Number(studentData.applyType));
        console.log("Curso encontrado:", selectedCurso);

        if (selectedCurso) {
            const turnos: string[] = [];
            if (selectedCurso.morningShift) turnos.push('matutino');
            if (selectedCurso.afternoonShift) turnos.push('vespertino');
            if (selectedCurso.nightShift) turnos.push('noturno');
            console.log("Turnos disponíveis:", turnos);
            setAvailableShifts(turnos);
        } else {
            setAvailableShifts([]);
        }
    }, [studentData.applyType, cursos]);

    useEffect(() => {
        const cursoSelecionado = cursos.find(c => String(c.id) === studentData.applyType);
        if (cursoSelecionado) {
            setStudentData(prev => ({
                ...prev,
                applyTypeName: cursoSelecionado.name
            }));
        }
    }, [studentData.applyType, cursos]);

    function formatTurno(turno: string) {
        switch (turno) {
            case 'matutino': return 'Matutino (07:50-12:00)';
            case 'vespertino': return 'Vespertino (15:50-18:00)';
            case 'noturno': return 'Noturno (19:00-23:00)';
            default: return turno;
        }
    }

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h1> Matrícula Online no EJA</h1>
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
                        {cursos.map((curso, index) => (
                            <option key={curso.id} value={curso.id}>
                                {curso.name}
                            </option>
                        ))}
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
                        {/* <option value="matutino">Matutino (07:50-12:00)</option>
                        <option value="vespertino">Vespertino (15:50-18:00)</option>
                        <option value="noturno">Noturno (19:00-23:00)</option> */}
                        {availableShifts.map(shift => (
                            <option key={shift} value={shift}>
                                {formatTurno(shift)}
                            </option>
                        ))}
                    </select>
                </div>
                <br></br>

                <div className='form-group checkbox'>
                    <label htmlFor='student-state'>Já foi aluno do CESAS?</label>
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
                            Estou retornando ao CESAS
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
                            Matrícula nova
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
                    <button type='button' className="pagination-button" onClick={() => prevPage()}>Voltar</button>
                    <button type='button' className="pagination-button" onClick={() => nextPage()}>Prosseguir</button>
                </div>
            </div>
        </div>
    );
}
