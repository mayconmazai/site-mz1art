import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, AlertCircle, Search } from 'lucide-react';
import { lookupCPF, formatCPF } from '../../services/cpfService';

const CpfLookup: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<any>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cpf) return;
    
    setLoading(true);
    setError('');
    setResult(null);
    
    try {
      const data = await lookupCPF(cpf);
      setResult(data);
    } catch (err) {
      setError('Erro ao consultar CPF. Verifique o número e tente novamente.');
      console.error('Erro na consulta:', err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Não informado';
    try {
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? 'Data inválida' : date.toLocaleDateString('pt-BR');
    } catch (e) {
      return 'Data inválida';
    }
  };

  const formatAddress = (endereco: any) => {
    if (!endereco) return 'Endereço não disponível';
    
    const parts = [
      endereco.logradouro,
      endereco.numero ? `, ${endereco.numero}` : '',
      endereco.complemento ? `, ${endereco.complemento}` : '',
      endereco.bairro ? ` - ${endereco.bairro}` : '',
      endereco.cidade ? `, ${endereco.cidade}` : '',
      endereco.uf ? `/${endereco.uf}` : '',
      endereco.cep ? ` - CEP: ${endereco.cep}` : ''
    ].filter(Boolean);
    
    return parts.join('') || 'Endereço não disponível';
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Consulta de CPF
      </h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value.replace(/\D/g, ''))}
              placeholder="Digite o CPF (apenas números)"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              maxLength={11}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading || cpf.length !== 11}
            className={`px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              loading || cpf.length !== 11
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'

            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Consultando...
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                Consultar
              </>
            )}
          </button>
        </div>
        {cpf.length > 0 && cpf.length < 11 && (
          <p className="mt-2 text-sm text-red-500">O CPF deve ter 11 dígitos</p>
        )}
      </form>

      {error && (
        <div className="p-4 mb-6 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-start">
          <AlertCircle className="mr-2 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Dados do CPF: {formatCPF(result.cpf)}
            </h3>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {[
              { label: 'Nome', value: result.nome || 'Não informado' },
              { label: 'Nome da Mãe', value: result.nome_mae || 'Não informado' },
              { label: 'Data de Nascimento', value: formatDate(result.data_nascimento) },
              { label: 'Situação Cadastral', value: result.situacao_cadastral },
              { label: 'Data da Inscrição', value: formatDate(result.data_inscricao) },
              { label: 'Endereço', value: formatAddress(result.endereco) },
              { label: 'Última Atualização', value: formatDate(result.ultima_atualizacao) }
            ].map(({ label, value }) => (
              <div key={label} className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <span className="font-medium text-gray-700 dark:text-gray-300">{label}:</span>
                <div className="flex items-center">
                  <span className="text-gray-900 dark:text-white mr-2">{value}</span>
                  <button
                    onClick={() => copyToClipboard(value, label)}
                    className="p-1 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    title="Copiar"
                    disabled={!value}
                  >
                    {copied === label ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CpfLookup;