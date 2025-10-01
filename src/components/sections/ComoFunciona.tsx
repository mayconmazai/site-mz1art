import { motion } from 'motion/react'
import { MessageSquare, FileCheck, Rocket, HeadphonesIcon } from 'lucide-react'
import React from 'react'

const passos = [
  {
    numero: "01",
    icon: <MessageSquare className="w-8 h-8" />,
    titulo: "Diagnóstico Gratuito",
    descricao: "Conversa de 30 minutos para entender seus desafios e objetivos",
    tempo: "30 minutos",
    cor: "from-purple-50 to-indigo-50"
  },
  {
    numero: "02",
    icon: <FileCheck className="w-8 h-8" />,
    titulo: "Proposta Personalizada",
    descricao: "Receba um plano detalhado com escopo, prazos e investimento",
    tempo: "48 horas",
    cor: "from-purple-50 to-indigo-50"
  },
  {
    numero: "03",
    icon: <Rocket className="w-8 h-8" />,
    titulo: "Implementação Rápida",
    descricao: "Começamos a trabalhar imediatamente, com entregas semanais",
    tempo: "A partir de 7 dias",
    cor: "from-purple-50 to-indigo-50"
  },
  {
    numero: "04",
    icon: <HeadphonesIcon className="w-8 h-8" />,
    titulo: "Suporte Contínuo",
    descricao: "Acompanhamento 24/7 para garantir que tudo funcione perfeitamente",
    tempo: "Sempre disponível",
    cor: "from-purple-50 to-indigo-50"
  }
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="pt-[120px] pb-20 md:pt-[152px] md:pb-24 bg-white scroll-mt-28 md:scroll-mt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          {/* Spacer anti-colapso para garantir distância do navbar */}
          <div className="h-8 md:h-4" />
          <div className="h-16 md:h-8 text-center mb-[88px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Como Funciona?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12 md:mb-16">
              Um processo simples e transparente, do primeiro contato até o sucesso do seu projeto
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {passos.map((passo, index) => (
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
                  <div className="text-purple-600 flex-shrink-0 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    {passo.icon}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">
                      Passo {passo.numero}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {passo.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {passo.descricao}
                    </p>
                  </div>
                  
                  {/* Tempo destacado */}
                  <div className="mt-auto pt-5 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm font-medium text-gray-900">
                        {passo.tempo}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg"
          >
            <p className="text-xl font-medium mb-4">
              Pronto para começar sua transformação digital?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#comercial"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Agendar Diagnóstico Gratuito
              </a>
              <a
                href="https://wa.me/5541991374732?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20MZ1%20ART."
                className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat no WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
