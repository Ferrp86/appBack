const { executeQuery, executeQueryOne } = require('../utils');

const createUser = ({ nombre, primer_apellido, segundo_apellido, email, fecha_nacimiento, nombre_usuario, password }) => {
    return executeQuery('insert into usuarios (nombre, primer_apellido,segundo_apellido,email, fecha_nacimiento, nombre_usuario, password) values (?,?,?,?,?,?,?)', [nombre, primer_apellido, segundo_apellido, email, fecha_nacimiento, nombre_usuario, password]);
}

const getUser = ({ email, password }) => {
    return executeQueryOne('select * from usuarios where email = ? and password = ?', [email, password]);
}

module.exports = { createUser, getUser }