import React from 'react';

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    prevPage: () => void;
}

export default function Step6({ handleInputChange, prevPage }: Props) {
    return (<div className="register-container">
        <div className="register-card">
            <div className="register-header">
                <h1> Matrícula Online </h1>
                <p>Para se matricular no EJA você precisa ter 15 anos completos para 1a ou 2a Etapa ou 18 anos completos se for estudar na 3a Etapa</p>
            </div>
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
                <button className="submit-button" onClick={() => prevPage()}>Voltar</button>
                <button className="submit-button" onClick={() => prevPage()}>Registrar</button>

            </div>

            <div className="register-footer">
                <p>Já é Aluno? <a href="/login" className="signup-link">Acesse a Área do Aluno</a></p>
            </div>
        </div>
    </div>
    );
}
