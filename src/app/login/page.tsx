'use client'
import { FormEvent, ReactElement, useState } from 'react';
import './styles.css';
import Cabecalho from '../cabecalho';

export default function Login(): ReactElement {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dados = { email, password, rememberMe }
        console.log('Dados do login:', dados);
        await fetch('/api/login', { method: 'POST', body: JSON.stringify(dados)})
    }


    return (
        <> <Cabecalho/>
        <section className='login'>
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h1> Área do Aluno </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Seu email"
                                required
                            />
                            <br></br>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Sua senha"
                                required
                            />
                            <br></br>
                        </div>
                        <div className='form-options'>
                            <div className='remember-me'>
                                <input type='checkbox' id='remember-me' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                                <label htmlFor='remember-me'>Lembrar credenciais</label>
                            </div>
                            <a href="#" className="forgot-password">Esqueceu a senha?</a>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="button-container">
                            <button type="submit" className="login-button">Acessar</button>
                        </div>
                    </form>
                    <div className="login-footer">
                        <p>Não é Aluno? <a href="/cadastro" className="signup-link">Matricule-se</a></p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}



