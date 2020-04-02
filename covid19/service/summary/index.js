exports.covidSummary = (req, res) =>{
    let summary = {
            show: true,
            title : 'Situación al 1 de abril',
            cases: [
                {alias: 'Confirmados', reported: 1323, delta:258},
                {alias: 'Descartados', reported: 14264, delta:866},
                {alias: 'Recuperados', reported: 447, delta:53},
                {alias: 'Fallecidos', reported: 47, delta:17},
            ],
            source: {
                link: 'https://twitter.com/Minsa_Peru/status/1245410804335288326',
                alias: 'MINSA'                
            }
        };

    //res.set('Access-Control-Allow-Origin', 'https://jersson.github.io')
    res.set('Access-Control-Allow-Origin', '*')

    res.send(summary);
}