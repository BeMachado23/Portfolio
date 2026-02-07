# Bernardo Machado - Digital Solutions Developer Portfolio

![Project Status](https://img.shields.io/badge/status-active-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

> **Um portfólio imersivo e interativo.** Este projeto foi desenvolvido para demonstrar minhas habilidades em Engenharia de Software Full Stack, UI/UX Design.

## 🎨 Conceito & Design

O design segue uma estética **"Dark/Glitch/Grega"**, refletindo a técnica do desenvolvimento de software moderno.

* **Identidade Visual:** Fundo preto profundo, acentos em Roxo Neon (`#966DCE`) e tipografia moderna.
* **Navegação:** Recomendo a utilização da Navbar para criar uma experiência de "apresentação de slides" fluida e magnética entre as seções.
* **Animações:** Integração de **Framer Motion** e **React Bits** para revelar textos ("Decrypted Text") e transições suaves.

---

## 🛠 Tech Stack (Portfólio)

A arquitetura deste site foi pensada para performance e escalabilidade modular.

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + `clsx` + `tailwind-merge`
* **Animações:** [Framer Motion](https://www.framer.com/motion/)
* **Ícones:** [Lucide React](https://lucide.dev/)

---

## ⚡ Funcionalidades do Site

### 🔒 Tela "Start" (Lock Screen)
A primeira seção funciona como uma capa. O scroll é inicialmente travado (`overflow-hidden`). O usuário deve interagir (clicar em "Start") para desbloquear a navegação, garantindo que a introdução seja vista por completo.

### 🧩 Grid de Showcase Modular
O componente de projetos utiliza um sistema de **Abas (Tabs)** gerenciado por estado (`useState`).
* **Aba Projects:** Grid 3 colunas (Cards com imagem e descrição).
* **Aba Certificates:** Grid 3 colunas (Layout adaptado para diplomas).
* **Aba Tech Stack:** Grid 6 colunas (Cards menores focados em ícones).

---

## 🏃‍♂️ Como Rodar Localmente

Clone o repositório e instale as dependências para ver o projeto em ação.

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/seu-portfolio.git](https://github.com/seu-usuario/seu-portfolio.git)

# 2. Entre na pasta
cd seu-portfolio

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Rode o servidor de desenvolvimento
npm run dev

# 5. Acesse http://localhost:3000
