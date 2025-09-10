import { motion } from 'motion/react'
import { Shield, Zap, Crown } from 'lucide-react'

const planos = [
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    name: "Básico",
    description: "Ideal para pequenas aplicações com baixo volume de transações",
    features: [
      "Monitoramento básico 8x5",
      "Suporte via ticket",
      "Atualizações mensais",
      "Backup semanal",
      "SLA de 3 dias úteis"
    ]
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    name: "Avançado",
    description: "Para aplicações de médio porte com necessidades específicas",
    features: [
      "Monitoramento 24x7",
      "Suporte via chat e telefone",
      "Atualizações semanais",
      "Backup diário",
      "SLA de 2 dias úteis",
      "Relatórios gerenciais"
    ]
  },
  {
    icon: <Crown className="w-8 h-8 text-purple-500" />,
    name: "Premium",
    description: "Solução completa para aplicações críticas e de alto volume",
    features: [
      "Monitoramento proativo 24x7",
      "Suporte dedicado",
      "Atualizações sob demanda",
      "Backup contínuo",
      "SLA de 4 horas",
      "Análise preditiva",
      "Gestor dedicado"
    ]
  }
]

export default function Planos() {
  return (
    <section id="planos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Planos de Atendimento
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {planos.map((plano, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-500"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
                    {plano.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plano.name}
                  </h3>
                  <p className="text-gray-600">
                    {plano.description}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {plano.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}