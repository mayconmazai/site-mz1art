import { motion } from 'motion/react'
import { User, UserCheck, Code, Database, Shield, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function TimeTecnico() {
  const { t } = useTranslation()

  const timeRoles = [
    {
      icon: <UserCheck className="w-6 h-6 text-blue-500" />,
      role: t('team.role1.title'),
      description: t('team.role1.description')
    },
    {
      icon: <User className="w-6 h-6 text-green-500" />,
      role: t('team.role2.title'),
      description: t('team.role2.description')
    },
    {
      icon: <Code className="w-6 h-6 text-purple-500" />,
      role: t('team.role3.title'),
      description: t('team.role3.description')
    },
    {
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      role: t('team.role4.title'),
      description: t('team.role4.description')
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      role: t('team.role5.title'),
      description: t('team.role5.description')
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      role: t('team.role6.title'),
      description: t('team.role6.description')
    },
    {
      icon: <Settings className="w-6 h-6 text-gray-500" />,
      role: t('team.role7.title'),
      description: t('team.role7.description')
    },
    {
      icon: <User className="w-6 h-6 text-teal-500" />,
      role: t('team.role8.title'),
      description: t('team.role8.description')
    }
  ]
  return (
    <section id="time" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('team.title')}
          </h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {timeRoles.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="inline-flex p-3 bg-gray-100 rounded-full mb-4">
                    {member.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {member.role}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <p className="text-center text-gray-700">
              <strong>{t('common.note')}:</strong> {t('team.note')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}