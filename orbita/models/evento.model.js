const { executeQuery } = require('../utils');

const createEvent = ({ nombre_evento, descripcion, localizacion, fecha_evento, categoria }) => {
    return executeQuery('insert into eventos ( nombre_evento, descripcion, localizacion, fecha_evento, categoria) values (?,?,?,?,?)', [nombre_evento, descripcion, localizacion, fecha_evento, categoria]);
};

const getAllEvents = () => {
    return executeQuery('select * from eventos');
}

module.exports = { createEvent, getAllEvents };
