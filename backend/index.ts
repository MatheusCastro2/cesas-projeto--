import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const informacoes = {
  titulo: "Projeto CESA",
  descricao: "Informações iniciais do projeto CESA",
  data: "2025-05-27"
};

app.get('/api/informacoes', (req: Request, res: Response) => {
  res.json(informacoes);
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});
