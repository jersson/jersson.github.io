exports.covidSummary = (req, res) =>{
    let summary = {
            show: true,
            title : 'Situación al 5 de abril',
            cases: [
                {alias: 'Confirmados', reported: '2,281', delta:'535+'},
                {alias: 'Descartados', reported: '17,129', delta:'1,034+'},
                {alias: 'Recuperados', reported: '989', delta:'75+'},
                {alias: 'Fallecidos', reported: '83', delta:'10+'},
            ],
            source: {
                link: 'https://covid19.minsa.gob.pe/sala_situacional.asp', 
                alias: 'MINSA'
            }
        };

    res.set('Access-Control-Allow-Origin', 'https://jersson.github.io')

    res.send(summary);
}