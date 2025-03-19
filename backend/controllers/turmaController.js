const Turma = require('../models/turmaModel');

exports.createTurma = (req, res) => {
  const novaTurma = req.body;
  Turma.create(novaTurma, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: results.insertId, ...novaTurma });
  });
};

exports.getAllTurmas = (req, res) => {
  Turma.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
};

exports.updateTurma = (req, res) => {
  const id = req.params.id;
  const turmaAtualizada = req.body;
  Turma.update(id, turmaAtualizada, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id, ...turmaAtualizada });
  });
};

exports.deleteTurma = (req, res) => {
  const id = req.params.id;
  Turma.delete(id, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Turma deletada com sucesso' });
  });
};

exports.findByAno = (req, res) => {
  const ano = req.query.ano;
  Turma.findByAno(ano, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
};

exports.findByAnoAndCurso = (req, res) => {
  const ano = req.params.ano;
  const curso = req.query.curso;
  Turma.findByAnoAndCurso(ano, curso, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
};