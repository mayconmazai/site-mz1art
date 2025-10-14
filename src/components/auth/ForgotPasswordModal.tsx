import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useTranslation } from 'react-i18next'
import { Mail, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react'
import { motion } from 'motion/react'

interface ForgotPasswordModalProps {
  onClose: () => void
  onSwitchToLogin: () => void
}

export default function ForgotPasswordModal({ onClose, onSwitchToLogin }: ForgotPasswordModalProps) {
  const { t } = useTranslation()
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!email) {
      setError(t('auth.emailRequired'))
      return
    }

    setLoading(true)

    const { error } = await resetPassword(email)

    setLoading(false)

    if (error) {
      setError(t('auth.errorOccurred'))
    } else {
      setSuccess(true)
    }
  }

  return (
    <div>
      <br />
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {t('auth.forgotPasswordTitle')}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t('auth.forgotPasswordSubtitle')}
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

      {/* Success Message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 p-2.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-2"
        >
          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-green-600 dark:text-green-400">
              {t('auth.emailSent')}
            </p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              {t('auth.checkInbox')}
            </p>
          </div>
        </motion.div>
      )}

      {/* Form */}
      {!success && (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="email"
              className="pl-2 block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {t('auth.email')}
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors pl-4"
              placeholder='mail@mail.com'
                disabled={loading}
              />
            </div>
          </div>
          <br />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 rounded-xl font-semibold text-sm hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {loading ? t('auth.sendingEmail') : t('auth.sendResetLink')}
          </button>
        </form>
      )}

      {/* Back to Login */}
      <div className="mt-3 text-center">
        <button
          onClick={onSwitchToLogin}
          className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          {t('auth.backToLogin')}
        </button>
      </div>
    </div>
  )
}
