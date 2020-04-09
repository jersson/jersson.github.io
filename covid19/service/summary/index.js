exports.covidSummary = (req, res) =>{
    let summary = {
            show: true,
            title : 'Situación al 9 de abril',
            cases: [
                {alias: 'Pruebas realizadas', reported: '48,465', delta:'8,866+'},
                {alias: 'Confirmados', reported: '5.256', delta:'914+'},
                {alias: 'Recuperados', reported: '1,438', delta:'105+'},
                {alias: 'Fallecidos', reported: '138', delta:'17+'},
                {alias: 'Mortalidad', reported: '%2.63', delta:'2.79%'},
            ],
            source: {
                link: 'https://www.gob.pe/coronavirus', 
                alias: 'MINSA'
            }
        };

    let origin_allowed = process.env.ORIGIN_ALLOWED || '*';
    
    res.set('Access-Control-Allow-Origin', origin_allowed);
    res.send(summary);
}