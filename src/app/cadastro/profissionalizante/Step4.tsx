import React, { useEffect, useState } from 'react';
import { StudentData } from './page';

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3000'

interface Props {
    studentData: StudentData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    setStudentData: React.Dispatch<React.SetStateAction<StudentData>>;
    prevPage: () => void;
}

interface Curso {
    id: number;
    name: string;
    morningShift: boolean;
    afternoonShift: boolean;
    nightShift: boolean;
}

export default function Step4({ studentData, handleInputChange, prevPage, setStudentData }: Props) {

    const [cursos, setCursos] = useState<Curso[]>([]);
    const [availableShifts, setAvailableShifts] = useState<string[]>([]);

    useEffect(() => {
        async function fetchCursos() {
            try {
                const response = await fetch(`${API_HOST}/getProfisCursos`);
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
        console.log("Curso selecionado:", studentData.applyCourse);
        console.log("Cursos disponíveis:", cursos);
        if (!cursos.length || !studentData.applyCourse) return;

        const selectedCurso = cursos.find(curso => curso.id === Number(studentData.applyCourse));
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
    }, [studentData.applyCourse, cursos]);




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
                        {cursos.map((curso, index) => (
                            <option key={curso.id} value={curso.id}>
                                {curso.name}
                            </option>
                        ))}
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
                        disabled={!availableShifts.length}
                        required
                    >
                        <option value="" disabled>Selecione o turno</option>
                        {availableShifts.map(shift => (
                            <option key={shift} value={shift}>
                                {formatTurno(shift)}
                            </option>
                        ))}
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
