const executeQuery = (query, data = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    });
}

module.exports = { executeQuery }