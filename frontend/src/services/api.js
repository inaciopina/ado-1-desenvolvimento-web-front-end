import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export const getTurmas = () => api.get('/turma');
export const createTurma = (turma) => api.post('/turma', turma);
export const updateTurma = (id, turma) => api.put(`/turma/${id}`, turma);
export const deleteTurma = (id) => api.delete(`/turma/${id}`);
export const findByAno = (ano) => api.get(`/turma/busca/ano?ano=${ano}`);
export const findByAnoAndCurso = (ano, curso) => api.get(`/turma/${ano}/cursor?curso=${curso}`);