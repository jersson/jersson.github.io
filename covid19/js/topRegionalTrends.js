function renderTopRegionalTrends(chart) {
    const url = 'https://us-central1-virtual-bonito-170805.cloudfunctions.net/covidTopRegionalTrends';
    
    fetch(url).then((res) => {
        res.json().then((result) => {
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
                            text: 'Casos confirmados Perú + Top 5 regional, últimos 7 días'
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