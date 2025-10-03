import { motion } from 'motion/react'
import { Smartphone, Server, Database, Cloud, Bot, FileText, UserCog, Share2, Globe } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Servicos() {
  const { t } = useTranslation()

  const servicos = [
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: t('services.service1.title'),
      subtitle: t('services.service1.subtitle'),
      description: t('services.service1.description'),
      beneficio: t('services.service1.benefit')
    },
    {
      icon: <Bot className="w-8 h-8 text-green-600" />,
      title: t('services.service2.title'),
      subtitle: t('services.service2.subtitle'),
      description: t('services.service2.description'),
      beneficio: t('services.service2.benefit')
    },
    {
      icon: <Share2 className="w-8 h-8 text-pink-600" />,
      title: t('services.service3.title'),
      subtitle: t('services.service3.subtitle'),
      description: t('services.service3.description'),
      beneficio: t('services.service3.benefit')
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      title: t('services.service4.title'),
      subtitle: t('services.service4.subtitle'),
      description: t('services.service4.description'),
      beneficio: t('services.service4.benefit')
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-600" />,
      title: t('services.service5.title'),
      subtitle: t('services.service5.subtitle'),
      description: t('services.service5.description'),
      beneficio: t('services.service5.benefit')
    },
    {
      icon: <UserCog className="w-8 h-8 text-red-600" />,
      title: t('services.service6.title'),
      subtitle: t('services.service6.subtitle'),
      description: t('services.service6.description'),
      beneficio: t('services.service6.benefit')
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: t('services.service7.title'),
      subtitle: t('services.service7.subtitle'),
      description: t('services.service7.description'),
      beneficio: t('services.service7.benefit')
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: t('services.service8.title'),
      subtitle: t('services.service8.subtitle'),
      description: t('services.service8.description'),
      beneficio: t('services.service8.benefit')
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: t('services.service9.title'),
      subtitle: t('services.service9.subtitle'),
      beneficio: t('services.service9.benefit')
    }
  ]

  return (
    <section id="servicos" className="pt-[120px] pb-20 md:pt-[152px] md:pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-28 md:scroll-mt-36">
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
              {t('services.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-14">
              {t('services.subtitle')}
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
                transition={{ duration: 0, delay: index * 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group"
              >
                <div className="flex flex-col h-full">
                  {/* Ícone */}
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    {servico.icon}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-2">
                      {servico.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {servico.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {servico.description}
                    </p>
                  </div>
                  
                  {/* Benefício destacado */}
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-2">
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