const Cases = require('./data/cases');

exports.covidCaseTrends = (req, res) => {
    let caseTrends = Cases.data();
    let origin_allowed = process.env.ORIGIN_ALLOWED || '*';

    res.set('Access-Control-Allow-Origin', origin_allowed);
    res.send(caseTrends);
}