const Summary = {
    data : () => {
        return {
            show: true,
            title : 'Situación al 10 de abril',
            cases: [
                {alias: 'Pruebas realizadas', reported: '56,581', delta:'8,216+'},
                {alias: 'Confirmados', reported: '5,897', delta:'641+'},
                {alias: 'Recuperados', reported: '1,569', delta:'131+'},
                {alias: 'Fallecidos', reported: '169', delta:'31+'},
                {alias: 'Mortalidad', reported: '2.87%', delta:'2.63%'},
            ],
            source: {
                link: 'https://www.gob.pe/coronavirus', 
                alias: 'MINSA'
            }
        }
    }
}

module.exports = Summary;