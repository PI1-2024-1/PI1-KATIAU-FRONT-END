import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Substitua pela URL base da sua API
});

export const getPercursos = async () => {
  try {
    const response = await api.get('/percurso/'); // Substitua '/endpoint' pelo endpoint específico da sua API
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados da API:', error);
    throw error;
  }
};
