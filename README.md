# RMCGEO - Site Institucional

Este é o site institucional da RMCGEO, desenvolvido com tecnologias modernas e de fácil manutenção.

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho do site
│   ├── Footer.tsx      # Rodapé do site
│   ├── HeroSection.tsx # Seção principal
│   └── ...
├── pages/         # Páginas do site
├── styles/        # Arquivos de estilo
└── assets/        # Imagens e outros recursos
```

## 🎨 Componentes Principais

1. **Header (Cabeçalho)**
   - Logo RMCGEO
   - Menu de navegação
   - Botão de tema claro/escuro

2. **HeroSection (Seção Principal)**
   - Título principal
   - Descrição
   - Botões de ação
   - Elementos decorativos

3. **Footer (Rodapé)**
   - Informações de contato
   - Links úteis
   - Redes sociais

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construir interfaces
- **TypeScript**: Adiciona tipagem ao JavaScript
- **Tailwind CSS**: Framework para estilização
- **Framer Motion**: Biblioteca para animações

## 🚀 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm run dev
```

3. Acesse o site:
```
http://localhost:5173
```

## 📝 Como Editar

### Para mudar textos:
- Abra o arquivo do componente desejado
- Procure o texto que deseja alterar
- Faça a alteração e salve

### Para mudar cores:
- Abra `src/index.css`
- Procure as variáveis de cor (começam com --)
- Altere os valores conforme necessário

### Para mudar imagens:
- Coloque a nova imagem em `src/assets`
- Atualize o caminho no componente desejado

## 🎯 Dicas para Manutenção

1. **Cores do Site**
   - Verde principal: #4CAF50
   - Amarelo secundário: #FFEB3B
   - Cores podem ser ajustadas em `src/index.css`

2. **Fontes**
   - Título: Orbitron
   - Texto: Inter
   - Configuradas em `src/index.css`

3. **Animações**
   - Usam Framer Motion
   - Podem ser ajustadas nos componentes

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do email: [seu-email@exemplo.com]
