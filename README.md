# Portfólio Alves

Um portfólio pessoal moderno e responsivo desenvolvido para Alves, estudante de tecnologia. Este projeto é uma Single Page Application (SPA) com design contemporâneo, animações suaves e funcionalidades interativas.

## 🚀 Características

### Design e Visual
- **Glassmorphism**: Efeito de vidro fosco nos cards
- **Paleta de Cores Neon**: Roxo (#8b5cf6) e Azul Ciano (#06b6d4)
- **Tipografia Moderna**: Google Fonts (Poppins para títulos, Inter para texto)
- **Cursor Customizado**: Efeito de brilho que segue o mouse
- **Partículas Animadas**: Background dinâmico na seção Hero
- **Gradientes Suaves**: Em botões e elementos de destaque
- **Sombras Neon (Glow)**: Em elementos importantes

### Funcionalidades
- **Toggle de Tema**: Dark Mode (padrão) ↔ Light Mode
- **Smooth Scroll**: Rolagem suave entre seções
- **Menu Responsivo**: Funciona em desktop, tablet e celular
- **Navbar Fixa**: Fica com fundo escuro ao rolar
- **Indicador de Scroll**: Barra de progresso no topo
- **Animações Scroll Reveal**: Elementos aparecem ao rolar (AOS)
- **Efeito de Digitação**: Texto animado na seção Hero
- **Formulário com Validação**: Feedback visual ao enviar
- **Botão Voltar ao Topo**: Aparece ao rolar a página

### Seções
1. **Hero**: Saudação animada, efeito de digitação, avatar com borda pulsante
2. **Sobre Mim**: Bio, foto, estatísticas (projetos, linguagens, cafés)
3. **Habilidades**: Grid de cards com barras de progresso animadas
4. **Projetos**: Grid de cards com hover effects e links para demo/GitHub
5. **Timeline**: Linha do tempo vertical com marcos da trajetória
6. **Contato**: Formulário validado e cards de contato social
7. **Footer**: Links sociais e créditos

## 📁 Estrutura do Projeto

```
portfolio-alves/
├── index.html          # Estrutura HTML semântica
├── styles.css          # Estilos CSS com design system
├── script.js           # Interatividade JavaScript
├── assets/             # Pasta para imagens
│   ├── avatar-placeholder.png
│   ├── about-placeholder.png
│   ├── project1.png
│   ├── project2.png
│   └── project3.png
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos, animações e glassmorphism
- **JavaScript (Vanilla)**: Interatividade sem frameworks
- **AOS (Animate On Scroll)**: Biblioteca de animações ao rolar
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia

## 📦 Como Usar

### 1. Clone ou Baixe o Projeto

```bash
# Se tiver Git
git clone [seu-repositório]

# Ou simplesmente baixe e extraia os arquivos
```

### 2. Abra o Projeto

```bash
# Navegue até a pasta do projeto
cd portfolio-alves

# Abra o index.html no navegador
# No Windows: clique duplo no arquivo
# No Linux/Mac: open index.html ou xdg-open index.html
```

### 3. Personalize o Conteúdo

#### No arquivo `index.html`:
- Altere o nome "Alves" para seu nome
- Atualize os links de redes sociais
- Modifique os textos de cada seção
- Adicione/remova projetos conforme necessário
- Atualize a timeline com sua trajetória real
- Configure o email e telefone no formulário

#### No arquivo `styles.css`:
- Modifique as variáveis CSS para mudar cores
- Ajuste espaçamentos e tamanhos
- Personalize animações

#### No arquivo `script.js`:
- Ajuste as frases do efeito de digitação
- Modifique a velocidade das animações
- Configure o formulário para envio real (integração com backend)

### 4. Adicione Suas Imagens

Coloque suas imagens na pasta `assets/`:
- `avatar-placeholder.png`: Sua foto de perfil (recomendado: 400x400px)
- `about-placeholder.png`: Foto para seção Sobre (recomendado: 500x600px)
- `project1.png`, `project2.png`, `project3.png`: Screenshots dos projetos (recomendado: 600x400px)

**Nota**: Se não adicionar imagens, o site usará placeholders automaticamente.

## 🎨 Personalização

### Mudar Cores

No arquivo `styles.css`, modifique as variáveis CSS no `:root`:

```css
:root {
    /* Cores principais */
    --primary: #8b5cf6;        /* Roxo neon */
    --secondary: #06b6d4;      /* Azul ciano */
    
    /* Cores de fundo */
    --bg-primary: #0a0a0f;     /* Preto azulado */
    --bg-secondary: #12121a;   /* Cinza escuro */
    
    /* Cores de texto */
    --text-primary: #f1f5f9;  /* Branco suave */
    --text-secondary: #94a3b8; /* Cinza claro */
}
```

### Mudar Fontes

As fontes são carregadas do Google Fonts. Para mudar:

1. No `index.html`, altere os links do Google Fonts
2. No `styles.css`, atualize as variáveis:
```css
:root {
    --font-title: 'Poppins', sans-serif;
    --font-body: 'Inter', sans-serif;
}
```

### Adicionar/Remover Seções

Para adicionar uma nova seção:
1. Adicione o HTML no `index.html`
2. Adicione os estilos no `styles.css`
3. Adicione o link no menu de navegação
4. Atualize o `script.js` se necessário

## 📱 Responsividade

O portfólio é totalmente responsivo e se adapta a:
- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

### Teste de Responsividade

Abra o DevTools do navegador (F12) e use o Device Mode para testar diferentes tamanhos de tela.

## 🔧 Funcionalidades Detalhadas

### Toggle de Tema

O tema é salvo no `localStorage`, então a preferência do usuário é mantida entre sessões.

### Formulário de Contato

Atualmente, o formulário apenas simula o envio. Para torná-lo funcional:

1. **Opção 1 - Formspree** (mais simples):
   - Cadastre-se em [formspree.io](https://formspree.io)
   - Substitua a ação do formulário com sua URL do Formspree
   - Exemplo: `<form action="https://formspree.io/f/seu-id" method="POST">`

2. **Opção 2 - Backend próprio**:
   - Crie um endpoint no seu backend
   - Use `fetch()` no `script.js` para enviar os dados
   - Remova a simulação atual

### Animações

As animações usam a biblioteca AOS. Para configurar:

No `script.js`:
```javascript
AOS.init({
    duration: 800,      // Duração em ms
    easing: 'ease-in-out',
    once: true,        // Anima apenas uma vez
    offset: 100        // Offset em px
});
```

## 🚀 Deploy

### Opções de Hospedagem Gratuita

1. **GitHub Pages**:
   - Faça upload do projeto para um repositório GitHub
   - Ative o GitHub Pages nas configurações
   - Seu site estará disponível em `seu-usuario.github.io/portfolio-alves`

2. **Netlify**:
   - Arraste a pasta do projeto para o Netlify Drop
   - Site publicado instantaneamente

3. **Vercel**:
   - Instale o Vercel CLI
   - Rode `vercel` na pasta do projeto

4. **Surge.sh**:
   ```bash
   npm install -g surge
   surge portfolio-alves
   ```

## 📝 Comentários no Código

Todos os arquivos possuem comentários detalhados em português explicando:
- Estrutura do código
- Funcionalidades específicas
- Como personalizar cada parte
- Boas práticas utilizadas

## 🎓 Aprendizado

Este projeto foi desenvolvido com foco em boas práticas de:
- **HTML Semântico**: Uso correto de tags HTML5
- **CSS Organizado**: Variáveis CSS, BEM naming, modularidade
- **JavaScript Limpo**: Funções modulares, código legível
- **Acessibilidade**: ARIA labels, navegação por teclado
- **Performance**: Lazy loading, otimização de animações
- **Responsividade**: Mobile-first approach

## 🐛 Troubleshooting

### Imagens não aparecem
- Verifique se os arquivos estão na pasta `assets/`
- Confirme que os nomes dos arquivos estão corretos
- Os placeholders funcionam automaticamente se as imagens não existirem

### Animações não funcionam
- Verifique se o JavaScript está habilitado no navegador
- Confirme se a biblioteca AOS está carregando (verifique o console)
- Certifique-se de que não há erros no console do navegador

### Menu mobile não abre
- Verifique se há conflitos com outros scripts
- Teste em diferentes navegadores
- Confirme se o CSS está carregando corretamente

## 📄 Licença

Este projeto é livre para uso pessoal e educacional. Sinta-se à vontade para modificar e adaptar conforme necessário.

## 👤 Autor

**Alves** - Estudante de Tecnologia

## 🙏 Agradecimentos

- AOS Library - Animações ao scroll
- Font Awesome - Ícones
- Google Fonts - Tipografia
- Comunidade de desenvolvedores

---

**Desenvolvido com 💜 por Alves - 2026**

Se você tiver dúvidas ou precisar de ajuda, sinta-se à vontade para entrar em contato!
