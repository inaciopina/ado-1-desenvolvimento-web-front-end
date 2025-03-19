import React, { useState } from 'react';

const TurmaForm = ({ turma, onSave }) => {
  const [nomeTurma, setNomeTurma] = useState(turma ? turma.nm_turma : '');
  const [curso, setCurso] = useState(turma ? turma.ds_curso : '');
  const [anoLetivo, setAnoLetivo] = useState(turma ? turma.nr_ano_letivo : '');
  const [capacidade, setCapacidade] = useState(turma ? turma.qtd_capacidade : '');
  const [ativo, setAtivo] = useState(turma ? turma.bt_ativo : true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const turmaData = {
      nm_turma: nomeTurma,
      ds_curso: curso,
      nr_ano_letivo: parseInt(anoLetivo),
      qtd_capacidade: parseInt(capacidade),
      bt_ativo: ativo,
    };
    onSave(turmaData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da Turma"
        value={nomeTurma}
        onChange={(e) => setNomeTurma(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Curso"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Ano Letivo"
        value={anoLetivo}
        onChange={(e) => setAnoLetivo(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Capacidade"
        value={capacidade}
        onChange={(e) => setCapacidade(e.target.value)}
        required
      />
      <label>
        Ativo:
        <input
          type="checkbox"
          checked={ativo}
          onChange={(e) => setAtivo(e.target.checked)}
        />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default TurmaForm;