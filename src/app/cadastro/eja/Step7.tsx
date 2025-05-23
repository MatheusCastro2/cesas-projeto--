import React from 'react';

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    prevPage: () => void;
}

export default function Step7({ handleInputChange, prevPage }: Props) {
    return (<div className="register-container">
        <div className="register-card">
            <div className="register-header">
                <h1> Matrícula Online no EJA</h1>
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

            <br></br>
            <br></br>

            <div className="button-container">
                <button type="button" className="pagination-button" onClick={() => prevPage()}>Voltar</button>
                <button type='submit' className="submit-button">Registrar</button>
            </div>
        </div>
    </div>
    );
}
