# 🚀 Instalação Rápida - Sistema de Autenticação

## ⚡ Passos Rápidos

### 1. Instalar Dependências

```bash
npm install @supabase/supabase-js react-router-dom
```

### 2. Configurar Variáveis de Ambiente

Crie o arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Configurar Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie um projeto
3. Vá em **Settings** > **API**
4. Copie **Project URL** e **anon key** para o `.env`
5. Em **Authentication** > **Settings**:
   - **Site URL**: `http://localhost:5173`
   - **Redirect URLs**: `http://localhost:5173/reset-password`

### 4. Criar Primeiro Usuário

No painel do Supabase:
1. **Authentication** > **Users** > **Add user**
2. Preencha email e senha
3. ✅ Marque **Auto Confirm User**
4. Clique em **Create user**

### 5. Testar

```bash
npm run dev
```

Acesse `http://localhost:5173` e clique em **Login** no header.

## 📋 Rotas Disponíveis

- `/` - Página inicial
- `/login` - Login
- `/forgot-password` - Recuperar senha
- `/dashboard` - Área do cliente (protegida)

## 📖 Documentação Completa

Veja `docs/AUTENTICACAO_SETUP.md` para documentação detalhada.

## ✅ Checklist

- [ ] Dependências instaladas
- [ ] Arquivo `.env` criado
- [ ] Projeto Supabase configurado
- [ ] Primeiro usuário criado
- [ ] Testado login com sucesso

## 🎯 Funcionalidades

✅ Login de usuários  
✅ Recuperação de senha  
✅ Dashboard protegido  
✅ Botão de login no header  
✅ Suporte a 3 idiomas (PT, EN, ES)  
✅ Modo escuro  
✅ Responsivo  

## 📞 Suporte

Dúvidas? maycon.mazai@mz1art.com
