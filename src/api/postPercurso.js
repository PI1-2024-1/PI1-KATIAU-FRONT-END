import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Substitua pela URL base da sua API
});

export const postPercurso = async () => {
  try {
    const response = await api.post('/percurso/iniciar'); // Substitua '/endpoint' pelo endpoint específico da sua API
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados da API:', error);
    throw error;
  }
};
