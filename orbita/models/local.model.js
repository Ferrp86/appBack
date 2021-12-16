const { executeQuery, executeQueryOne } = require('../utils');

const createLocal = ({ nombre_local, direccion_local, ciudad_local, descripcion, usuario_local, password }) => {
    return executeQuery('insert into locales (nombre_local, direccion_local, ciudad_local, descripcion,usuario_local, password) values (?,?,?,?,?,?)', [nombre_local, direccion_local, ciudad_local, descripcion, usuario_local, password]);
}

const getLocal = ({ usuario_local, password }) => {
    return executeQueryOne('select * from locales where usuario_local = ? and password = ?', [usuario_local, password]);
}

module.exports = { createLocal, getLocal }