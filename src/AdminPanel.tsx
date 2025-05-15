import { useState } from 'react'

export default function AdminPanel() {
  const [cursoEja, setCursoEja] = useState("Curso EJA - Educação de Jovens e Adultos")
  const [cursoProf, setCursoProf] = useState("Curso Profissionalizante")
  const [rodapeInfo, setRodapeInfo] = useState("Endereço: Rua X, Telefone: (61) 99999-9999")

  const handleSalvar = () => {
    localStorage.setItem("cursoEja", cursoEja)
    localStorage.setItem("cursoProf", cursoProf)
    localStorage.setItem("rodapeInfo", rodapeInfo)
    // Aqui você poderia enviar os dados para um backend futuramente
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Painel de Administração</h2>
      <div style={{ marginTop: "1rem" }}>
        <h3>Editar Cursos</h3>
        <label>
          Curso EJA:
          <input value={cursoEja} onChange={(e) => setCursoEja(e.target.value)} />
        </label>
        <br />
        <label>
          Curso Profissionalizante:
          <input value={cursoProf} onChange={(e) => setCursoProf(e.target.value)} />
        </label>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <h3>Editar Rodapé</h3>
        <textarea
          value={rodapeInfo}
          onChange={(e) => setRodapeInfo(e.target.value)}
          rows={3}
          style={{ width: "100%" }}
        />
      </div>

      <button onClick={handleSalvar} style={{ marginTop: "1rem" }}>
        Salvar Alterações
      </button>
    </div>
  )
}
