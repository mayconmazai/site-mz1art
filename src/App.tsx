import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Apresentacao from './components/sections/Apresentacao'
import ComoFunciona from './components/sections/ComoFunciona'
import Servicos from './components/sections/Servicos'
import PorqueMZ1 from './components/sections/PorqueMZ1'
import Diferenciais from './components/sections/Diferenciais'
import Planos from './components/sections/Planos'
import FAQ from './components/sections/FAQ'
import SLA from './components/sections/SLA'
import TimeTecnico from './components/sections/TimeTecnico'
import PropostaComercial from './components/sections/PropostaComercial'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content - acessibilidade */}
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo principal
      </a>
      
      <Header />
      <Navigation />
      
      <main id="main-content" tabIndex={-1}>
        <Apresentacao />
        <ComoFunciona />
        <Servicos />
        <PorqueMZ1 />
        <Diferenciais />
        <Planos />
        <FAQ />
        <SLA />
        <TimeTecnico />
        <PropostaComercial />
      </main>
      
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}