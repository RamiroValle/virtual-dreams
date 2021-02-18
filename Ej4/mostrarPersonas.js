const rp = require('request-promise');

var req = {
    method: 'GET',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    json: true
};
 
rp(req)
    .then(function (personas) {
        console.log(personas);
    })
    .catch(function (err) {
        console.log(err)
    });
    