import { motion } from 'motion/react'
import { CheckCircle, Zap, TrendingUp, Target, Award, Clock } from 'lucide-react'

const diferenciais = [
  {
    icon: <Award className="w-6 h-6 text-purple-500" />,
    title: "15+ Anos de Experiência",
    description: "Mais de 15 anos de experiência global em sustentação e desenvolvimento de sistemas complexos"
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    title: "Cultura de Inovação",
    description: "Sempre atentos às últimas tendências tecnológicas e aprendizado contínuo"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: "Soluções Escaláveis",
    description: "Desenvolvemos aplicações web e móveis que potencializam empresas e resultados"
  },
  {
    icon: <Target className="w-6 h-6 text-cyan-500" />,
    title: "Foco no Cliente",
    description: "Priorizamos a saúde financeira e operacional do cliente em cada projeto"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    title: "Entrega Garantida",
    description: "Comprometimento com prazos e qualidade em todas as entregas"
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-500" />,
    title: "Suporte Remoto Eficiente",
    description: "Atendimento remoto comprovado desde 2020 com experiência internacional"
  }
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Diferenciais Competitivos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg hover:shadow-lg transition-all border border-purple-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
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