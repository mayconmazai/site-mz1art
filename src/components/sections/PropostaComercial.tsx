import { motion } from "motion/react";
import {
  DollarSign,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function PropostaComercial() {
  const { t } = useTranslation();

  return (
    <section id="comercial" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg text-center"
          >
            <p className="text-lg mb-6 opacity-90">
              {t('contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:maycon.mazai@mz1art.com"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {t('common.sendEmail')}
              </a>
              <a
                href="https://wa.me/5541991374732?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20MZ1%20ART."
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
  );
}