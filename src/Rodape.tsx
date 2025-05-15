export default function Rodape() {
  const rodapeInfo = localStorage.getItem("rodapeInfo") || "Endereço padrão, Telefone padrão"

  return (
    <footer style={{ padding: "1rem", backgroundColor: "#ccc", textAlign: "center" }}>
      <p>{rodapeInfo}</p>
    </footer>
  )
}
