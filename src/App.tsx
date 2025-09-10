import Header from './components/Header'
import Navigation from './components/Navigation'
import Apresentacao from './components/sections/Apresentacao'
import Servicos from './components/sections/Servicos'
import PorqueMZ1 from './components/sections/PorqueMZ1'
import Diferenciais from './components/sections/Diferenciais'
import Planos from './components/sections/Planos'
import SLA from './components/sections/SLA'
import TimeTecnico from './components/sections/TimeTecnico'
import PropostaComercial from './components/sections/PropostaComercial'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      
      <main>
        <Apresentacao />
        <Servicos />
        <PorqueMZ1 />
        <Diferenciais />
        <Planos />
        <SLA />
        <TimeTecnico />
        <PropostaComercial />
      </main>
      
      <Footer />
    </div>
  )
}