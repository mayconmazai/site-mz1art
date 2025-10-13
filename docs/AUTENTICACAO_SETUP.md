# Configuração do Sistema de Autenticação

Este documento descreve como configurar e usar o sistema de autenticação implementado no site MZ1 ART.

## 📋 Visão Geral

O sistema de autenticação foi implementado com:
- **Supabase** para backend de autenticação
- **React Router DOM** para gerenciamento de rotas
- **Context API** para gerenciamento de estado de autenticação
- Suporte completo a **i18n** (PT-BR, EN, ES)

## 🚀 Instalação

### 1. Instalar Dependências

Execute o comando abaixo para instalar as dependências necessárias:

```bash
npm install @supabase/supabase-js react-router-dom
```

Ou com yarn:

```bash
yarn add @supabase/supabase-js react-router-dom
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (use `.env.example` como referência):

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Como obter as credenciais do Supabase:**

1. Acesse [supabase.com](https://supabase.com) e faça login
2. Crie um novo projeto ou selecione um existente
3. Vá em **Settings** > **API**
4. Copie a **Project URL** e a **anon/public key**

### 3. Configurar Supabase

No painel do Supabase, configure:

#### Authentication Settings

1. Vá em **Authentication** > **Settings**
2. Configure **Site URL**: `http://localhost:5173` (desenvolvimento) ou sua URL de produção
3. Configure **Redirect URLs**: 
   - `http://localhost:5173/reset-password`
   - `https://seu-dominio.com/reset-password`

#### Email Templates (Opcional)

Personalize os templates de email em **Authentication** > **Email Templates**:
- **Reset Password**: Email enviado quando o usuário solicita recuperação de senha

## 📁 Estrutura de Arquivos Criados

```
src/
├── lib/
│   └── supabase.ts                    # Cliente Supabase configurado
├── contexts/
│   └── AuthContext.tsx                # Context de autenticação
├── components/
│   └── auth/
│       └── ProtectedRoute.tsx         # Componente para rotas protegidas
├── pages/
│   ├── Login.tsx                      # Página de login
│   ├── ForgotPassword.tsx             # Página de recuperação de senha
│   └── Dashboard.tsx                  # Área do cliente (protegida)
└── i18n/locales/
    ├── pt-BR.json                     # Traduções em português
    ├── en.json                        # Traduções em inglês
    └── es.json                        # Traduções em espanhol
```

## 🔐 Funcionalidades Implementadas

### 1. Login de Usuário
- Página: `/login`
- Validação de email e senha
- Mensagens de erro traduzidas
- Redirecionamento automático para dashboard após login

### 2. Recuperação de Senha
- Página: `/forgot-password`
- Envio de email com link de recuperação
- Feedback visual de sucesso/erro

### 3. Dashboard (Área do Cliente)
- Página: `/dashboard` (protegida)
- Acessível apenas para usuários autenticados
- Exibe informações do usuário
- Botão de logout

### 4. Botão de Login na Navegação
- Exibe "Login" quando usuário não está autenticado
- Exibe "Dashboard" quando usuário está autenticado
- Responsivo (oculta texto em telas pequenas)

## 👥 Gerenciamento de Usuários

### Criar Usuários via Painel Administrativo

Como os usuários serão cadastrados via painel administrativo (não há registro público):

1. Acesse o painel do Supabase
2. Vá em **Authentication** > **Users**
3. Clique em **Add user** > **Create new user**
4. Preencha:
   - **Email**: email do usuário
   - **Password**: senha temporária
   - **Auto Confirm User**: ✅ (marque esta opção)
5. Clique em **Create user**

**Importante:** Envie as credenciais para o usuário de forma segura.

### Gerenciar Usuários

No painel do Supabase você pode:
- Ver todos os usuários cadastrados
- Editar informações de usuários
- Desabilitar/habilitar contas
- Resetar senhas manualmente
- Ver logs de autenticação

## 🔄 Fluxo de Autenticação

