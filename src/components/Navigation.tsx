import { useState, useEffect } from 'react'
import { Menu, X, LogIn, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from './auth/AuthModal'
import LoginModal from './auth/LoginModal'
import ForgotPasswordModal from './auth/ForgotPasswordModal'
import React from 'react'

export default function Navigation() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('apresentacao')
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)
  
  // Only show navigation on home page
  const isHomePage = location.pathname === '/'

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
          {isHomePage && (
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isOpen}
                aria-controls="navigation-menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          )}

          {isHomePage && (
            <div 
              id="navigation-menu"
              className={`${
                isOpen ? 'block' : 'hidden'
              } lg:block absolute lg:relative top-full lg:top-0 left-0 w-full lg:w-auto bg-white dark:bg-gray-900 lg:bg-transparent border-b lg:border-b-0`}
            >
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-8 p-4 lg:p-0" role="list">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm transition-colors text-left lg:text-center ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
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
          )}

          {/* Right side: Language Switcher and Login Button */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            
            {user ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-sm font-medium"
              >
                <User size={16} />
                <span className="hidden sm:inline">{t('auth.dashboard')}</span>
              </button>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-sm font-medium"
              >
                <span className="sm:hidden">Login</span>
                <LogIn size={16} className='login' />
                <span className="hidden sm:inline">{t('auth.login')}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <AuthModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onSwitchToForgotPassword={() => {
            setShowLoginModal(false)
            setShowForgotPasswordModal(true)
          }}
        />
      </AuthModal>

      {/* Forgot Password Modal */}
      <AuthModal isOpen={showForgotPasswordModal} onClose={() => setShowForgotPasswordModal(false)}>
        <ForgotPasswordModal
          onClose={() => setShowForgotPasswordModal(false)}
          onSwitchToLogin={() => {
            setShowForgotPasswordModal(false)
            setShowLoginModal(true)
          }}
        />
      </AuthModal>
    </nav>
  )
}