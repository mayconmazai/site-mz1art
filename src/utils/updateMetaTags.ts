// Atualiza meta tags dinamicamente baseado no idioma
export const updateMetaTags = (language: string) => {
  const metaData = {
    'pt-BR': {
      title: 'MZ1 ART - Soluções Tecnológicas que Transformam Negócios',
      description: 'Transforme seu negócio com a MZ1 ART! Desenvolvimento de apps, automação, IA, marketing digital e suporte 24/7. Soluções tecnológicas escaláveis para impulsionar seu crescimento.',
      keywords: 'MZ1 ART, soluções tecnológicas, desenvolvimento de apps, automação, inteligência artificial, marketing digital, suporte técnico, CTO as a Service, desenvolvimento web, aplicativos móveis, cloud computing',
      ogTitle: 'MZ1 ART - Tecnologia que Impulsiona Resultados',
      ogDescription: 'Descubra como a MZ1 ART transforma negócios com tecnologia inovadora, automação inteligente e suporte 24/7.',
      locale: 'pt_BR',
      schemaDescription: 'Soluções tecnológicas escaláveis para transformar seu negócio com desenvolvimento de apps, automação e IA'
    },
    'en': {
      title: 'MZ1 ART - Technology Solutions That Transform Businesses',
      description: 'Transform your business with MZ1 ART! App development, automation, AI, digital marketing and 24/7 support. Scalable technology solutions to boost your growth.',
      keywords: 'MZ1 ART, technology solutions, app development, automation, artificial intelligence, digital marketing, technical support, CTO as a Service, web development, mobile apps, cloud computing',
      ogTitle: 'MZ1 ART - Technology That Drives Results',
      ogDescription: 'Discover how MZ1 ART transforms businesses with innovative technology, smart automation and 24/7 support.',
      locale: 'en_US',
      schemaDescription: 'Scalable technology solutions to transform your business with app development, automation and AI'
    },
    'es': {
      title: 'MZ1 ART - Soluciones Tecnológicas que Transforman Negocios',
      description: '¡Transforma tu negocio con MZ1 ART! Desarrollo de apps, automatización, IA, marketing digital y soporte 24/7. Soluciones tecnológicas escalables para impulsar tu crecimiento.',
      keywords: 'MZ1 ART, soluciones tecnológicas, desarrollo de apps, automatización, inteligencia artificial, marketing digital, soporte técnico, CTO as a Service, desarrollo web, aplicaciones móviles, cloud computing',
      ogTitle: 'MZ1 ART - Tecnología que Impulsa Resultados',
      ogDescription: 'Descubre cómo MZ1 ART transforma negocios con tecnología innovadora, automatización inteligente y soporte 24/7.',
      locale: 'es_ES',
      schemaDescription: 'Soluciones tecnológicas escalables para transformar tu negocio con desarrollo de apps, automatización e IA'
    }
  }

  const data = metaData[language as keyof typeof metaData] || metaData['pt-BR']

  // Atualizar title
  document.title = data.title

  // Atualizar meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', data.description)
  }

  // Atualizar meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]')
  if (metaKeywords) {
    metaKeywords.setAttribute('content', data.keywords)
  }

  // Atualizar lang do HTML
  document.documentElement.lang = language

  // Atualizar Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', data.ogTitle)
  }

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', data.ogDescription)
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) {
    ogLocale.setAttribute('content', data.locale)
  }

  // Atualizar Twitter
  const twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', data.ogTitle)
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]')
  if (twitterDescription) {
    twitterDescription.setAttribute('content', data.ogDescription)
  }

  // Atualizar Schema.org
  const schemaScript = document.querySelector('script[type="application/ld+json"]')
  if (schemaScript) {
    try {
      const schema = JSON.parse(schemaScript.textContent || '{}')
      schema.description = data.schemaDescription
      schema.contactPoint.availableLanguage = ['pt-BR', 'en', 'es']
      schemaScript.textContent = JSON.stringify(schema, null, 2)
    } catch (e) {
      console.error('Error updating schema:', e)
    }
  }
}
