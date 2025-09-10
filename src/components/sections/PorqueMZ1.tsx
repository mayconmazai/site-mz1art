import { motion } from "motion/react";
import { Heart, Wifi, Globe, Lightbulb } from "lucide-react";
const razoes = [
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Foco na Saúde Financeira e Operacional",
    description:
      "Soluções estratégicas que impulsionam o sucesso sustentável do seu negócio com resultados concretos.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-blue-500" />,
    title: "Suporte Remoto Comprovado",
    description:
      "Atendimento remoto eficiente e de alta qualidade, consolidado desde 2020.",
  },
  {
    icon: <Globe className="w-8 h-8 text-green-500" />,
    title: "Expertise Global",
    description:
      "Capacidade comprovada em projetos internacionais com comunicação fluida em múltiplos idiomas.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Inovação e Aprendizado Contínuo",
    description:
      "Adotamos as mais recentes tecnologias e práticas do mercado para manter sua empresa à frente.",
  },
];
export default function PorqueMZ1() {
  return (
    <section id="porque-mz1" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Por que a MZ1?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {razoes.map((razao, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-lg hover:shadow-lg transition-all border border-purple-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-sm">
                    {razao.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {razao.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {razao.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg"
          >
            <p className="text-xl font-medium mb-4">
              Entre em contato e vamos construir juntos o futuro
              da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:maycon@mz1art.com"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Enviar E-mail
              </a>
              <a
                href="https://wa.me/5541991374732?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20MZ1%20ART."
                className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat no WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}