import { motion } from 'motion/react'
import { Shield, FileText, Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 dark:from-gray-900 dark:to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Termos e Definições */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">
              {t('footer.termsTitle')}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-3 bg-blue-600 rounded-lg mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">{t('footer.slaTitle')}</h4>
                <p className="text-sm text-gray-300">
                  {t('footer.slaDescription')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-3 bg-green-600 rounded-lg mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">{t('footer.hypercareTitle')}</h4>
                <p className="text-sm text-gray-300">
                  {t('footer.hypercareDescription')}
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-3 bg-purple-600 rounded-lg mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">{t('footer.improvementsTitle')}</h4>
                <p className="text-sm text-gray-300">
                  {t('footer.improvementsDescription')}
                </p>
              </div>
            </div>
          </div>

          {/* Confidencialidade */}
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-center text-purple-300">
              {t('footer.confidentialityTitle')}
            </h3>
            <p className="text-sm text-gray-300 dark:text-gray-400 leading-relaxed text-center">
              {t('footer.confidentialityText')}
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-purple-700 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-purple-300">{t('footer.companyName')}</h4>
                <p className="text-sm text-gray-400">
                  {t('footer.companyTagline')}
                </p>
              </div>
              
              <div className="text-center md:text-right text-sm text-gray-400">
                <p>{t('footer.copyright')}</p>
                <p>{t('footer.location')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}