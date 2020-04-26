const GeneralConfiguration = {
    data: () => {
        return {
            days: ['05-04','06-04','07-04','08-04','09-04','10-04','11-04','12-04',
                    '13-04','14-04','15-04','16-04','17-04','18-04','19-04','20-04',
                    '21-04','22-04','23-04','24-04','25-04'],
            daysToAnalyse: 7,
            regions: [{
                region: 'peru',
                title: 'Perú',
                confirmed: [2561,2954,4340,5256,5897,6848,7519,9874,
                            10303,11475,12491,13489,14420,15628,16325,
                            17837,19250,20914,21648,25331,27517],
                borderColor: '#866969',
                fill: false, 
                cases: {
                    tested: {
                        title: 'Pruebas realizadas', 
                        data: [20414,21555,39599,48465,56681,65712,76506,
                                87116,102216,109385,121468,127513,135895,
                                143175,148011,155724,170400,185238,198349,
                                218195,232747],
                        borderColor: '#ffa500', 
                        fill: false
                    }, 
                    discarded: {
                        title: 'Descartados', 
                        borderColor: '#00cc00', 
                        fill: false
                    }, 
                    confirmed: {
                        title: 'Confirmados', 
                        data: [2561,2954,4340,5256,5897,6848,7519,9874,10303,
                                11475,12491,13489,14420,15628,16325,17837,
                                19250,20914,21648,25331,27517],
                        borderColor: '#c45850', 
                        fill: false
                    }, 
                    recovered: {
                        title: 'Recuperados', 
                        data: [997,1231,1333,1438,1569,1739,1798,2642,2869,
                                3108,6120,6541,6684,6811,6968,6982,7027,7422,
                                7496, 7797,8088],
                        borderColor: '#B266FF', 
                        fill: false
                    }, 
                    treatment: {
                        title: 'En tratamiento', 
                        borderColor: '#f0e68c', 
                        fill: false, 
                        special: {
                            title: 'UCI',
                            data: [167,385,380,396,467,505,545,554],
                            borderColor: '#6f650e',
                            fill: false
                        }
                    }, 
                    deceased: {
                        title: 'Fallecidos', 
                        data: [92,107,121,138,169,181,193,216,230,254,274,
                                300,348,400,445,484,530,572,634,700,728],
                        borderColor: '#000000', 
                        fill: false
                    }, 
                }
            }, {
                region: 'lima',
                title: 'Lima',
                confirmed: [1837,2100,3016,3704,4210,4933,5456,5456,7476,
                            8412,9107,9793,10234,10877,11297,12256,13214,
                            14300,14814,16567,17884],
                latitude : -12.0464,
                longitude: -77.0428, 
                borderColor: '#c45850',
                fill: false
            }, {
                region: 'loreto',
                title: 'Loreto',
                confirmed: [171,206,290,315,315,315,322,322,357,396,412,
                            431,485,552,585,617,653,700,708,742,786,786],
                latitude : -3.74912,
                longitude: -73.25383,         
                borderColor: '#3cba9f',
                fill: false
            }, {
                region: 'lambayeque',
                title: 'Lambayeque',
                confirmed: [108,246,302,302,302,326,355,355,427,428,
                            571,600,642,671,675,741,864,968,974,1388,1602], 
                latitude : -6.7011099,
                longitude: -79.9061127, 
                borderColor: '#8e5ea2',
                fill: false
            }, {
                region: 'callao',
                title: 'Callao',
                confirmed: [109,161,320,413,465,551,596,596,908,939,
                            1008,1080,1180,1239,1282,1369,1416,1536, 
                            1591,2436,2615],
                latitude : -12.0565901,
                longitude: -77.1181412,         
                borderColor: '#3e95cd',
                fill: false
            }, {
                region: 'cusco',
                title: 'Cusco',
                confirmed: [54,54,54,55,57,58,59,59,106,108,109,112,
                            123,130,130,132,147,158,160,174,182], 
                latitude : -13.516667,
                longitude: -71.978771, 
                borderColor: '#e8c3b9',
                fill: false
            }, {
                region: 'arequipa',
                title: 'Arequipa',
                confirmed: [60,66,74,77,83,85,86,86,99,98,111,134,
                            146,192,229,273,276,291,311,364,396], 
                latitude : -16.3988900,
                longitude: -71.5350000,
                borderColor: '#c45855',
                fill: false
            }, {
                region: 'la-libertad',
                title: 'La Libertad',
                confirmed: [56,58,82,96,101,108,110,110,166,184,193,
                            194,211,232,253,303,318,391,410,481,503],
                latitude : -8.1159897,
                longitude: -79.0299835, 
                borderColor: '#3cba85',
                fill: false
            }, {
                region: 'piura',
                title: 'Piura',
                confirmed: [30,35,41,53,68,91,104,104,224,229,233,
                            264,344,420,436,475,514,568,585,669,790],
                latitude : -5.1944900,
                longitude: -80.6328200, 
                borderColor: '#8e5e95',
                fill: false
            }, {
                region: 'tumbes',
                title: 'Tumbes',
                confirmed: [26,27,27,27,27,68,69,69,69,82,85,86,
                            86,183,184,198,205,233,234,240,250],
                latitude : -3.570698,
                longitude: -80.459641, 
                borderColor: '#3e95b5',
                fill: false
            }, {
                region: 'junin',
                title: 'Junín',
                confirmed: [28,28,42,42,56,58,64,64,68,79,79,101,
                            130,150,155,178,207,206,219,257,284],
                latitude : -12.069156,
                longitude: -75.208648,         
                borderColor: '#e8c3b0',
                fill: false
            }, {
                region: 'ancash',
                title: 'Áncash',
                confirmed: [23,27,36,50,57,88,102,102,124,144,
                            171,189,217,251,275,334,365,352,361,
                            464,506],
                latitude : -9.1366700,
                longitude: -77.7602800,         
                borderColor: '#c45850',
                fill: false
            }, {
                region: 'ica',
                title: 'Ica',
                confirmed: [18,24,28,34,37,47,58,58,76,101,106,
                            119,124,141,145,195,213,248,258,268,284],
                latitude : -13.71029,
                longitude: -76.2053833,         
                borderColor: '#8e5e90',
                fill: false
            }, {
                region: 'tacna',
                title: 'Tacna',
                confirmed: [9,9,9,9,9,9,9,9,9,10,14,20,
                            28,35,35,42,44,50,59,67,68],
                latitude : -18.013473,
                longitude: -70.250829, 
                borderColor: '#3e95c0',
                fill: false
            }, {
                region: 'san-martin',
                title: 'San Martín',
                confirmed: [8,8,11,15,18,20,23,23,23,48,47,49,
                            81,94,94,100,107,111,117,121,151],
                latitude : -6.034608,
                longitude: -76.974733,         
                borderColor: '#e8c3a5',
                fill: false
            }, {
                region: 'cajamarca',
                title: 'Cajamarca',
                confirmed: [6,6,10,11,11,11,11,11,19,20,22,
                            38,52,61,62,73,78,90,92,105,128],
                latitude : -7.157181,
                longitude: -78.517542,         
                borderColor: '#c45845',
                fill: false
            }, {
                region: 'huanuco',
                title: 'Huánuco',
                confirmed: [6,6,6,7,9,9,10,10,15,39,42,45,
                            64,83,83,91,114,116,116,160,167],
                latitude : -9.925791,
                longitude: -76.242772,         
                borderColor: '#8e5e85',
                fill: false
            }, {
                region: 'ayacucho',
                title: 'Ayacucho',
                confirmed: [5,5,5,7,9,13,11,11,15,22,23,
                            23,29,33,35,38,38,39,40,45,53], 
                latitude : -13.160333,
                longitude: -74.225743,         
                borderColor: '#3e95b5',
                fill: false
            }, {
                region: 'pasco',
                title: 'Pasco',
                confirmed: [5,5,5,5,8,9,11,11,11,11,11,13,
                            13,18,32,39,46,48,61,68,78],
                latitude : -10.683354,
                longitude: -76.256148,         
                borderColor: '#e8c395',
                fill: false
            }, {
                region: 'madre-de-dios',
                title: 'Madre de Dios',
                confirmed: [2,2,2,3,3,4,3,3,19,19,19,21,
                            21,25,64,66,71,77,80,91,94],
                latitude : -12.594215,
                longitude: -69.176401,         
                borderColor: '#c45840',
                fill: false
            }, {
                region: 'apurimac',
                title: 'Apurimac',
                confirmed: [1,1,1,1,3,3,5,5,10,20,22,
                            32,35,35,40,42,46,52,53,63,68],
                latitude : -13.637320,
                longitude: -72.878821,         
                borderColor: '#8e5e80',
                fill: false
            }, {
                region: 'huancavelica',
                title: 'Huancavelica',
                confirmed: [2,7,7,7,7,7,9,9,10,11,11,17,
                            18,20,21,16,19,21,23,33,40],
                latitude : -12.787246,
                longitude: -74.973149,         
                borderColor: '#3e95b0',
                fill: false
            }, {
                region: 'moquegua',
                title: 'Moquegua',
                confirmed: [1,1,3,3,3,8,10,10,13,16,21,
                            24,28,30,30,41,48,52,57,73,92],
                latitude : -17.193771,
                longitude: -70.934572,         
                borderColor: '#e8c390',
                fill: false
            }, {
                region: 'puno',
                title: 'Puno',
                confirmed: [0,1,1,1,1,1,2,2,2,2,2,2,
                            5,8,8,11,15,33,34,65,69],
                latitude : -15.840546,
                longitude: -70.027916,         
                borderColor: '#e8c390',
                fill: false
            }, {
                region: 'amazonas',
                title: 'Amazonas',
                confirmed: [0,0,1,10,16,22,19,19,25,25,23,
                            46,51,51,55,58,60,64,65,67,78],
                latitude : -6.22933,
                longitude: -77.872405,         
                borderColor: '#e8c390',
                fill: false
            }, {
                region: 'ucayali',
                title: 'Ucayali',
                confirmed: [0,0,0,0,12,14,15,15,32,32,49,56,
                            73,97,120,149,172,210,226,323,349],
                latitude : -8.382998,
                longitude: -74.532188,         
                borderColor: '#e8c390',
                fill: false
            }]
        }
    }
};

module.exports = GeneralConfiguration;