exports.covidSummary = (req, res) =>{
    let summary = {
            show: true,
            title : 'Situación al 2 de abril',
            cases: [
                {alias: 'Confirmados', reported: 1414, delta:'91+'},
                {alias: 'Descartados', reported: 15104, delta:'840+'},
                {alias: 'Recuperados', reported: 537, delta:'90+'},
                {alias: 'Fallecidos', reported: 55, delta:'8+'},
            ],
            source: {
                link: 'https://twitter.com/Minsa_Peru/status/1245776225207009292',
                alias: 'MINSA'                
            }
        };

    res.set('Access-Control-Allow-Origin', 'https://jersson.github.io')

    res.send(summary);
}