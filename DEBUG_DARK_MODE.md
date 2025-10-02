# 🐛 Debug do Dark Mode

## 🔍 Passo a Passo para Verificar

### 1. Limpar Cache e Reiniciar
```bash
# Parar o servidor (Ctrl+C)
# Limpar cache do Vite
rm -rf node_modules/.vite
# Reiniciar
npm run dev
```

### 2. Abrir o Site e Console
1. Acesse http://localhost:3000 (ou a porta que aparecer)
2. Pressione **F12** para abrir o DevTools
3. Vá na aba **Console**

### 3. Verificar Logs
Quando a página carregar, você deve ver no console:
```
🌙 Dark Mode - Tema atual: light (ou dark)
📝 Classes antes: ...
✅ Classes depois: light (ou dark)
💾 Salvando no localStorage: light (ou dark)
```

### 4. Clicar no Toggle
1. Clique no ícone 🌙/☀️ no header
2. Observe o console - deve aparecer novos logs
3. Verifique se o tema muda de `light` para `dark`

### 5. Verificar a Tag HTML
Na aba **Elements** do DevTools:
1. Procure a tag `<html>`
2. Deve aparecer: `<html class="dark">` ou `<html class="light">`

### 6. Teste Manual
No console, execute:
```javascript
// Ver classe atual
console.log(document.documentElement.className)

// Adicionar dark manualmente
document.documentElement.classList.add('dark')

// Ver se mudou algo visualmente
```

## ✅ O que Deve Acontecer

### Se o ThemeContext estiver funcionando:
- ✅ Logs aparecem no console
- ✅ Classe `dark` ou `light` é adicionada no `<html>`
- ✅ localStorage tem a chave `theme`

### Se as classes dark: estiverem funcionando:
- ✅ Ao adicionar `dark` manualmente, as cores mudam
- ✅ Fundos ficam escuros
- ✅ Textos ficam claros

## 🔧 Possíveis Problemas

### Problema 1: Classe não muda
**Sintoma**: Logs não aparecem no console

**Solução**: ThemeProvider não está ativo
- Verificar se `src/main.tsx` tem o `<ThemeProvider>`
- Reiniciar o servidor

### Problema 2: Classe muda mas visual não
**Sintoma**: `<html class="dark">` aparece mas nada muda

**Solução**: Classes `dark:` não estão compiladas
- O Tailwind v4 já suporta `dark:` nativamente
- Verificar se as classes estão escritas corretamente
- Exemplo: `bg-white dark:bg-gray-900`

### Problema 3: Funciona manual mas não com toggle
**Sintoma**: `document.documentElement.classList.add('dark')` funciona, mas o botão não

**Solução**: Problema no ThemeToggle
- Verificar se o botão está chamando `toggleTheme()`
- Verificar se `useTheme()` está funcionando

## 📊 Checklist de Verificação

- [ ] Servidor rodando sem erros
- [ ] Console mostra os logs do ThemeContext
- [ ] Tag `<html>` tem a classe `dark` ou `light`
- [ ] localStorage tem a chave `theme`
- [ ] Ao adicionar `dark` manualmente, as cores mudam
- [ ] Botão de toggle existe no header
- [ ] Botão de toggle chama a função corretamente

## 🎯 Teste Rápido

Execute no console:
```javascript
// 1. Ver tema atual
console.log('Tema:', localStorage.getItem('theme'))

// 2. Ver classe do HTML
console.log('Classe HTML:', document.documentElement.className)

// 3. Testar toggle manual
document.documentElement.classList.toggle('dark')

// 4. Ver se mudou algo
console.log('Mudou?', document.documentElement.className)
```

## 📝 Informações para Debug

Se nada funcionar, forneça estas informações:

1. **Logs do console** (copie e cole)
2. **Classe do HTML** (`document.documentElement.className`)
3. **localStorage** (`localStorage.getItem('theme')`)
4. **Erro no console** (se houver)
5. **O que acontece ao clicar no toggle**

---

**🔍 Siga estes passos e me informe o que você vê no console!**
