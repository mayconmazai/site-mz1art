import { motion } from 'motion/react'
import mz1FullLogo from 'figma:asset/4cea5d5db742e31f53138d858a7c1efaa3376a34.png'

export default function Apresentacao() {
  return (
    <section id="apresentacao" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8"
        >
          <div className="flex-1 text-left">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Soluções Tecnológicas para o Sucesso Escalável
            </h1>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Bem-vindo à <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">MZ1 ART</span>, seu parceiro estratégico em inovação tecnológica. 
                Com mais de 15 anos de experiência global, entregamos soluções web e aplicativos móveis que impulsionam empresas, 
                otimizam processos e geram resultados excepcionais.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}