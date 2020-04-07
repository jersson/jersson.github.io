exports.covidSummary = (req, res) =>{
    let summary = {
            show: true,
            title : 'Situación al 6 de abril',
            cases: [
                {alias: 'Pruebas realizadas', reported: '20,414', delta:'2,573+'},
                {alias: 'Confirmados', reported: '2,561', delta:'280+'},
                {alias: 'Recuperados', reported: '997', delta:'8+'},
                {alias: 'Fallecidos', reported: '92', delta:'9+'},
                {alias: 'Mortalidad', reported: '3.59%', delta:'3.64%'},
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