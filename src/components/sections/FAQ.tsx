import { motion } from 'motion/react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const faqs = [
  {
    pergunta: "Quanto custa para começar?",
    resposta: "Nossos projetos começam a partir de R$ 750,00 para soluções básicas. O investimento final depende do escopo, complexidade e prazos. Oferecemos diagnóstico gratuito para entender suas necessidades e criar uma proposta personalizada com ROI claro."
  },
  {
    pergunta: "Quanto tempo leva para ver resultados?",
    resposta: "Projetos simples podem estar no ar em 7-15 dias. Projetos mais complexos levam de 1 a 3 meses. Trabalhamos com entregas semanais (sprints), então você vê progresso constante e pode ajustar o rumo a qualquer momento."
  },
  {
    pergunta: "Vocês atendem empresas de qual tamanho?",
    resposta: "Atendemos desde startups e pequenos negócios até empresas consolidadas. Nossa abordagem se adapta ao seu momento: se você está começando, focamos em MVP e validação. Se já está crescendo, focamos em escala e automação."
  },
  {
    pergunta: "E se eu não gostar do resultado?",
    resposta: "Trabalhamos com entregas semanais e validação constante. Se em qualquer momento você não estiver satisfeito, pausamos, ajustamos e só continuamos quando você aprovar. Além disso, oferecemos garantia de 30 dias em todos os projetos."
  },
  {
    pergunta: "Vocês fazem manutenção depois que o projeto termina?",
    resposta: "Sim! Oferecemos planos de suporte e manutenção 24/7. Cuidamos de bugs, atualizações, segurança, backups e melhorias contínuas. Você pode escolher entre planos mensais ou contratos anuais com desconto."
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta: "Aceitamos parcelamento em até 12x no cartão ou boleto. Para projetos maiores, trabalhamos com marcos de entrega: você paga conforme recebe e aprova cada etapa. Também oferecemos planos mensais recorrentes para suporte contínuo."
  },
  {
    pergunta: "Vocês trabalham presencialmente ou remoto?",
    resposta: "Trabalhamos 100% remoto desde 2020, com experiência comprovada em projetos internacionais. Isso nos permite atender clientes em todo Brasil e exterior, com custos menores e agilidade maior. Reuniões são por videochamada em horários flexíveis."
  },
  {
    pergunta: "Meu setor é muito específico, vocês entendem do meu negócio?",
    resposta: "Já atendemos clientes de diversos setores: e-commerce, saúde, educação, logística, finanças e mais. Nossa metodologia começa com imersão profunda no seu negócio. Fazemos as perguntas certas e aprendemos rápido para entregar soluções que realmente funcionam."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
              Perguntas Frequentes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Tudo o que você precisa saber antes de começar
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
              Ainda tem dúvidas? Fale com a gente! Respondemos em até 2 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:maycon.mazai@mz1art.com"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Enviar E-mail
              </a>
              <a
                href="https://wa.me/5541991374732?text=Ol%C3%A1%21%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os%20da%20MZ1%20ART."
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
  )
}
