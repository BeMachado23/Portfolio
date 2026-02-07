// =============================================================================
// SHOWCASE DATA - Mock data for Projects, Certificates, and Tech Stack
// =============================================================================

// -----------------------------------------------------------------------------
// TYPE DEFINITIONS
// -----------------------------------------------------------------------------

export interface ProjectTech {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;           // Path to project screenshot/preview
  tags: string[];          // e.g., ["Micro SaaS", "Next.js"]
  slug: string;            // URL-friendly identifier for detail page
  // Detail page fields
  fullDescription: string; // Long description for detail page
  githubUrl?: string;      // GitHub repository link
  technologies: ProjectTech[]; // Technologies used in the project
  features: string[];      // Key features bullet points
  projectMedia?: string;   // Media for detail view (image/video)
  mediaType?: 'image' | 'video'; // Type of media (default: image)
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;          // e.g., "Rocketseat", "Udemy"
  image: string;           // Path to certificate image
  date: string;            // Issue date
}

export interface TechItem {
  id: string;
  name: string;
  icon: string;            // Path to tech logo/icon
}

export type ShowcaseTab = "projects" | "certificates" | "techstack";

// -----------------------------------------------------------------------------
// MOCK DATA
// -----------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Color Viewer - 2025",
    description: "Gráficas e bureaus de pré-impressão sofrem com a dificuldade de estimar o consumo real de tinta (CMYK)...",
    image: "/images/projects/ColorViewer.png",
    tags: ["Micro SaaS", "B2B", "CMYK", "Image Processing"],
    slug: "color-viewer",
    fullDescription: "Gráficas e bureaus de pré-impressão sofrem com a dificuldade de estimar o consumo real de tinta (CMYK) e prever custos, muitas vezes dependendo de softwares caros ou 'chutes' visuais que geram desperdício e orçamentos errados.\n\n O objetivo foi projetar um SaaS que tornasse a análise colorimétrica acessível, automatizando o cálculo de cobertura de tinta e centralizando o fluxo de trabalho de impressão em uma plataforma web.\n\n Para a interface, utilizei Next.js integrado ao shadcn/ui, garantindo uma experiência visual moderna e responsiva. No backend, implementei a lógica pesada em Python, aproveitando suas bibliotecas de processamento de imagem para extrair com precisão os canais de cor e calcular a cobertura de tinta baseada nos uploads dos usuários.\n\n O projeto está atualmente em desenvolvimento. A integração entre o front-end Next.js e o back-end Python já foi estabelecida, com os algoritmos de colorimetria validados, visando criar uma ferramenta que padronize o controle de qualidade no setor gráfico.",
    githubUrl: "https://github.com/EnzoBDF/ProjetoAplicado-ColorViewer/tree/NewBack",
    technologies: [
      { name: "Next.js", icon: "/images/tech/Next_js.png" },
      { name: "TypeScript", icon: "/images/tech/Typescript.png" },
      { name: "Python", icon: "/images/tech/Python.png" },
      { name: "Shadcn/ui", icon: "/images/tech/Shadcn.png" },
      { name: "PostgreSQL", icon: "/images/tech/Postgresql.png" },
      {name: "Docker", icon: "/images/tech/Docker.png"},
      {name: "SQLAlchemy", icon: "/images/tech/SQLAlchemy.png"},

    ],
    features: [
      "Análise automática de cobertura de tinta (C, M, Y, K).",
      "Cálculo de custo previsível baseado em perfis de impressora.",
      "Alertas de TAC (Total Area Coverage) para prevenir erros de impressão por excesso de tinta.",
      "Dashboard de Histórico para acompanhar custos e trabalhos anteriores.",
    ],
    projectMedia: "/images/projects/ColorViewer.mp4",
    mediaType: "video",
  },
  {
    id: "proj-2",
    title: "API Restful - 2025",
    description: "Para consolidar meus conhecimentos em desenvolvimento backend com Java, precisei criar uma aplicação que simulasse um cenário",
    image: "/images/projects/RestAPI.png",
    tags: ["API REST", "JPA/Hibernate", "Backend"],
    slug: "project-in-bio",
    fullDescription: "Para consolidar meus conhecimentos em desenvolvimento backend com Java, precisei criar uma aplicação que simulasse um cenário real de gerenciamento acadêmico, lidando com relacionamentos de banco de dados e regras de negócio.\n\n O objetivo foi desenvolver uma API RESTful capaz de gerenciar alunos, alocar projetos e processar entregas com notas, garantindo a integridade dos dados e boas práticas de exposição de endpoints.\n\n Utilizei o Java Spring Boot como framework principal, implementando a camada de persistência com Spring Data JPA (Hibernate). Estruturei a aplicação utilizando o padrão DTO (Data Transfer Object) para proteger as entidades do banco e controlar exatamente o que é enviado no JSON de resposta. Criei endpoints para CRUD completo de alunos e lógica de cálculo de médias nas entregas.\n\n O resultado foi uma API funcional e bem estruturada, que serve como base de referência para meus projetos backend. Ela demonstra domínio sobre mapeamento objeto-relacional (ORM), injeção de dependências e construção de serviços web escaláveis.",
    githubUrl: "https://github.com/BeMachado23/gestao-projeto",
    technologies: [
      { name: "Java", icon: "/images/tech/Java.png" },
      { name: "Spring Boot", icon: "/images/tech/SpringBoot.png" },

    ],
    features: [
      "API RESTful seguindo os verbos HTTP padrões (GET, POST, PUT).",
      "Regras de negócio para lançamento de notas e avaliações.",
      "Implementação do padrão DTO (Data Transfer Object) para segurança dos dados.",
    ],
    projectMedia: "/images/projects/RestAPI.png",
  },
  {
    id: "proj-3",
    title: "Carinha - 2025",
    description: "Durante o HackAIthon da Intelbras na UniSenai, identificamos que clientes e parceiros muitas vezes tinham dificuldade",
    image: "/images/projects/Carinha.png",
    tags: ["AI", "Chatbot", "Hackathon"],
    slug: "carinha",
    fullDescription: "Durante o HackAIthon da Intelbras na UniSenai, identificamos que clientes e parceiros muitas vezes tinham dificuldade em navegar pelo vasto portfólio de segurança eletrônica da marca para encontrar a solução exata para seus problemas, bem como os treinamentos necessários para instalá-las.\n\n O desafio era desenvolver um Agente de IA Consultivo ('Carinha') em 3 dias que funcionasse como um especialista técnico virtual, capaz de recomendar produtos específicos e cursos de capacitação do portal Itec em uma única resposta.\n\n Atuei no desenvolvimento Full Stack da solução. Para o backend, utilizei Java Spring Boot para criar uma API robusta que integra com o modelo Gemini (Google), utilizando engenharia de prompt para forçar respostas estruturadas (JSON). Para a interface, escolhi Python (Streamlit), criando um chat interativo que consome essa API e renderiza as recomendações de produtos e manuais de forma amigável.\n\n O resultado foi um protótipo funcional que reduz drasticamente o tempo de busca por soluções. O sistema não apenas sugere o equipamento ideal (ex: câmeras, alarmes), mas também entrega o passo-a-passo de instalação e o link direto para o curso de qualificação, validando o uso de IA Generativa para suporte técnico e pré-vendas.",
    githubUrl: "https://github.com/Samoel1993/Intelbras_Desafio_IA",
    technologies: [
      { name: "Python", icon: "/images/tech/Python.png" },
      { name: "Node.js", icon: "/images/tech/Node.png" },
      { name: "Java", icon: "/images/tech/Java.png" },
      {name: "Spring Boot", icon: "/images/tech/SpringBoot.png"},
    ],
    features: [
      "UX focada em resolver a dúvida do cliente em poucos prompts.",
      "Análise de contexto e risco, não apenas palavras-chave.",
      "Saída em JSON para fácil integração com CRMs e WhatsApp.",
      "Sugestão cruzada de produtos e cursos de qualificação.",
    ],
    projectMedia: "/images/projects/Carinha.png",
  },
  {
    id: "proj-4",
    title: "Cantina Go - SA 2023",
    description: "Durante o terceiro ano do ensino médio, minha equipe e eu identificamos um problema recorre...",
    image: "/images/projects/CantinaGo.png",
    tags: ["Micro SaaS","Mobile","Desktop"],
    slug: "cantina-go",
    fullDescription: "Durante o terceiro ano do ensino médio, minha equipe e eu identificamos um problema recorrente nas cantinas escolares: as longas filas, que dificultavam a compra de alimentos e tomavam tempo dos alunos.\n\nO desafio era desenvolver uma solução tecnológica que otimizasse o atendimento nas cantinas, permitindo que os estudantes acessassem o cardápio de forma antecipada e organizassem melhor suas escolhas.\n\nPara resolver esse problema, desenvolvi um aplicativo chamado CANTINA GO, utilizando React (TypeScript) e React Native para o frontend, Java para o backend e PG Admin para gerenciar o banco de dados. O aplicativo permitia que os alunos visualizassem o cardápio semanal da cantina, reduzindo a incerteza sobre as opções disponíveis e contribuindo para a organização das filas.\n\nO projeto resultou em um protótipo funcional que demonstrou a viabilidade da ideia e como a tecnologia poderia otimizar o atendimento nas cantinas. No entanto, como se tratava de um projeto acadêmico, ele não foi implementado em larga escala, e muitos aspectos acabaram ficando apenas no estágio conceitual. Ainda assim, a experiência foi fundamental para consolidar conhecimentos técnicos e práticos no desenvolvimento de software.",
    githubUrl: "https://github.com/Senai-SC-CTAI/SA_2023_3B_CantinaGo",
    technologies: [
      { name: "React.js", icon: "/images/tech/React.png" },
      { name: "JavaScript", icon: "/images/tech/Js.png" },
      { name: "Node.js", icon: "/images/tech/Node.png" },
      { name: "PostgreSQL", icon: "/images/tech/Postgresql.png" },
      { name: "Java", icon: "/images/tech/Java.png" },
    ],
    features: [
      "App Mobile Cross-Platform (Expo) para pedidos e consulta de cardápio.",
      "Dashboard Web Administrativo para gestão de estoque e pedidos..",
      "Sistema de Feedback para avaliação contínua dos serviços.",
      "CRUD completo para gerenciamento de cardápio.",
    ],
    projectMedia: "/images/projects/CantinaGoDemonstracao.mov",
    mediaType: "video",
  },
  {
    id: "proj-5",
    title: "Tareffy - SA 2025",
    description: "Uma indústria de cortes a laser enfrentava problemas graves de organização interna e falhas de comunicação entre...",
    image: "/images/projects/Tareffy.png",
    tags: ["Task Management", "Kanban", "CRUD", "Academic"],
    slug: "tareffy",
    fullDescription: "Uma indústria de cortes a laser enfrentava problemas graves de organização interna e falhas de comunicação entre setores, resultando em perda de prazos e tempo ocioso dos funcionários.\n\n O desafio era criar um software intuitivo que centralizasse a gestão de tarefas, melhorasse a comunicação interna e fosse acessível tanto para gestores quanto para operários, visando otimizar a produção.\n\n Desenvolvi o Tareffy, um sistema CRUD fortemente inspirado no modelo Kanban (Trello). Projetei uma interface focada na usabilidade (UI/UX) que permite a criação, atribuição e monitoramento de tarefas por setor, além de incluir funcionalidades de gestão de estoque e relatórios de produtividade.\n\n Acadêmicamente, foi fundamental para consolidar conceitos de operações CRUD, arquitetura de software e design de interfaces focadas na experiência do usuário.",
    githubUrl: "https://github.com/EnzoBDF/Tareffy",
    technologies: [
      { name: "Next.js", icon: "/images/tech/Next_js.png" },
      { name: "TypeScript", icon: "/images/tech/Typescript.png" },
      { name: "Tailwind", icon: "/images/tech/tailwind.svg" },
    ],
    features: [
      "Sistema de Gestão de Tarefas estilo Kanban para alocação visual de demandas.",
      "Controle de Acesso Hierárquico (RBAC) para Gerentes e Funcionários",
      "Módulo de Gestão de Estoque integrado às tarefas de produção.",
    ],
    projectMedia: "/images/projects/Tareffy.png",
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Badge Cloud Fondations",
    issuer: "AWS",
    image: "/images/certificates/aws-academy-graduate-cloud-foundations-training-bad.png",
    date: "2024-01",
  },
  {
    id: "cert-2",
    title: "Badge Cloud Practitioner",
    issuer: "AWS",
    image: "/images/certificates/aws-cloud-quest-cloud-practitioner-training-badge.png",
    date: "2024-02",
  },
  {
    id: "cert-3",
    title: "Certificado CloudQuest",
    issuer: "AWS",
    image: "/images/certificates/CloudQuest.png",
    date: "2024-03",
  },
  {
    id: "cert-4",
    title: "Certificado Técnico em Desenvolvimento de Sistemas",
    issuer: "SENAI",
    image: "/images/certificates/CertificadoTecnicoSenai.png",
    date: "2024-03",
  },
  {
    id: "cert-5",
    title: "Introduction to IOT",
    issuer: "Cisco Networking Academy",
    image: "/images/certificates/CertificadoIOT.png",
    date: "2024-03",
  },
  {
    id: "cert-6",
    title: "NDG Linux Unhatched",
    issuer: "Cisco Networking Academy",
    image: "/images/certificates/CertificadoNDGLinuxUnhatched.png",
    date: "2022-03",
  },
  
 
]
export const techStack: TechItem[] = [
  { id: "tech-1", name: "React", icon: "/images/tech/React.png" },
  { id: "tech-2", name: "Next.js", icon: "/images/tech/Next_js.png" },
  { id: "tech-3", name: "TypeScript", icon: "/images/tech/Typescript.png" },
  { id: "tech-4", name: "Node.js", icon: "/images/tech/Node.png" },
  { id: "tech-5", name: "Tailwind", icon: "/images/tech/tailwind.svg" },
  { id: "tech-6", name: "PostgreSQL", icon: "/images/tech/Postgresql.png" },
  { id: "tech-7", name: "Docker", icon: "/images/tech/Docker.png" },
  { id: "tech-8", name: "Git", icon: "/images/tech/Git.png" },
  { id: "tech-9", name: "Figma", icon: "/images/tech/Figma(1).png" },
  { id: "tech-10", name: "CSS", icon: "/images/tech/Css.png" },
  { id: "tech-11", name: "HTML", icon: "/images/tech/Html.png" },
  { id: "tech-12", name: "Java", icon: "/images/tech/Java.png" },
];
