//TODO: this code has to be replaced with real code :) 
function renderRegionalTrends(chart) {
    // const url = 'https://us-central1-virtual-bonito-170805.cloudfunctions.net/covidRegionalTrends';
    const url = 'http://localhost:8080';
    let regionalTrends = {
        labels: ['30-03', '31-03','01-04','02-04','03-04','04-04','05-04'],
        datasets: [{
            data: [950,1065,1323,1414,1595,1746,2281],
            label: 'Perú',
            borderColor: '#866969',
            fill: false
        }, {
            data: [718,799,990,1059,1179,1257,1639],
            label: 'Lima',
            borderColor: '#c45850',
            fill: false
        }, {
            data: [53,58,66,72,84,106,143],
            label: 'Loreto',
            borderColor: '#3cba9f',
            fill: false
        }, {
            data: [22,30,34,37,35,55,100], 
            label: 'Lambayeque',
            borderColor: '#8e5ea2',
            fill: false
        }, {
            data: [24,25,37,40,59,64,89],
            label: 'Callao',
            borderColor: '#3e95cd',
            fill: false
        }, {
            data: [25,26,38,38,44,48,52], 
            label: 'Cusco',
            borderColor: '#e8c3b9',
            fill: false
        }, {
            data: [21,26,30,30,30,37,51], 
            label: 'Arequipa',
            borderColor: '#c45855',
            fill: false
        }, {
            data: [15,19,32,34,44,50,50],
            label: 'La Libertad',
            borderColor: '#3cba85',
            fill: false
        }, {
            data: [21,21,26,27,27,27,29],
            label: 'Piura',
            borderColor: '#8e5e95',
            fill: false
        }, {
            data: [8,10,13,15,16,20,26],
            label: 'Tumbes',
            borderColor: '#3e95b5',
            fill: false
        }, {
            data: [13,17,17,17,19,25,25],
            label: 'Junín',
            borderColor: '#e8c3b0',
            fill: false
        }, {
            data: [11,11,15,15,15,18,23],
            label: 'Áncash',
            borderColor: '#c45850',
            fill: false
        }, {
            data: [5,5,8,8,8,9,14],
            label: 'Ica',
            borderColor: '#8e5e90',
            fill: false
        }, {
            data: [1,2,3,3,3,3,9],
            label: 'Tacna',
            borderColor: '#3e95c0',
            fill: false
        }, {
            data: [5,6,6,6,6,8,8],
            label: 'San Martín',
            borderColor: '#e8c3a5',
            fill: false
        }, {
            data: [1,1,2,3,4,6,6],
            label: 'Cajamarca',
            borderColor: '#c45845',
            fill: false
        }, {
            data: [4,6,6,6,6,6,6],
            label: 'Huánuco',
            borderColor: '#8e5e85',
            fill: false
        }, {
            data: [1,1,1,1,1,1,3], 
            label: 'Ayacucho',
            borderColor: '#3e95b5',
            fill: false
        }, {
            data: [1,1,1,1,1,1,3],
            label: 'Pasco',
            borderColor: '#e8c395',
            fill: false
        }, {
            data: [1,1,1,1,2,2,2],
            label: 'Madre de Dios',
            borderColor: '#c45840',
            fill: false
        }, {
            data: [0,0,0,0,1,1,1],
            label: 'Apurimac',
            borderColor: '#8e5e80',
            fill: false
        }, {
            data: [0,0,1,1,1,1,1],
            label: 'Huancavelica',
            borderColor: '#3e95b0',
            fill: false
        }, {
            data: [0,0,0,0,0,0,1],
            label: 'Moquegua',
            borderColor: '#e8c390',
            fill: false
        }
        ]
    };
    fetch(url).then((res) => {
        res.json().then((result) => {
            
            //result = regionalTrends;

            var lineChart1 = document.getElementById(chart);
            new Chart(lineChart1, {
                    type: 'line',
                    data: result,
                    options: {
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 14,
                            text: 'Tendencias regionales de casos confirmados en Perú, últimos 7 días'
                        },
                        legend: {
                            position: 'bottom',
                            align: 'start'
                        }
                    }
                });
        })
    });
}