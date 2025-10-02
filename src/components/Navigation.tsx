import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import mz1FullLogo from 'figma:asset/4cea5d5db742e31f53138d858a7c1efaa3376a34.png'

export default function Navigation() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('apresentacao')

  const navItems = [
    { id: 'apresentacao', label: t('nav.home') },
    { id: 'como-funciona', label: t('nav.howItWorks') },
    { id: 'servicos', label: t('nav.services') },
    { id: 'porque-mz1', label: t('nav.whyUs') },
    { id: 'planos', label: t('nav.plans') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'comercial', label: t('nav.contact') },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element)

      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50" aria-label="Navegação principal">
      <div className="container mx-auto px-4">
        <div className="font-semibold flex items-center justify-between py-4">
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              aria-controls="navigation-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div 
            id="navigation-menu"
            className={`${
              isOpen ? 'block' : 'hidden'
            } lg:block absolute lg:relative top-full lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent border-b lg:border-b-0`}
          >
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-8 p-4 lg:p-0" role="list">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm transition-colors text-left lg:text-center ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  aria-label={`Navegar para seção ${item.label}`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  role="listitem"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}