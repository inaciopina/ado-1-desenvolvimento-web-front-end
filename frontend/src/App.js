import React, { useState, useEffect } from 'react';
import { getTurmas, createTurma, updateTurma, deleteTurma } from './services/api';
import TurmaForm from './components/TurmaForm';
import './styles.css';

const App = () => {
  const [turmas, setTurmas] = useState([]);
  const [editingTurma, setEditingTurma] = useState(null);

  useEffect(() => {
    loadTurmas();
  }, []);

  const loadTurmas = async () => {
    const response = await getTurmas();
    setTurmas(response.data);
  };

  const handleSave = async (turmaData) => {
    if (editingTurma) {
      await updateTurma(editingTurma.id_turma, turmaData);
    } else {
      await createTurma(turmaData);
    }
    setEditingTurma(null);
    loadTurmas();
  };

  const handleDelete = async (id) => {
    await deleteTurma(id);
    loadTurmas();
  };

  return (
    <div className="container">
      <h1>Gerenciamento de Turmas</h1>

      <TurmaForm turma={editingTurma} onSave={handleSave} />

      <h2>Lista de Turmas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>Ano Letivo</th>
            <th>Capacidade</th>
            <th>Ativo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {turmas.map((turma) => (
            <tr key={turma.id_turma}>
              <td>{turma.id_turma}</td>
              <td>{turma.nm_turma}</td>
              <td>{turma.ds_curso}</td>
              <td>{turma.nr_ano_letivo}</td>
              <td>{turma.qtd_capacidade}</td>
              <td>{turma.bt_ativo ? 'Sim' : 'Não'}</td>
              <td>
                <button onClick={() => setEditingTurma(turma)}>Editar</button>
                <button onClick={() => handleDelete(turma.id_turma)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;