function displaySummaryDetails(summaryDetailsId, displayIconId) {
    const details = document.getElementById(summaryDetailsId);
    const icon = document.getElementById(displayIconId);
    
    if (details.style.display === 'block') {
        details.style.display = 'none';
        icon.className = 'fas fa-plus-circle';
    } else {
        details.style.display = 'block';
        icon.className = 'fas fa-minus-circle';        
    }
}

function renderSummary() {
    const url = 'https://us-central1-virtual-bonito-170805.cloudfunctions.net/covidSummary';
    fetch(url).then((res) => {
        res.json().then((result) => {

            let panel = document.getElementById('floating-panel');
            let displayPanel = 'none';

            if (result.show) {
                displayPanel = 'flex'

                let htmlSummary = '<div class="group">';
                htmlSummary += `<div class="subject-2>Muchas gracias por su visita, ya no estoy actualizando este sitio web. Por favor, cuídense, piensen en sus familiares y amigos.</div>`;
                htmlSummary += `<div class="subject-2 info hand" onclick="displaySummaryDetails('summary-details','display-icon');"><i id="display-icon" class="fas fa-minus-circle"></i> ${result.title}</div>`;
                
                htmlSummary += '<div id="summary-details" style="display:block;">';

                result.cases.forEach(caseInfo => {
                    htmlSummary += `<div class="subject-2">- ${caseInfo.alias}: <span class="info number">${caseInfo.reported} (${caseInfo.delta})</span></div>`;
                });
    
                htmlSummary += '<div class="subject-2">Fuente: ';
                htmlSummary += `<span id="info"><a href="${result.source.link}">${result.source.alias}</a></span>`;
                htmlSummary += '</div>';

                htmlSummary += '</div>';
    
                htmlSummary += '</div>';
                panel.innerHTML = htmlSummary;
            }
            panel.style.display = displayPanel;
        })
    })
}