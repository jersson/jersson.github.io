const Summary = require('./data/summary');
exports.covidSummary = (req, res) =>{
    let summary = Summary.data();
    let origin_allowed = process.env.ORIGIN_ALLOWED || '*';
    
    res.set('Access-Control-Allow-Origin', origin_allowed);
    res.send(summary);
}