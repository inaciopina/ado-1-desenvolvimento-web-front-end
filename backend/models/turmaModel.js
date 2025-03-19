const db = require('../config/db');

class Turma {
  static create(turma, callback) {
    const query = 'INSERT INTO tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [turma.nm_turma, turma.ds_curso, turma.nr_ano_letivo, turma.qtd_capacidade, turma.bt_ativo], callback);
  }

  static getAll(callback) {
    db.query('SELECT * FROM tb_turma', callback);
  }

  static update(id, turma, callback) {
    const query = 'UPDATE tb_turma SET nm_turma = ?, ds_curso = ?, nr_ano_letivo = ?, qtd_capacidade = ?, bt_ativo = ? WHERE id_turma = ?';
    db.query(query, [turma.nm_turma, turma.ds_curso, turma.nr_ano_letivo, turma.qtd_capacidade, turma.bt_ativo, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM tb_turma WHERE id_turma = ?', [id], callback);
  }

  static findByAno(ano, callback) {
    db.query('SELECT * FROM tb_turma WHERE nr_ano_letivo = ?', [ano], callback);
  }

  static findByAnoAndCurso(ano, curso, callback) {
    db.query('SELECT * FROM tb_turma WHERE nr_ano_letivo = ? AND ds_curso = ?', [ano, curso], callback);
  }
}

module.exports = Turma;