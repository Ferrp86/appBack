const { executeQuery } = require('../utils');

const createEvent = ({ nombre_evento, descripcion, localizacion, fecha_evento, categoria }) => {
    return executeQuery('insert into eventos ( nombre_evento, descripcion, localizacion, fecha_evento, categoria) values (?,?,?,?,?)', [nombre_evento, descripcion, localizacion, fecha_evento, categoria]);
};

const getAllEvents = () => {
    return executeQuery('select * from eventos');
}

const getEventsById = (id) => {
    return executeQuery('select * from eventos where id = ?', [id]);
}

module.exports = { createEvent, getAllEvents, getEventsById };
