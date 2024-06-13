import axios from 'axios';

const api = axios.create({
  baseURL: 'URL_BASE_DA_SUA_API', // Substitua pela URL base da sua API
});

export const getPercursos = async () => {
  try {
    const response = await api.get('/endpoint'); // Substitua '/endpoint' pelo endpoint específico da sua API
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados da API:', error);
    throw error;
  }
};
