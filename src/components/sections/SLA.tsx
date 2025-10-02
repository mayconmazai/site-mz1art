import { motion } from 'motion/react'
import { AlertTriangle, Clock, Zap, AlertCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('sla.title')}
          </h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              {t('sla.subtitle')}
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      {t('sla.severity')}
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">
                      {t('sla.response')}
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
                <strong>{t('sla.notes')}</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>{t('sla.note1')}</li>
                <li>{t('sla.note2')}</li>
                <li>{t('sla.note3')}</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}