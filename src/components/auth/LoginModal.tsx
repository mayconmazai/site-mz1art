import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useTranslation } from 'react-i18next'
import { Mail, Lock, AlertCircle } from 'lucide-react'
import { motion } from 'motion/react'

interface LoginModalProps {
  onClose: () => void
  onSwitchToForgotPassword: () => void
}

export default function LoginModal({ onClose, onSwitchToForgotPassword }: LoginModalProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError(t('auth.emailRequired'))
      return
    }

    if (!password) {
      setError(t('auth.passwordRequired'))
      return
    }

    setLoading(true)

    const { error } = await signIn(email, password)

    if (error) {
      setError(t('auth.invalidCredentials'))
      setLoading(false)
    } else {
      onClose()
      navigate('/dashboard')
    }
  }

  return (
    <div>
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img
          src="/header-logo.png"
          alt="MZ1 ART Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {t('auth.loginTitle')}
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {t('auth.loginSubtitle')}
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 p-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('auth.email')}
          </label>
          <div className="relative">
            <Mail className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
              placeholder="seu@email.com"
              disabled={loading}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t('auth.password')}
          </label>
          <div className="relative">
            <Lock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
              placeholder="••••••••"
              disabled={loading}
            />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onSwitchToForgotPassword}
            className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
          >
            {t('auth.forgotPassword')}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold text-sm hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {loading ? t('auth.loggingIn') : t('auth.loginButton')}
        </button>
      </form>
    </div>
  )
}
