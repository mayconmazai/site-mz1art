# 🔄 Componentes Restantes para Traduzir

## ✅ Status Atual

### Já Traduzidos (11/15)
1. ✅ Navigation
2. ✅ Apresentacao
3. ✅ ComoFunciona
4. ✅ Servicos
5. ✅ PorqueMZ1
6. ✅ Planos
7. ✅ FAQ
8. ✅ PropostaComercial
9. ✅ Diferenciais

### Faltam Traduzir (4/15)
10. ⏳ SLA
11. ⏳ TimeTecnico
12. ⏳ Header
13. ⏳ Footer

---

## 📝 Chaves de Tradução JÁ CRIADAS

Todas as chaves necessárias **já foram adicionadas** nos 3 arquivos JSON:
- ✅ `src/i18n/locales/pt-BR.json`
- ✅ `src/i18n/locales/en.json`
- ✅ `src/i18n/locales/es.json`

### Chaves disponíveis:
- `sla.*` - Título, subtítulo, severidades, tempos, notas
- `team.*` - Título, subtítulo, 8 roles, nota
- `header.*` - Tagline, whatsapp
- `footer.*` - Termos, SLA, Hypercare, Melhorias, Confidencialidade, Copyright

---

## 🛠️ Como Aplicar as Traduções

### 1. SLA.tsx

```tsx
// No topo do arquivo, adicionar:
import { useTranslation } from 'react-i18next'

// Dentro do componente:
export default function SLA() {
  const { t } = useTranslation()

  const slaData = [
    {
      severidade: t('sla.critical'),
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      atendimento: t('sla.criticalTime'),
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      severidade: t('sla.high'),
      icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
      atendimento: t('sla.highTime'),
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      severidade: t('sla.medium'),
      icon: <Clock className="w-5 h-5 text-yellow-500" />,
      atendimento: t('sla.mediumTime'),
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      severidade: t('sla.low'),
      icon: <Zap className="w-5 h-5 text-green-500" />,
      atendimento: t('sla.lowTime'),
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ]

  return (
    <section id="sla" className="py-16 bg-white">
      {/* ... */}
      <h2>{t('sla.title')}</h2>
      <p>{t('sla.subtitle')}</p>
      
      {/* Tabela */}
      <th>{t('sla.severity')}</th>
      <th>{t('sla.response')}</th>
      
      {/* Notas */}
      <p><strong>{t('sla.notes')}</strong></p>
      <li>{t('sla.note1')}</li>
      <li>{t('sla.note2')}</li>
      <li>{t('sla.note3')}</li>
    </section>
  )
}
```

### 2. TimeTecnico.tsx

```tsx
import { useTranslation } from 'react-i18next'

export default function TimeTecnico() {
  const { t } = useTranslation()

  const timeRoles = [
    {
      icon: <UserCheck className="w-6 h-6 text-blue-500" />,
      role: t('team.role1.title'),
      description: t('team.role1.description')
    },
    {
      icon: <User className="w-6 h-6 text-green-500" />,
      role: t('team.role2.title'),
      description: t('team.role2.description')
    },
    // ... repetir para role3 até role8
  ]

  return (
    <section id="time" className="py-16 bg-gray-50">
      <h2>{t('team.title')}</h2>
      <p>{t('team.subtitle')}</p>
      
      {/* Cards com timeRoles.map */}
      
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <p><strong>Nota:</strong> {t('team.note')}</p>
      </div>
    </section>
  )
}
```

### 3. Header.tsx

```tsx
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="bg-gradient-to-tr from-[#121EA8] to-[#BD31F5] text-white py-4 shadow-md">
      {/* ... */}
      <h1>{t('header.tagline')}</h1>
      
      <a href="https://wa.me/...">
        {t('header.whatsapp')}
      </a>
    </header>
  )
}
```

### 4. Footer.tsx

```tsx
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
      <h3>{t('footer.termsTitle')}</h3>
      
      {/* Termos */}
      <h4>{t('footer.slaTitle')}</h4>
      <p>{t('footer.slaDescription')}</p>
      
      <h4>{t('footer.hypercareTitle')}</h4>
      <p>{t('footer.hypercareDescription')}</p>
      
      <h4>{t('footer.improvementsTitle')}</h4>
      <p>{t('footer.improvementsDescription')}</p>
      
      {/* Confidencialidade */}
      <h3>{t('footer.confidentialityTitle')}</h3>
      <p>{t('footer.confidentialityText')}</p>
      
      {/* Copyright */}
      <h4>{t('footer.companyName')}</h4>
      <p>{t('footer.companyTagline')}</p>
      <p>{t('footer.copyright')}</p>
      <p>{t('footer.location')}</p>
    </footer>
  )
}
```

---

## 🚀 Teste Final

Após aplicar as traduções:

```bash
npm run dev
```

Acesse http://localhost:5173 e:
1. Clique no seletor de idioma (🌐)
2. Teste PT-BR, EN e ES
3. Verifique TODAS as seções

---

## ✅ Checklist Final

- [ ] SLA traduzido
- [ ] TimeTecnico traduzido
- [ ] Header traduzido
- [ ] Footer traduzido
- [ ] Testado em PT-BR
- [ ] Testado em EN
- [ ] Testado em ES
- [ ] Sem erros no console
- [ ] Layout preservado em todos os idiomas

---

**Quando concluir, o site estará 100% trilíngue em TODAS as seções! 🎉**
