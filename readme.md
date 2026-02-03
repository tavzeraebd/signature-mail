# 📧 Gerador de Assinaturas Institucionais - Grupo EBD

![GitHub top language](https://img.shields.io/github/languages/top/seu-usuario/signature-email?color=%23ed3237)
![GitHub license](https://img.shields.io/github/license/seu-usuario/signature-email)

Solução profissional e modular para padronização de assinaturas de e-mail dos colaboradores do Grupo EBD. Desenvolvido com foco em **UX**, **Performance** e **Acessibilidade**.

## 🚀 Funcionalidades
- **Interface Moderna:** UI limpa construída com Tailwind CSS.
- **Preview em Tempo Real:** Visualização instantânea conforme a digitação.
- **PWA (Progressive Web App):** Instalável em dispositivos móveis e funciona offline.
- **Cópia Inteligente:** Copia o HTML formatado com suporte a múltiplos navegadores.
- **Integração WhatsApp:** Gera links diretos com mensagem de saudação automática.
- **Tipografia Padronizada:** Uso rigoroso da fonte Roboto para identidade visual.

## 🛠️ Tecnologias
- **HTML5 & CSS3** (Custom Properties & Animations)
- **Tailwind CSS** (Utility-first framework)
- **JavaScript Moderno (ES6+)** (Modules, Async/Await, Clipboard API)
- **Service Workers** (Capacidades Offline/PWA)

## 📁 Estrutura do Projeto
```text
├── assets/             # Recursos estáticos (imagens/ícones)
├── src/
│   ├── css/            # Estilos globais e animações
│   ├── js/             # Lógica modular (Modular JS)
│   │   ├── main.js     # Orquestrador da aplicação
│   │   ├── template.js # Componentes de assinatura (View)
│   │   └── utils.js    # Helpers, máscaras e notificações
├── index.html          # Entrada principal
├── manifest.json       # Configurações do PWA
└── sw.js               # Service Worker para cache e offline# signature-mail
