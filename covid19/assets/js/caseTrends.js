function renderCaseTrends(chart) {
    const url = 'https://us-central1-virtual-bonito-170805.cloudfunctions.net/covidCaseTrends';
    
    fetch(url).then((res) => {
        res.json().then(result => {
            var lineChart2 = document.getElementById(chart);
            new Chart(lineChart2, {
                    type: 'line',
                    data: result,
                    options: {
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 14,
                            text: 'Pruebas y resultados en Perú, últimos 7 días'
                        },
                        legend: {
                            position: 'bottom',
                            align: 'start'
                        }
                    }
                });
        })
    })
}