# Projeto CESAS - Plataforma Educacional

<p align="center">
  <img src="https://via.placeholder.com/600x200.png?text=Banner+do+Projeto+CESAS" alt="Banner do Projeto CESAS">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-concluído-green" alt="Status do Projeto">
  <img src="https://img.shields.io/badge/licen%C3%A7a-MIT-blue" alt="Licença">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
</p>

> Projeto acadêmico de remodelação do site para o CESAS (Centro Educacional SESAS), uma instituição pública de Educação de Jovens e Adultos (EJA) e cursos profissionalizantes no Distrito Federal.

## 🚀 Demonstração ao Vivo

Acesse a versão de produção do site e navegue pela aplicação:

**[http://srv762003.hstgr.cloud/](http://srv762003.hstgr.cloud/)**

<p align="center">
  <strong>🎥 Vídeo de Demonstração do Painel do Administrador 🎥</strong><br>
  <a href="LINK_PARA_SEU_VIDEO_AQUI">
    <img src="https://via.placeholder.com/400x250.png?text=Clique+para+ver+o+Painel+Admin" alt="Demonstração do Painel Admin">
  </a>
</p>

## 📍 Sobre o Projeto

O objetivo deste projeto foi desenvolver um site institucional moderno, funcional e intuitivo para o CESAS. A nova plataforma visa solucionar problemas de comunicação e acesso à informação, melhorando a conexão entre a escola e a comunidade e facilitando o processo de busca de cursos e matrículas para qualquer tipo de usuário.

---

## ✨ Funcionalidades

A plataforma se divide em duas grandes áreas: a interface pública para alunos e visitantes e um painel de administração para gestão do conteúdo.

### Para Visitantes e Alunos
- ✅ **Página Inicial Informativa:** Apresentação clara sobre a escola e seus programas.
- ✅ **Cursos Detalhados:** Seção intuitiva para buscar e visualizar informações sobre os cursos oferecidos.
- ✅ **Inscrição Simplificada:** Formulário de matrícula online para se tornar um possível aluno com apenas alguns cliques.
- ✅ **Perguntas Frequentes (FAQ):** Uma área interativa para tirar as principais dúvidas.
- ✅ **Design Responsivo:** Experiência de uso consistente em celulares, tablets e desktops.

### Para Administradores (Painel de Controle)
- ✅ **Gerenciamento de Conteúdo:** Altere notícias, informações de rodapé e outros textos do site de forma dinâmica.
- ✅ **Gestão de Cursos:** Adicione, edite ou remova cursos da plataforma.
- ✅ **Administração de Alunos:** Visualize todos os alunos cadastrados através do site.
- ✅ **Exportação de Dados:** Gere arquivos `.csv` com a lista de alunos para uso externo.
- ✅ **Ficha Individual:** Gere um arquivo `.pdf` com a ficha de matrícula de cada aluno.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

| Frontend | Backend | Design & Versionamento |
|----------|---------|------------------------|
| <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"> | <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"> | <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma"> |
| <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"> | <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"> | <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git"> |
| <img src="https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css-modules&logoColor=white" alt="CSS Modules"> | | <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"> |
| <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"> | | |


---

## ▶️ Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina, você precisará clonar e executar tanto o repositório do **Frontend** quanto o do **Backend**.

### Pré-requisitos
* [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
* [Git](https://git-scm.com/)

### 1. Backend (Servidor)

```bash
# Clone o repositório do backend
git clone [https://github.com/iguin26/cesas_server.git](https://github.com/iguin26/cesas_server.git)

# Acesse a pasta do projeto
cd cesas_server

# Instale as dependências
npm install

# Execute o servidor
npm run dev
