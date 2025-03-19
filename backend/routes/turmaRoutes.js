const express = require('express');
const turmaController = require('../controllers/turmaController');

const router = express.Router();

router.post('/turma', turmaController.createTurma);
router.get('/turma', turmaController.getAllTurmas);
router.put('/turma/:id', turmaController.updateTurma);
router.delete('/turma/:id', turmaController.deleteTurma);
router.get('/turma/busca/ano', turmaController.findByAno);
router.get('/turma/:ano/cursor', turmaController.findByAnoAndCurso);

module.exports = router;