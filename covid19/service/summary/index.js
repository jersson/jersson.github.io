exports.covidSummary = (req, res) =>{
    let summary = {
            show: true,
            title : 'Situación al 7 de abril',
            cases: [
                {alias: 'Pruebas realizadas', reported: '21,555', delta:'1,141+'},
                {alias: 'Confirmados', reported: '2,954', delta:'393+'},
                {alias: 'Recuperados', reported: '1231', delta:'234+'},
                {alias: 'Fallecidos', reported: '107', delta:'15+'},
                {alias: 'Mortalidad', reported: '%3.62', delta:'3.59%'},
            ],
            source: {
                link: 'https://www.gob.pe/coronavirus', 
                alias: 'MINSA'
            }
        };

    let origin_allowed = process.env.ORIGIN_ALLOWED;
    res.set('Access-Control-Allow-Origin', origin_allowed);

    res.send(summary);
}