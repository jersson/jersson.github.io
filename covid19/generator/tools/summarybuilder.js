'use strict'
const Builder = require('./builder');

class SummaryBuilder extends Builder{
     
    generateSummaryText(lastLine, previousLine) {
        const showSummary = lastLine[0];
        const title = lastLine[1];
        const cases = lastLine[2];
        const confirmed = lastLine[3];
        const recovered = lastLine[4];
        const deceased = lastLine[5];
        const link = lastLine[6];
        const alias = lastLine[7];
    
        const lastDayCases = cases - previousLine[2];
        const previousDayConfirmed = previousLine[3]
        const lastDayConfirmed = confirmed - previousDayConfirmed;
        const lastDayRecovered = recovered - previousLine[4];
        const previousDayDeceased = previousLine[5];
        const lastDayDeceased = deceased - previousDayDeceased;
    
        let summaryText = `//Generated file at ${new Date()}\n`;
        summaryText += 'const Summary = {\n';
        summaryText += 'data : () => {\n';
        summaryText += 'return {\n';
        summaryText += `show:${showSummary}\n`;
        summaryText += `,title:'${title}'\n`;
        summaryText += ',cases: [\n';
        summaryText += `{alias:'Pruebas realizadas', reported: '${this.formatNumber(cases)}', delta:'${this.formatNumber(lastDayCases)}+'}\n`;
        summaryText += `,{alias:'Confirmados', reported: '${this.formatNumber(confirmed)}', delta:'${this.formatNumber(lastDayConfirmed)}+'}\n`;
        summaryText += `,{alias:'Recuperados', reported: '${this.formatNumber(recovered)}', delta:'${this.formatNumber(lastDayRecovered)}+'}\n`;
        summaryText += `,{alias:'Fallecidos', reported: '${this.formatNumber(deceased)}', delta:'${this.formatNumber(lastDayDeceased)}+'}\n`;
        summaryText += `,{alias:'Mortalidad', reported: '${(100 * deceased / confirmed).toFixed(2)}%', delta:'${(100 * previousDayDeceased / previousDayConfirmed).toFixed(2)}%'}\n`;
        summaryText += ']\n';
        summaryText += ',source: {\n';
        summaryText += `link: '${link}'\n`;
        summaryText += `,alias: '${alias}'\n`;
        summaryText += '}\n';
        summaryText += '}\n';
        summaryText += '}\n';
        summaryText += '}\n';
        summaryText += 'module.exports = Summary;';
    
        return summaryText;
    
    }

    generateSummaryFile(summaryCsvFile) {
        this.fs.readFile(this.path.resolve(__dirname, '../data/', summaryCsvFile), 'utf8', (err, file) => {
            if (err){
                console.log(err);
            }
            else {
                const lines = file.split('\n');
                const lastLine = lines[lines.length - 1].split(',');
                const previousLine = lines[lines.length - 2].split(',');
                
                const summaryText = this.generateSummaryText(lastLine, previousLine);
    
                this.fs.writeFile(this.path.resolve(__dirname, '../dist/', 'summary.js'),summaryText, (err) => {
                    if (err)
                        console.log(err);
                });
            }
        });
    }
}

module.exports = SummaryBuilder;