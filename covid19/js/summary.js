function renderSummary() {
    const url = 'https://us-central1-virtual-bonito-170805.cloudfunctions.net/covidSummary';

    fetch(url).then((res) => {
        res.json().then((result) => {

            let panel = document.getElementById('floating-panel');
            let displayPanel = 'none';

            if (result.show) {
                displayPanel = 'flex'

                let htmlSummary = '<div class="group">';
                htmlSummary += `<div class="subject-2 info">${result.title}:</div>`;
    
                result.cases.forEach(caseInfo => {
                    htmlSummary += `<div class="subject-2">${caseInfo.alias}: <span class="info number">${caseInfo.reported} (${caseInfo.delta}+)</span></div>`;
                });
    
                htmlSummary += '<div class="subject-2">Fuente:';
                htmlSummary += `<span id="info"><a href="${result.source.link}">${result.source.alias}</a></span>`;
                htmlSummary += '</div>';
    
                htmlSummary += '</div>';
                panel.innerHTML = htmlSummary;
            }
            panel.style.display = displayPanel;
        })
    })
}