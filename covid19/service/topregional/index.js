const TopRegional = require('./data/topregional');

exports.covidTopRegionalTrends = (req, res) => {
    let topRegionalTrends = TopRegional.data();
    let origin_allowed = process.env.ORIGIN_ALLOWED || '*';

    res.set('Access-Control-Allow-Origin', origin_allowed);
    res.send(topRegionalTrends);
}