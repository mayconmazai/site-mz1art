const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const API_HOST = 'api-cpf-gratis.p.rapidapi.com';

interface CpfData {
  cpf: string;
  nome: string;
  data_nascimento: string;
  situacao_cadastral: string;
  data_inscricao: string;
  digito_verificador: string;
  comprovante_emitido: string;
  comprovante_valido: boolean;
  nome_mae: string;
  endereco: {
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
  };
  ultima_atualizacao: string;
}

export const lookupCPF = async (cpf: string): Promise<CpfData> => {
  if (!API_KEY) {
    throw new Error('Chave da API não configurada. Verifique o arquivo .env');
  }

  const url = `https://${API_HOST}/?cpf=${cpf}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erro na resposta da API:', errorText);
      throw new Error('Não foi possível consultar o CPF. Verifique o número e tente novamente.');
    }

    const responseData = await response.json();
    
    // Verifica se a resposta contém um erro
    if (responseData.code !== 200) {
      throw new Error(responseData.message || 'Erro ao consultar CPF');
    }

    const data = responseData.data || {};
    
    // Mapeia os dados da resposta para o formato esperado
    return {
      cpf: data.cpf || '',
      nome: data.nome || 'Não informado',
      data_nascimento: data.data_nascimento || '',
      situacao_cadastral: 'Ativo', // Valor padrão já que a API não retorna
      data_inscricao: '', // Não há na resposta
      digito_verificador: data.cpf ? data.cpf.slice(-2) : '', // Pega os últimos 2 dígitos do CPF
      comprovante_emitido: 'Não', // Valor padrão
      comprovante_valido: true, // Valor padrão
      nome_mae: 'Não informado', // Valor padrão
      endereco: {
        logradouro: 'Não informado',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: ''
      },
      ultima_atualizacao: new Date().toISOString()
    };
  } catch (error) {
    console.error('Erro ao consultar CPF:', error);
    throw new Error('Não foi possível consultar o CPF. Tente novamente mais tarde.');
  }
};

export const formatCPF = (cpf: string): string => {
  // Remove todos os caracteres não numéricos
  const cleaned = cpf.replace(/\D/g, '');
  
  // Formata como 000.000.000-00
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};