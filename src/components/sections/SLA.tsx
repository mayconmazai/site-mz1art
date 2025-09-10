import { motion } from 'motion/react'
import { AlertTriangle, Clock, Zap, AlertCircle } from 'lucide-react'

const slaData = [
  {
    severidade: "Crítica",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    atendimento: "até 4 horas",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    severidade: "Alta",
    icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
    atendimento: "até o próximo dia útil",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    severidade: "Média",
    icon: <Clock className="w-5 h-5 text-yellow-500" />,
    atendimento: "até 2 dias úteis",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    severidade: "Baixa",
    icon: <Zap className="w-5 h-5 text-green-500" />,
    atendimento: "até 3 dias úteis",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  }
]

export default function SLA() {
  return (
    <section id="sla" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SLA – Acordo de Nível de Serviço
          </h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Nossos tempos de resposta são estabelecidos com base na criticidade 
              do incidente, garantindo priorização adequada e resolução eficiente.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Severidade
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      Início do Atendimento
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {slaData.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-b border-gray-200 hover:bg-gray-100 transition-colors`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span className="font-medium text-gray-900">
                            {item.severidade}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-medium text-gray-700">
                          {item.atendimento}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p className="mb-2">
                <strong>Observações:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Os prazos são contabilizados em horário comercial (8h às 18h, segunda a sexta)</li>
                <li>Incidentes críticos possuem atendimento 24x7</li>
                <li>SLA é suspenso mediante indisponibilidade de recursos do cliente</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}