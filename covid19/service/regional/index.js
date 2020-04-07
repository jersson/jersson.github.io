exports.covidRegionalTrends = (req, res) => {
    let regionalTrends = {
        // labels: ['29-03','30-03', '31-03','01-04','02-04','03-04','04-04'],
        labels: ['30-03', '31-03','01-04','02-04','03-04','04-04','05-04'],
        datasets: [{
            // data: [950,1065,1323,1414,1595,1746,2281],
            data: [1065,1323,1414,1595,1746,2281,2561],
            label: 'Perú',
            borderColor: '#866969',
            fill: false
        }, {
            // data: [718,799,990,1059,1179,1257,1639],
            data: [799,990,1059,1179,1257,1639,1837],
            label: 'Lima',
            borderColor: '#c45850',
            fill: false
        }, {
            // data: [53,58,66,72,84,106,143],
            data: [58,66,72,84,106,143,171],
            label: 'Loreto',
            borderColor: '#3cba9f',
            fill: false
        }, {
            // data: [22,30,34,37,35,55,100], 
            data: [30,34,37,35,55,100,100], 
            label: 'Lambayeque',
            borderColor: '#8e5ea2',
            fill: false
        }, {
            // data: [24,25,37,40,59,64,89],
            data: [25,37,40,59,64,89,109],
            label: 'Callao',
            borderColor: '#3e95cd',
            fill: false
        }, {
            // data: [25,26,38,38,44,48,52], 
            data: [26,38,38,44,48,52,54], 
            label: 'Cusco',
            borderColor: '#e8c3b9',
            fill: false
        }, {
            // data: [21,26,30,30,30,37,51], 
            data: [26,30,30,30,37,51,60], 
            label: 'Arequipa',
            borderColor: '#c45855',
            fill: false
        }, {
            // data: [15,19,32,34,44,50,50],
            data: [19,32,34,44,50,50,56],
            label: 'La Libertad',
            borderColor: '#3cba85',
            fill: false
        }, {
            // data: [21,21,26,27,27,27,29],
            data: [21,26,27,27,27,29,30],
            label: 'Piura',
            borderColor: '#8e5e95',
            fill: false
        }, {
            // data: [8,10,13,15,16,20,26],
            data: [10,13,15,16,20,26,26],
            label: 'Tumbes',
            borderColor: '#3e95b5',
            fill: false
        }, {
            // data: [13,17,17,17,19,25,25],
            data: [17,17,17,19,25,25,28],
            label: 'Junín',
            borderColor: '#e8c3b0',
            fill: false
        }, {
            // data: [11,11,15,15,15,18,23],
            data: [11,15,15,15,18,23,27],
            label: 'Áncash',
            borderColor: '#c45850',
            fill: false
        }, {
            // data: [5,5,8,8,8,9,14],
            data: [5,8,8,8,9,14,18],
            label: 'Ica',
            borderColor: '#8e5e90',
            fill: false
        }, {
            // data: [1,2,3,3,3,3,9],
            data: [2,3,3,3,3,9,9],
            label: 'Tacna',
            borderColor: '#3e95c0',
            fill: false
        }, {
            // data: [5,6,6,6,6,8,8],
            data: [6,6,6,6,8,8,8],
            label: 'San Martín',
            borderColor: '#e8c3a5',
            fill: false
        }, {
            // data: [1,1,2,3,4,6,6],
            data: [1,2,3,4,6,6,6],
            label: 'Cajamarca',
            borderColor: '#c45845',
            fill: false
        }, {
            // data: [4,6,6,6,6,6,6],
            data: [6,6,6,6,6,6,6],
            label: 'Huánuco',
            borderColor: '#8e5e85',
            fill: false
        }, {
            // data: [1,1,1,1,1,1,3], 
            data: [1,1,1,1,1,3,5], 
            label: 'Ayacucho',
            borderColor: '#3e95b5',
            fill: false
        }, {
            // data: [1,1,1,1,1,1,3],
            data: [1,1,1,1,1,3,5],
            label: 'Pasco',
            borderColor: '#e8c395',
            fill: false
        }, {
            // data: [1,1,1,1,2,2,2],
            data: [1,1,1,2,2,2,2],
            label: 'Madre de Dios',
            borderColor: '#c45840',
            fill: false
        }, {
            // data: [0,0,0,0,1,1,1],
            data: [0,0,0,1,1,1,1],
            label: 'Apurimac',
            borderColor: '#8e5e80',
            fill: false
        }, {
            // data: [0,0,1,1,1,1,1],
            data: [0,1,1,1,1,1,2],
            label: 'Huancavelica',
            borderColor: '#3e95b0',
            fill: false
        }, {
            // data: [0,0,0,0,0,0,1],
            data: [0,0,0,0,0,1,1],
            label: 'Moquegua',
            borderColor: '#e8c390',
            fill: false
        }]
    };

    let origin_allowed = process.env.ORIGIN_ALLOWED;
    res.set('Access-Control-Allow-Origin', origin_allowed);

    res.send(regionalTrends);
}