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

const addEventUser = (idevent, iduser) => {
    return executeQuery('insert into user_event (id_evento, id_usuario) values (?,?)', [idevent, iduser]);
}

module.exports = { createEvent, getAllEvents, getEventsById, addEventUser };
