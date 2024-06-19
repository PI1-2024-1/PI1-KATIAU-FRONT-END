import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Substitua pela URL base da sua API
});

export const getPercursoDetalhes = async (idPercurso) => {
  try {
    const response = await api.get(`/percurso/${idPercurso}/detalhes`); 
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados da API:', error);
    throw error;
  }
};

export const getPercursoDetalhesTelemetria = async (idPercurso, idTelemetria) => {
    try {
      const response = await api.get(`/percurso/${idPercurso}/detalhes`, {
        params: { idTelemetria } // Passando idTelemetria como query parameter
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os dados da API:', error);
      throw error;
    }
  };