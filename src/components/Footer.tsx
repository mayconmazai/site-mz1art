import { motion } from 'motion/react'
import { Shield, FileText, Eye } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
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
              Termos e Definições
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-3 bg-blue-600 rounded-lg mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">SLA</h4>
                <p className="text-sm text-gray-300">
                  Service Level Agreement - Acordo que define os níveis de 
                  serviço esperados entre fornecedor e cliente.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-3 bg-green-600 rounded-lg mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Hypercare</h4>
                <p className="text-sm text-gray-300">
                  Período de suporte intensivo pós-implementação para 
                  garantir estabilidade e performance otimizadas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-3 bg-purple-600 rounded-lg mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Pequenas Melhorias</h4>
                <p className="text-sm text-gray-300">
                  Modificações de baixa complexidade que não alteram 
                  a arquitetura principal do sistema.
                </p>
              </div>
            </div>
          </div>

          {/* Confidencialidade */}
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-center text-purple-300">
              Confidencialidade
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed text-center">
              Todas as informações compartilhadas durante o desenvolvimento desta 
              proposta e execução dos serviços serão tratadas com absoluto sigilo. 
              A MZ1 ART se compromete a manter a confidencialidade de dados, 
              processos e informações estratégicas do cliente, conforme termo 
              de confidencialidade específico a ser firmado.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-purple-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-purple-300">MZ1 ART Soluções em Tecnologia</h4>
                <p className="text-sm text-gray-400">
                  Transformando ideias em soluções tecnológicas
                </p>
              </div>
              
              <div className="text-center md:text-right text-sm text-gray-400">
                <p>&copy; 2025 MZ1 ART. Todos os direitos reservados.</p>
                <p>Curitiba, PR - Brasil | Remoto</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}