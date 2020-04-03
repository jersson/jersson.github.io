exports.covidSummary = (req, res) =>{
    let summary = {
            show: true,
            title : 'Situación al 3 de abril',
            cases: [
                {alias: 'Confirmados', reported: 1595, delta:'181+'},
                {alias: 'Descartados', reported: 15739, delta:'635+'},
                {alias: 'Recuperados', reported: 627, delta:'90+'},
                {alias: 'Fallecidos', reported: 61, delta:'6+'},
            ],
            source: {
                link: 'https://covid19.minsa.gob.pe/sala_situacional.asp',
                alias: 'MINSA'                
            }
        };

    res.set('Access-Control-Allow-Origin', 'https://jersson.github.io')

    res.send(summary);
}