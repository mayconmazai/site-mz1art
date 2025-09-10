import { motion } from 'motion/react'
import { CheckCircle } from 'lucide-react'

const servicos = [
  "Monitoramento proativo de aplicações e infraestrutura",
  "Gestão e resolução de incidentes",
  "Análise de causa raiz e implementação de melhorias",
  "Atualizações de segurança e patches críticos",
  "Backup e recuperação de dados",
  "Otimização de performance e recursos",
  "Documentação técnica e operacional",
  "Relatórios gerenciais de disponibilidade",
  "Suporte técnico especializado",
  "Gestão de mudanças controladas"
]

export default function Sustentacao() {
  return (
    <section id="sustentacao" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Escopo da Sustentação
          </h2>
          
          <div className="mb-8">
            <p className="text-xl text-gray-700 text-center">
              <strong>Objetivo:</strong> Garantir a disponibilidade, performance e segurança 
              contínua das aplicações, proporcionando estabilidade operacional e evolução 
              tecnológica alinhada às necessidades do negócio.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Serviços Incluídos:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {servicos.map((servico, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{servico}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}