```
1. Usuário acessa /login
2. Insere email e senha
3. Sistema valida com Supabase
4. Se válido: redireciona para /dashboard
5. Se inválido: exibe mensagem de erro
```

### Fluxo de Recuperação de Senha

```
1. Usuário acessa /forgot-password
2. Insere email cadastrado
3. Supabase envia email com link de recuperação
4. Usuário clica no link e define nova senha
5. Usuário faz login com nova senha
```

## 🌐 Rotas Disponíveis

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | Pública | Página inicial (landing page) |
| `/login` | Pública | Página de login |
| `/forgot-password` | Pública | Recuperação de senha |
| `/dashboard` | Protegida | Área do cliente |

## 🎨 Personalização

### Adicionar Novos Campos ao Dashboard

Edite `/src/pages/Dashboard.tsx` para adicionar funcionalidades:

```tsx
// Exemplo: adicionar seção de projetos
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
  <h3 className="text-lg font-semibold mb-4">Meus Projetos</h3>
  {/* Seu conteúdo aqui */}
</div>
```

### Adicionar Novas Traduções

Edite os arquivos em `/src/i18n/locales/`:

```json
// pt-BR.json
"auth": {
  "newKey": "Novo texto em português"
}
```

Use no componente:
```tsx
const { t } = useTranslation()
<p>{t('auth.newKey')}</p>
```

## 🧪 Testando

### Teste Local

1. Execute o projeto:
```bash
npm run dev
```

2. Acesse `http://localhost:5173`
3. Clique no botão "Login" no header
4. Use as credenciais de um usuário criado no Supabase

### Teste de Recuperação de Senha

1. Acesse `/forgot-password`
2. Insira um email válido
3. Verifique a caixa de entrada do email
4. Clique no link recebido

## 🔒 Segurança

### Boas Práticas Implementadas

✅ Senhas nunca são armazenadas no frontend  
✅ Tokens de sessão gerenciados automaticamente pelo Supabase  
✅ Rotas protegidas com `ProtectedRoute`  
✅ Validação de email no frontend  
✅ HTTPS obrigatório em produção  
✅ Variáveis de ambiente para credenciais  

### Recomendações Adicionais

- Configure **Row Level Security (RLS)** no Supabase para proteger dados
- Habilite **Email Confirmation** se necessário
- Configure **MFA (Multi-Factor Authentication)** para usuários admin
- Monitore logs de autenticação regularmente

## 🐛 Troubleshooting

### Erro: "Missing Supabase environment variables"

**Solução:** Verifique se o arquivo `.env` existe e contém as variáveis corretas.

### Erro: "Invalid login credentials"

**Soluções:**
1. Verifique se o usuário foi criado no Supabase
2. Confirme que a opção "Auto Confirm User" foi marcada
3. Verifique se o email e senha estão corretos

### Usuário não consegue fazer login

**Soluções:**
1. Verifique se o usuário está ativo no painel do Supabase
2. Confirme que o email foi confirmado
3. Verifique os logs de autenticação no Supabase

### Email de recuperação não chega

**Soluções:**
1. Verifique a pasta de spam
2. Confirme que o email está configurado no Supabase
3. Verifique os logs de email no painel do Supabase

## 📚 Recursos Adicionais

- [Documentação do Supabase Auth](https://supabase.com/docs/guides/auth)
- [React Router DOM](https://reactrouter.com/)
- [React Context API](https://react.dev/reference/react/useContext)

## 🎯 Próximos Passos

Funcionalidades que podem ser adicionadas:

- [ ] Perfil de usuário editável
- [ ] Upload de avatar
- [ ] Histórico de projetos
- [ ] Sistema de tickets de suporte
- [ ] Notificações em tempo real
- [ ] Painel administrativo
- [ ] Relatórios e analytics
- [ ] Integração com pagamentos

## 📞 Suporte

Para dúvidas ou problemas, entre em contato:
- Email: maycon.mazai@mz1art.com
- WhatsApp: +55 41 99137-4732
