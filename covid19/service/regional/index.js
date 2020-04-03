exports.covidRegionalTrends = (req, res) => {
    let regionalTrends = {
        // labels: ['20-03', '21-03', '22-03', '23-03', '24-03', '25-03', '26-03'],
        // labels: ['21-03', '22-03', '23-03', '24-03', '25-03', '26-03', '27-03'],
        // labels: ['22-03', '23-03', '24-03', '25-03', '26-03', '27-03', '28-03'],
        // labels: ['23-03', '24-03', '25-03', '26-03', '27-03', '28-03', '29-03'],
        // labels: ['24-03', '25-03', '26-03', '27-03', '28-03', '29-03', '30-03'],
        // labels: ['25-03', '26-03', '27-03', '28-03', '29-03', '30-03', '31-03'],
        // labels: ['26-03', '27-03', '28-03', '29-03', '30-03', '31-03','01-04'],
        labels: ['27-03', '28-03', '29-03', '30-03', '31-03','01-04','02-04'],
        datasets: [{
            // data: [263,318,363,395,416,480,580],
            // data: [318,363,395,416,480,580, 635],
            // data: [363,395,416,480,580,635,671],
            // data: [395,416,480,580,635,671,852],
            // data: [416,480,580,635,671,852,950],
            // data: [480,580,635,671,852,950,1065],
            // data: [580,635,671,852,950,1065,1323],
            data: [635,671,852,950,1065,1323,1414],
            label: 'Perú',
            borderColor: '#866969',
            fill: false
        }, {
            // data: [220,241,278,307,322,369,453],
            // data: [241,278,307,322,369,453, 494],
            // data: [278,307,322,369,453,494,518],
            // data: [307,322,369,453,494,518,639],
            // data: [322,369,453,494,518,639,718],
            // data: [369,453,494,518,639,718,799],
            // data: [453,494,518,639,718,799,990],
            data: [494,518,639,718,799,990,1059],
            label: 'Lima',
            borderColor: '#c45850',
            fill: false
        }, {
            // data: [12,14,16,16,16,18,18],
            // data: [14,16,16,16,18,18,23],
            // data: [16,16,16,18,18,23,27],
            // data: [16,16,18,18,23,27,52],
            // data: [16,18,18,23,27,52,53],
            // data: [18,18,23,27,52,53,58],
            // data: [18,23,27,52,53,58,66],
            data: [23,27,52,53,58,66,72],
            label: 'Loreto',
            borderColor: '#3cba9f',
            fill: false
        }, {
            // data: [5,6,6,8,8,10,15], Call
            // data: [6,6,8,8,10,15,17], Call
            // data: [6,8,8,10,15,17,18], Call
            // data: [8,8,10,15,17,18,29], Call
            // data: [8,10,15,17,18,29,24], Call
            // data: [9,10,15,15,15,21,26], Aqp
            // data: [15,17,18,29,24,25,37],
            data: [17,18,29,24,25,37,40],
            label: 'Callao',
            borderColor: '#3e95cd',
            fill: false
        }, {
            // data: [2,18,19,19,19,19,20], Piu
            // data: [18,19,19,19,19,20, 20], Piu
            // data: [19,19,19,19,20,20,20], Piu
            // data: [19,19,19,20,20,20,21], Piu
            // data: [6,10,10,10,11,17,25], 
            // data: [10,10,10,11,17,25,26], 
            // data: [10,10,11,17,25,26,34], 
            data: [10,11,17,25,26,38,38], 
            label: 'Cusco',
            borderColor: '#8e5ea2',
            fill: false
        }, {
            // data: [3,4,7,7,9,10,15], Aqp
            // data: [4,7,7,9,10,15,15], Aqp
            // data: [7,7,9,10,15,15,15], Aqp
            // data: [8,8,12,12,13,15,22],
            // data: [12,12,13,15,22,22,30],
            // data: [12,13,15,22,22,30,34],
            data: [13,15,22,22,30,34,37],
            label: 'Lambayeque',
            borderColor: '#e8c3b9',
            fill: false
        }
        ]
    };
    res.set('Access-Control-Allow-Origin', 'https://jersson.github.io')

    res.send(regionalTrends);
}