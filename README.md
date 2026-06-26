# 🚀 Gatos Astronautas - Website Interativo

Um website moderno e imersivo sobre gatos astronautas explorando o espaço, desenvolvido com HTML5, CSS3, JavaScript e p5.js.

## 📋 Estrutura do Projeto

```
gatosastronautas2/
├── index.html          # Arquivo principal HTML
├── styles.css          # Estilos CSS otimizados
├── script.js           # Funções JavaScript gerais
├── sketch-hero.js      # Animação p5.js da seção hero
├── sketch-galeria.js   # Animação interativa p5.js da galeria
└── README.md           # Este arquivo
```

## 🎨 Características

### Seções Principais

1. **Header Responsivo**
   - Navegação sticky com menu de seções
   - Logo com ícone de foguete
   - Design minimalista e intuitivo

2. **Seção Hero com Animação p5.js**
   - Estrelas cintilantes ao fundo
   - Naves com gatos astronautas em movimento
   - Efeito de trilha das naves
   - Texto de boas-vindas centralizado

3. **Seção de Exploração**
   - Grid responsivo com 4 missões espaciais
   - Cards com efeito hover e animação
   - Ícones representativos e descrições

4. **Galeria Interativa com p5.js**
   - 5 gatos astronautas animados
   - Física realista com gravidade
   - Colisão com paredes
   - Partículas ao clicar/impacto
   - Sistema de energia por personagem
   - **Interatividade**: Clique para ativar gatos

5. **Seção de Curiosidades**
   - 4 fatos fascinantes sobre gatos astronautas
   - Layout em grid responsivo
   - Animações ao scroll

6. **Formulário de Contato**
   - Validação de email integrada
   - Feedback visual ao enviar
   - Design responsivo

7. **Footer**
   - Links sociais
   - Copyright e créditos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e moderna
- **CSS3**: Flexbox, Grid, animações e gradientes
- **JavaScript (Vanilla)**: Sem dependências externas (exceto p5.js)
- **p5.js**: Biblioteca de criação de gráficos 2D para animações

## 📦 Dependências

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
```

A biblioteca p5.js é carregada via CDN no arquivo `index.html`.

## 🎯 Otimizações Implementadas

### Performance
- Código minificado e organizado
- Uso eficiente de p5.js com pool de objetos
- Event listeners otimizados com `requestAnimationFrame`
- CSS com transições suaves e eficientes

### Responsividade
- Design mobile-first
- Breakpoints em 768px e 480px
- Imagens e vídeos escaláveis
- Fonte dinâmica com `clamp()`

### Acessibilidade
- Estrutura HTML semântica
- Contraste adequado de cores
- Navegação por teclado
- Formulário com labels implícitos

### SEO
- Meta tags apropriadas
- Estrutura de heading correta
- Links internos com âncoras

## 🚀 Como Usar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/candeloro-svg/gatosastronautas2.git
   ```

2. **Abra no navegador**
   ```bash
   cd gatosastronautas2
   # Abra index.html em um navegador moderno
   ```

3. **Ou sirva localmente**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (com http-server)
   npx http-server
   ```

4. **Acesse**
   ```
   http://localhost:8000
   ```

## 🎮 Interatividade

- **Botão "Começar Jornada"**: Rola para a seção de exploração
- **Links de Navegação**: Scroll suave para cada seção
- **Galeria Interativa**: Clique na canvas para ativar os gatos
- **Formulário**: Preencha e envie mensagens

## 🎨 Customização

### Cores
Modifique as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #1a1a2e;
    --highlight-color: #e94560;
    /* ... */
}
```

### Animações p5.js
- **Seção Hero**: Edite `sketch-hero.js` para mudar comportamento das naves
- **Galeria**: Edite `sketch-galeria.js` para alterar física e aparência dos gatos

### Conteúdo
Todos os textos estão em `index.html` e são facilmente editáveis.

## 📱 Compatibilidade

- ✅ Chrome (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores móveis modernos

## 📊 Tamanho de Arquivos

| Arquivo | Tamanho | Tipo |
|---------|---------|------|
| index.html | ~8 KB | HTML |
| styles.css | ~12 KB | CSS |
| script.js | ~3 KB | JavaScript |
| sketch-hero.js | ~5 KB | JavaScript (p5.js) |
| sketch-galeria.js | ~8 KB | JavaScript (p5.js) |
| p5.js (CDN) | ~150 KB | Biblioteca |

**Total**: ~186 KB (com p5.js via CDN)

## 🐛 Troubleshooting

### Animações não funcionam
- Verifique se o p5.js foi carregado corretamente
- Verifique o console do navegador para erros
- Certifique-se de que JavaScript está habilitado

### Layout quebrado em mobile
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se a viewport meta tag está presente

### Performance lenta
- Feche outras abas/aplicações
- Tente em outro navegador
- Verifique a memória disponível

## 📝 Notas de Desenvolvimento

- O código é bem comentado e organizado por seções
- Cada arquivo p5.js é independente e modular
- CSS segue o padrão BEM simplificado
- JavaScript é vanilla (sem frameworks)

## 🤝 Contribuindo

Sinta-se livre para fazer fork, criar branches e enviar pull requests com melhorias!

## 📄 Licença

Este projeto é de código aberto e disponível sob a MIT License.

## 👨‍💻 Autor

Desenvolvido com ❤️ para amantes de gatos e espaço! 🚀🐱

---

**Última atualização**: Junho 2024
**Versão**: 1.0.0