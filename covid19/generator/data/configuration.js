const GeneralConfiguration = {
    data: () => {
        return {
            days: ['05-04','06-04','07-04','08-04','09-04','10-04','11-04'],
            daysToAnalyse: 7,
            regions: [{
                region: 'peru',
                title: 'Perú',
                confirmed: [2561,2954,4340,5256,5897,6848,7519],
                borderColor: '#866969',
                fill: false, 
                cases: {
                    tested: {
                        title: 'Pruebas realizadas', 
                        data: [20414,21555,39599,48465,56681,65712,76506],
                        borderColor: "#ffa500", 
                        fill: false
                    }, 
                    discarded: {
                        title: 'Descartados', 
                        borderColor: "#00cc00", 
                        fill: false
                    }, 
                    confirmed: {
                        title: 'Confirmados', 
                        data: [2561,2954,4340,5256,5897,6848,7519],
                        borderColor: "#c45850", 
                        fill: false
                    }, 
                    recovered: {
                        title: 'Recuperados', 
                        data: [997,1231,1333,1438,1569,1739,1798],
                        borderColor: "#B266FF", 
                        fill: false
                    }, 
                    treatment: {
                        title: 'En tratamiento', 
                        borderColor: "#f0e68c", 
                        fill: false
                    }, 
                    deceased: {
                        title: 'Fallecidos', 
                        data: [92,107,121,138,169,181,193],
                        borderColor: "#000000", 
                        fill: false
                    }, 
                }
            }, {
                region: 'lima',
                title: 'Lima',
                confirmed: [1837,2100,3016,3704,4210,4933,5456],
                latitude : -12.0464,
                longitude: -77.0428, 
                borderColor: '#c45850',
                fill: false
            }, {
                region: 'loreto',
                title: 'Loreto',
                confirmed: [171,206,290,315,315,315,322],
                latitude : -3.74912,
                longitude: -73.25383,         
                borderColor: '#3cba9f',
                fill: false
            }, {
                region: 'lambayeque',
                title: 'Lambayeque',
                confirmed: [108,246,302,302,302,326,355], 
                latitude : -6.7011099,
                longitude: -79.9061127, 
                borderColor: '#8e5ea2',
                fill: false
            }, {
                region: 'callao',
                title: 'Callao',
                confirmed: [109,161,320,413,465,551,596],
                latitude : -12.0565901,
                longitude: -77.1181412,         
                borderColor: '#3e95cd',
                fill: false
            }, {
                region: 'cusco',
                title: 'Cusco',
                confirmed: [54,54,54,55,57,58,59], 
                latitude : -13.516667,
                longitude: -71.978771, 
                borderColor: '#e8c3b9',
                fill: false
            }, {
                region: 'arequipa',
                title: 'Arequipa',
                confirmed: [60,66,74,77,83,85,86], 
                latitude : -16.3988900,
                longitude: -71.5350000,
                borderColor: '#c45855',
                fill: false
            }, {
                region: 'la-libertad',
                title: 'La Libertad',
                confirmed: [56,58,82,96,101,108,110],
                latitude : -8.1159897,
                longitude: -79.0299835, 
                borderColor: '#3cba85',
                fill: false
            }, {
                region: 'piura',
                title: 'Piura',
                confirmed: [30,35,41,53,68,91,104],
                latitude : -5.1944900,
                longitude: -80.6328200, 
                borderColor: '#8e5e95',
                fill: false
            }, {
                region: 'tumbes',
                title: 'Tumbes',
                confirmed: [26,27,27,27,27,68,69],
                latitude : -3.570698,
                longitude: -80.459641, 
                borderColor: '#3e95b5',
                fill: false
            }, {
                region: 'junin',
                title: 'Junín',
                confirmed: [28,28,42,42,56,58,64],
                latitude : -12.069156,
                longitude: -75.208648,         
                borderColor: '#e8c3b0',
                fill: false
            }, {
                region: 'ancash',
                title: 'Áncash',
                confirmed: [23,27,36,50,57,88,102],
                latitude : -9.1366700,
                longitude: -77.7602800,         
                borderColor: '#c45850',
                fill: false
            }, {
                region: 'ica',
                title: 'Ica',
                confirmed: [18,24,28,34,37,47,58],
                latitude : -13.71029,
                longitude: -76.2053833,         
                borderColor: '#8e5e90',
                fill: false
            }, {
                region: 'tacna',
                title: 'Tacna',
                confirmed: [9,9,9,9,9,9,9],
                latitude : -18.013473,
                longitude: -70.250829, 
                borderColor: '#3e95c0',
                fill: false
            }, {
                region: 'san-martin',
                title: 'San Martín',
                confirmed: [8,8,11,15,18,20,23],
                latitude : -6.034608,
                longitude: -76.974733,         
                borderColor: '#e8c3a5',
                fill: false
            }, {
                region: 'cajamarca',
                title: 'Cajamarca',
                confirmed: [6,6,10,11,11,11,11],
                latitude : -7.157181,
                longitude: -78.517542,         
                borderColor: '#c45845',
                fill: false
            }, {
                region: 'huanuco',
                title: 'Huánuco',
                confirmed: [6,6,6,7,9,9,10],
                latitude : -9.925791,
                longitude: -76.242772,         
                borderColor: '#8e5e85',
                fill: false
            }, {
                region: 'ayacucho',
                title: 'Ayacucho',
                confirmed: [5,5,5,7,9,13,11], 
                latitude : -13.160333,
                longitude: -74.225743,         
                borderColor: '#3e95b5',
                fill: false
            }, {
                region: 'pasco',
                title: 'Pasco',
                confirmed: [5,5,5,5,8,9,11],
                latitude : -10.683354,
                longitude: -76.256148,         
                borderColor: '#e8c395',
                fill: false
            }, {
                region: 'madre-de-dios',
                title: 'Madre de Dios',
                confirmed: [2,2,2,3,3,4,3],
                latitude : -12.594215,
                longitude: -69.176401,         
                borderColor: '#c45840',
                fill: false
            }, {
                region: 'apurimac',
                title: 'Apurimac',
                confirmed: [1,1,1,1,3,3,5],
                latitude : -13.637320,
                longitude: -72.878821,         
                borderColor: '#8e5e80',
                fill: false
            }, {
                region: 'huancavelica',
                title: 'Huancavelica',
                confirmed: [2,7,7,7,7,7,9],
                latitude : -12.787246,
                longitude: -74.973149,         
                borderColor: '#3e95b0',
                fill: false
            }, {
                region: 'moquegua',
                title: 'Moquegua',
                confirmed: [1,1,3,3,3,8,10],
                latitude : -17.193771,
                longitude: -70.934572,         
                borderColor: '#e8c390',
                fill: false
            }, {
                region: 'puno',
                title: 'Puno',
                confirmed: [0,1,1,1,1,1,2],
                latitude : -15.840546,
                longitude: -70.027916,         
                borderColor: '#e8c390',
                fill: false
            }, {
                region: 'amazonas',
                title: 'Amazonas',
                confirmed: [0,0,1,10,16,22,19],
                latitude : -6.22933,
                longitude: -77.872405,         
                borderColor: '#e8c390',
                fill: false
            }, {
                region: 'ucayali',
                title: 'Ucayali',
                confirmed: [0,0,0,0,12,14,15],
                latitude : -8.382998,
                longitude: -74.532188,         
                borderColor: '#e8c390',
                fill: false
            }]
        }
    }
};

module.exports = GeneralConfiguration;