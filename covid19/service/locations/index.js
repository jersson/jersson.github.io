const Locations = require('./data/locations');

exports.covidLocations = (req, res) => {
    let locations = Locations.data();
    let origin_allowed = process.env.ORIGIN_ALLOWED || '*';

    res.set('Access-Control-Allow-Origin', origin_allowed);
    res.send(locations);
}