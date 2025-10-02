import { motion } from 'motion/react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      pergunta: t('faq.q1.question'),
      resposta: t('faq.q1.answer')
    },
    {
      pergunta: t('faq.q2.question'),
      resposta: t('faq.q2.answer')
    },
    {
      pergunta: t('faq.q3.question'),
      resposta: t('faq.q3.answer')
    }
  ]

  return (
    <section id="faq" className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t('faq.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('faq.subtitle')}
              <br />
              <br />
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden hover:border-indigo-200 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8 text-lg">
                    {faq.pergunta}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 pr-6 sm:pr-12 text-gray-600 leading-relaxed text-base">
                    {faq.resposta}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg"
          >
            <p className="text-xl font-medium mb-4">
              {t('faq.ctaTitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:maycon.mazai@mz1art.com"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {t('common.sendEmail')}
              </a>
              <a
                href="https://wa.me/5541991374732?text=Ol%C3%A1%21%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os%20da%20MZ1%20ART."
                className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common.whatsappChat')}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
