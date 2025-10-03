# Guia de Internacionalização (i18n)

## 📋 Visão Geral

O site agora suporta **3 idiomas**:
- 🇧🇷 **Português (PT-BR)** - idioma padrão
- 🇺🇸 **Inglês (EN)**
- 🇪🇸 **Espanhol (ES)**

## 🚀 Como Funciona

### 1. Estrutura de Arquivos

```
src/
├── i18n/
│   ├── config.ts           # Configuração do i18next
│   └── locales/
│       ├── pt-BR.json      # Traduções em português
│       ├── en.json         # Traduções em inglês
│       └── es.json         # Traduções em espanhol
├── components/
│   └── LanguageSwitcher.tsx  # Componente seletor de idioma
```

### 2. Seletor de Idioma

O componente `LanguageSwitcher` já está integrado no header (Navigation). Os usuários podem trocar de idioma clicando no ícone de globo.

### 3. Como Adicionar Traduções em um Componente

#### Passo 1: Importar o hook useTranslation

```tsx
import { useTranslation } from 'react-i18next'
```

#### Passo 2: Usar o hook no componente

```tsx
export default function MeuComponente() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('minhaChave.titulo')}</h1>
      <p>{t('minhaChave.descricao')}</p>
    </div>
  )
}
```

#### Passo 3: Adicionar as chaves nos arquivos JSON

**src/i18n/locales/pt-BR.json:**
```json
{
  "minhaChave": {
    "titulo": "Meu Título",
    "descricao": "Minha descrição"
  }
}
```

**src/i18n/locales/en.json:**
```json
{
  "minhaChave": {
    "titulo": "My Title",
    "descricao": "My description"
  }
}
```

**src/i18n/locales/es.json:**
```json
{
  "minhaChave": {
    "titulo": "Mi Título",
    "descricao": "Mi descripción"
  }
}
```

## ✅ Componentes Já Traduzidos

- ✅ **Navigation** - Menu de navegação
- ✅ **Apresentacao** - Seção hero/início

## 📝 Componentes Pendentes de Tradução

Para traduzir os demais componentes, siga o mesmo padrão:

### ComoFunciona.tsx
```tsx
import { useTranslation } from 'react-i18next'

export default function ComoFunciona() {
  const { t } = useTranslation()
  
  return (
    <section>
      <h2>{t('howItWorks.title')}</h2>
      <p>{t('howItWorks.subtitle')}</p>
      {/* ... */}
    </section>
  )
}
```

### Servicos.tsx
```tsx
import { useTranslation } from 'react-i18next'

export default function Servicos() {
  const { t } = useTranslation()
  
  return (
    <section>
      <h2>{t('services.title')}</h2>
      <p>{t('services.subtitle')}</p>
      {/* Use t('services.service1.title'), t('services.service1.description'), etc. */}
    </section>
  )
}
```

### FAQ.tsx
```tsx
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  
  return (
    <section>
      <h2>{t('faq.title')}</h2>
      <p>{t('faq.subtitle')}</p>
      {/* Use t('faq.q1.question'), t('faq.q1.answer'), etc. */}
    </section>
  )
}
```

## 🔑 Chaves de Tradução Disponíveis

Todas as chaves já estão definidas nos arquivos JSON. Consulte:
- `src/i18n/locales/pt-BR.json` para ver todas as chaves disponíveis
- As chaves seguem a estrutura: `secao.subsecao.item`

### Exemplos:
- `nav.home` → "Início" / "Home" / "Inicio"
- `hero.title1` → "Cuidamos da" / "We Take Care of" / "Cuidamos de la"
- `howItWorks.step1.title` → "Diagnóstico Gratuito" / "Free Diagnosis" / "Diagnóstico Gratuito"
- `services.service1.title` → "Apps que Vendem Mais" / "Apps That Sell More" / "Apps que Venden Más"

## 🌐 Detecção Automática de Idioma

O sistema detecta automaticamente o idioma do navegador do usuário. Se não for PT-BR, EN ou ES, usa PT-BR como padrão.

A preferência do usuário é salva no `localStorage` e mantida entre sessões.

## 🛠️ Comandos Úteis

```bash
# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📚 Recursos

- [Documentação react-i18next](https://react.i18next.com/)
- [Documentação i18next](https://www.i18next.com/)

---

**Próximos passos:**
1. Traduzir os componentes restantes (ComoFunciona, Servicos, FAQ, etc.)
2. Revisar traduções com falantes nativos
3. Adicionar testes de tradução
