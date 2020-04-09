exports.covidSummary = (req, res) =>{
    let summary = {
            show: true,
            title : 'Situación al 8 de abril',
            cases: [
                {alias: 'Pruebas realizadas', reported: '39,599', delta:'18,044+'},
                {alias: 'Confirmados', reported: '4,342', delta:'1,388+'},
                {alias: 'Recuperados', reported: '1,333', delta:'102+'},
                {alias: 'Fallecidos', reported: '121', delta:'14+'},
                {alias: 'Mortalidad', reported: '%2.79', delta:'3.62%'},
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