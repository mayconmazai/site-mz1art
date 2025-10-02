import { motion } from 'motion/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Apresentacao() {
  const { t } = useTranslation()
  
  return (
    <section
      id="apresentacao"
      className="relative pt-36 pb-32 md:pt-48 md:pb-44 scroll-mt-28 md:scroll-mt-36 bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/hero-bg.svg')" }}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-white/10 to-white/60 dark:from-gray-900/40 dark:via-gray-900/10 dark:to-gray-900/60" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center pt-24 md:pt-32"
        >
          {/* Spacer anti-colapso para garantir distância do navbar */}
          <div className="h-8 md:h-4" />
          {/* Headline principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight px-4">
            <span className="text-gray-900 dark:text-white">{t('hero.title1')} </span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">{t('hero.title3')}</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t('hero.title4')}
            </span>
          </h1>

          {/* Subheadline com proposta de valor */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.subtitle')}
            <span className="font-semibold text-gray-900 dark:text-white">{t('hero.subtitleBold')}</span>
            {t('hero.subtitleEnd')}
          </p>

          {/* Social proof rápido */}
          <div className="flex flex-wrap justify-center gap-8 mb-24 md:mb-32 text-sm text-gray-600 dark:text-gray-400 px-4">
            <div className="flex items-center gap-2.5">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{t('hero.proof1')}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{t('hero.proof2')}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{t('hero.proof3')}</span>
            </div>
          </div>
          {/* Spacer forte para separar da próxima seção */}
          <div className="h-8 md:h-16" />
        </motion.div>
      </div>
    </section>
  )
}