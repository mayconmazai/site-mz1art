import { motion } from 'motion/react'
import { Smartphone, Server, Database, Cloud, Bot, FileText, UserCog, Share2, Globe } from 'lucide-react'

const servicos = [
  {
    icon: <Smartphone className="w-8 h-8 text-purple-600" />,
    title: "Desenvolvimento de Aplicações Personalizadas",
    description: "Criação de sistemas web e aplicativos móveis escaláveis, entregues no prazo com qualidade garantida."
  },
  {
    icon: <Server className="w-8 h-8 text-indigo-600" />,
    title: "Sustentação e Suporte",
    description: "Manutenção contínua para garantir operações confiáveis e disponibilidade total das aplicações."
  },
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Gestão de Banco de Dados",
    description: "Otimização e suporte especializado em PostgreSQL, assegurando integração e performance robustas."
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-600" />,
    title: "Gestão de Infraestrutura em Nuvem",
    description: "Administração de ambientes em Supabase, AWS e Heroku, priorizando segurança e alta performance."
  },
  {
    icon: <Bot className="w-8 h-8 text-green-600" />,
    title: "Automação e Inteligência Artificial",
    description: "Soluções de IA e automação de fluxos para aumentar produtividade e gerar insights estratégicos."
  },
  {
    icon: <FileText className="w-8 h-8 text-orange-600" />,
    title: "Consultoria Técnica e Documentação",
    description: "Liderança ágil com documentação robusta, métricas de qualidade e integração fluida."
  },
  {
    icon: <UserCog className="w-8 h-8 text-red-600" />,
    title: "CTO as a Service (CTOaaS)",
    description: "Liderança tecnológica estratégica, alinhando inovação e gestão técnica ao crescimento sustentável."
  },
  {
    icon: <Share2 className="w-8 h-8 text-pink-600" />,
    title: "Gestão de Marketing e Redes Sociais",
    description: "Criamos estratégias digitais, revitalizamos sites, produzimos conteúdo impactante e analisamos métricas para impulsionar sua marca."
  },
    {
    icon: <Globe className="w-8 h-8 text-pink-600" />,
    title: "Expansão Internacional",
    description: "Conectamos sua empresa ao mercado norte-americano, com estratégias digitais que fortalecem sua presença online, adaptam a comunicação e impulsionam leads qualificados nos EUA e Canadá."
  }
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full">
                    {servico.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {servico.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {servico.description}
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