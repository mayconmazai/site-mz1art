import { motion } from 'motion/react'
import { Smartphone, Server, Database, Cloud, Bot, FileText, UserCog, Share2, Globe } from 'lucide-react'
import React from 'react'

const servicos = [
  {
    icon: <Smartphone className="w-8 h-8 text-purple-600" />,
    title: "Apps que Vendem Mais",
    subtitle: "Desenvolvimento de Aplicações",
    description: "Transforme suas ideias em apps e sistemas web que seus clientes adoram usar. Entregamos no prazo, sem surpresas.",
    beneficio: "Aumente suas vendas e reduza custos operacionais"
  },
  {
    icon: <Bot className="w-8 h-8 text-green-600" />,
    title: "Automação Inteligente com IA",
    subtitle: "Inteligência Artificial",
    description: "Automatize tarefas repetitivas e ganhe insights poderosos com IA. Sua equipe foca no que realmente importa.",
    beneficio: "Economize até 40% do tempo da sua equipe"
  },
  {
    icon: <Share2 className="w-8 h-8 text-pink-600" />,
    title: "Marketing que Converte",
    subtitle: "Marketing Digital & Redes Sociais",
    description: "Do site institucional às campanhas nas redes sociais. Criamos conteúdo que atrai e converte clientes.",
    beneficio: "Mais leads qualificados para seu negócio"
  },
  {
    icon: <Server className="w-8 h-8 text-indigo-600" />,
    title: "Seu Sistema Sempre Online",
    subtitle: "Suporte & Manutenção 24/7",
    description: "Durma tranquilo. Cuidamos de tudo: bugs, atualizações, segurança e performance. Você nem percebe que estamos lá.",
    beneficio: "99.9% de disponibilidade garantida"
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-600" />,
    title: "Infraestrutura que Escala",
    subtitle: "Cloud & DevOps",
    description: "Sua infraestrutura cresce com seu negócio. Sem travamentos, sem lentidão, sem dor de cabeça.",
    beneficio: "Pague apenas pelo que usar, economize até 60%"
  },
  {
    icon: <UserCog className="w-8 h-8 text-red-600" />,
    title: "CTO Sob Demanda",
    subtitle: "CTO as a Service",
    description: "Tenha um líder de tecnologia experiente sem o custo de contratar um executivo. Decisões estratégicas, sem erro.",
    beneficio: "Economize R$ 30k+/mês vs contratar CLT"
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Dados Organizados e Seguros",
    subtitle: "Gestão de Banco de Dados",
    description: "Otimizamos seus dados para performance máxima. Consultas rápidas, backups automáticos, zero perda.",
    beneficio: "Consultas até 10x mais rápidas"
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-600" />,
    title: "Conquiste o Mercado Global",
    subtitle: "Expansão Internacional",
    description: "Levamos seu negócio para EUA e Canadá. Marketing localizado, comunicação fluente, leads qualificados.",
    beneficio: "Acesso a mercados 5x maiores"
  },
  {
    icon: <FileText className="w-8 h-8 text-orange-600" />,
    title: "Processos que Funcionam",
    subtitle: "Consultoria & Otimização",
    description: "Identificamos gargalos, criamos processos eficientes e documentamos tudo. Sua operação roda sozinha.",
    beneficio: "Reduza retrabalho em até 70%"
  }
]

export default function Servicos() {
  return (
    <section id="servicos" className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-28 md:scroll-mt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
          {/* Spacer anti-colapso para garantir distância do navbar */}
          <div className="h-8 md:h-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Como Cuidamos do Seu Negócio
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-14">
              Soluções completas para cada etapa da sua jornada digital
              <br />
              <br />
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="flex flex-col h-full">
                  {/* Ícone */}
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    {servico.icon}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">
                      {servico.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {servico.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {servico.description}
                    </p>
                  </div>
                  
                  {/* Benefício destacado */}
                  <div className="mt-auto pt-5 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-medium text-gray-900">
                        {servico.beneficio}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}