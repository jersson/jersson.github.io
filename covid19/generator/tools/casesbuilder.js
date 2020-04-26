'use strict'
const Builder = require('./builder');

class CasesBuilder extends Builder{
    getDiscardedCases(region) {
        const daysToAnalyse = this.config.daysToAnalyse;
        let tested = region.cases.tested.data.slice(region.cases.tested.data.length - daysToAnalyse, region.cases.tested.data.length);
        let confirmed = region.cases.confirmed.data.slice(region.cases.confirmed.data.length - daysToAnalyse, region.cases.confirmed.data.length);
        let discardedCases = [];
    
        for (let index = 0; index < daysToAnalyse; index++) {
            let discardedCase = tested[index] - confirmed[index];
            discardedCases.push(discardedCase);
        }
    
        return discardedCases;
    };
    
    getTreatmentCases(region) {
        const daysToAnalyse = this.config.daysToAnalyse;
        let confirmed = region.cases.confirmed.data.slice(region.cases.confirmed.data.length - daysToAnalyse, region.cases.confirmed.data.length);
        let recovered = region.cases.recovered.data.slice(region.cases.recovered.data.length - daysToAnalyse, region.cases.recovered.data.length);
        let deceased = region.cases.deceased.data.slice(region.cases.deceased.data.length - daysToAnalyse, region.cases.deceased.data.length);
        let treatmentCases = [];
    
        for (let index = 0; index < daysToAnalyse; index++) {
            let treatmentCase = confirmed[index] - recovered[index] - deceased[index];
            treatmentCases.push(treatmentCase);
        }
    
        return treatmentCases;
    };
    
    getCasesDataSet(region) {
        const daysToAnalyse = this.config.daysToAnalyse;
    
        let dataset = [];
    
        let tested = {};
        tested.label = region.cases.tested.title;
        tested.data = region.cases.tested.data.slice(region.cases.tested.data.length - daysToAnalyse, region.cases.tested.data.length);
        tested.borderColor = region.cases.tested.borderColor;
        tested.fill = region.cases.tested.fill;
    
        dataset.push(tested);
    
        let discarded = {};
        discarded.label = region.cases.discarded.title;
        discarded.data = this.getDiscardedCases(region);
        discarded.borderColor = region.cases.discarded.borderColor;
        discarded.fill = region.cases.discarded.fill;
    
        dataset.push(discarded);
    
        let confirmed = {};
        confirmed.label = region.cases.confirmed.title;
        confirmed.data = region.cases.confirmed.data.slice(region.cases.confirmed.data.length - daysToAnalyse, region.cases.confirmed.data.length);
        confirmed.borderColor = region.cases.confirmed.borderColor;
        confirmed.fill = region.cases.confirmed.fill;
    
        dataset.push(confirmed);
    
        let recovered = {};
        recovered.label = region.cases.recovered.title;
        recovered.data = region.cases.recovered.data.slice(region.cases.recovered.data.length - daysToAnalyse, region.cases.recovered.data.length);
        recovered.borderColor = region.cases.recovered.borderColor;
        recovered.fill = region.cases.recovered.fill;
    
        dataset.push(recovered);
    
        let treatment = {};
        treatment.label = region.cases.treatment.title;
        treatment.data = this.getTreatmentCases(region);
        treatment.borderColor = region.cases.treatment.borderColor;
        treatment.fill = region.cases.treatment.fill;
    
        dataset.push(treatment);

        let specialTreatment = {};
        specialTreatment.label = region.cases.treatment.special.title;
        specialTreatment.data = region.cases.treatment.special.data.slice(region.cases.treatment.special.data.length - daysToAnalyse, region.cases.treatment.special.data.length);
        specialTreatment.borderColor = region.cases.treatment.special.borderColor;
        specialTreatment.fill = region.cases.treatment.special.fill;

        dataset.push(specialTreatment);


        let deceased = {};
        deceased.label = region.cases.deceased.title;
        deceased.data = region.cases.deceased.data.slice(region.cases.deceased.data.length - daysToAnalyse, region.cases.deceased.data.length);
        deceased.borderColor = region.cases.deceased.borderColor;
        deceased.fill = region.cases.deceased.fill;
    
        dataset.push(deceased);
    
        return dataset;
    };
    
    generateCasesText() {
        const daysToAnalyse = this.config.daysToAnalyse;
        let daysTitle = this.config.days.slice(this.config.days.length - daysToAnalyse, this.config.days.length);
    
        let cases = {
            data: () => {
                return {
                    labels: daysTitle, 
                    datasets: this.getCasesDataSet(this.config.regions.filter(r => r.region == 'peru')[0])
                }
            }
        };
    
        let casesText = `//Generated file at ${new Date()}\n`;
        casesText += 'const Cases = {\n';
        casesText += 'data : () => {\n';
        casesText += 'return ';
        casesText += JSON.stringify(cases.data());
        casesText += '\n';
        casesText += '}\n';
        casesText += '}\n';
        casesText += 'module.exports = Cases;';    
    
        return casesText;   
    };
    
    generateCasesFile() {
        let casesText = this.generateCasesText();
    
        this.fs.writeFile(this.path.resolve(__dirname, '../dist/', 'cases.js'),casesText, (err) => {
            if (err)
                console.log(err);
        });
    };
}

module.exports = CasesBuilder;

