'use strict'
const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv

const summaryCsvFile = 'summary.csv';
const folderName = 'data';
const outputFolderName = 'dist';

const generalConfiguration = require('./data/configuration');

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function generateSummaryText(lastLine, previousLine) {
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
    summaryText += `{alias:'Pruebas realizadas', reported: '${formatNumber(cases)}', delta:'${formatNumber(lastDayCases)}+'}\n`;
    summaryText += `,{alias:'Confirmados', reported: '${formatNumber(confirmed)}', delta:'${formatNumber(lastDayConfirmed)}+'}\n`;
    summaryText += `,{alias:'Recuperados', reported: '${formatNumber(recovered)}', delta:'${formatNumber(lastDayRecovered)}+'}\n`;
    summaryText += `,{alias:'Fallecidos', reported: '${formatNumber(deceased)}', delta:'${formatNumber(lastDayDeceased)}+'}\n`;
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

function generateSummaryFile(summaryCsvFile) {
    return fs.readFile(path.resolve(__dirname, folderName, summaryCsvFile), 'utf8', (err, file) => {
        if (err){
            console.log(err);
        }
        else {
            const lines = file.split('\n');
            const lastLine = lines[lines.length - 1].split(',');
            const previousLine = lines[lines.length - 2].split(',');
        
            const summaryText = generateSummaryText(lastLine, previousLine);
            fs.writeFile(path.resolve(__dirname, outputFolderName, 'summary.js'),summaryText, (err) => {
                if (err)
                    console.log(err);
            });
        }
    });
}

function generateLocationsText(daysToAnalyse) {
    const config = generalConfiguration.data();
    let daysTitle = config.days.slice(config.days.length - daysToAnalyse, daysToAnalyse);

    let locations = {
        data: () => {
            return {
                regions: config.regions.filter(r=>r.region != 'peru').map(r => {
                    let item = {};
                    let delta = r.confirmed[r.confirmed.length - 1] - r.confirmed[r.confirmed.length - 2];
                    let change = ''

                    if (delta > 0){
                        change = `${delta}+`;
                    }else if (delta == 0) {
                        change = '=';
                    } else {
                        change = `${-1 * delta}-`;
                    }

                    item.region = r.region;
                    item.title = r.title;
                    item.latitude = r.latitude;
                    item.longitude = r.longitude;
                    item.confirmed = formatNumber(r.confirmed[r.confirmed.length - 1]);
                    item.change = change;
                    return item;
                })
            }
        }
    };

    let locationsText = `//Generated file at ${new Date()}\n`;
    locationsText += 'const Locations = {\n';
    locationsText += 'data : () => {\n';
    locationsText += 'return ';
    locationsText += JSON.stringify(locations.data().regions);
    locationsText += '\n';
    locationsText += '}\n';
    locationsText += '}\n';
    locationsText += 'module.exports = Locations;';    

    return locationsText;
}

function generateLocationsFile() {
    const daysToAnalyse = 7; 
    let locationsText = generateLocationsText(daysToAnalyse);

    fs.writeFile(path.resolve(__dirname, outputFolderName, 'locations.js'),locationsText, (err) => {
        if (err)
            console.log(err);
    });

}

function generateTopRegionalText(daysToAnalyse) {
    const config = generalConfiguration.data();
    let daysTitle = config.days.slice(config.days.length - daysToAnalyse, daysToAnalyse);

    let topRegional = {
        data: () => {
            return {
                labels: config.days.slice(config.days.length - daysToAnalyse, daysToAnalyse), 
                datasets: 
                    config.regions.sort((r1,r2) => {
                        return r2.confirmed[r2.confirmed.length - 1] - r1.confirmed[r1.confirmed.length - 1]
                    }).slice(0,6)
                    .map(r => {
                        let item = {};
                        item.label = r.title;
                        item.data = r.confirmed.slice(r.confirmed.length - daysToAnalyse, daysToAnalyse);
                        item.borderColor = r.borderColor;
                        item.fill = r.fill;
                        return item;
                    })
            }
        }
    };

    let topRegionalText = `//Generated file at ${new Date()}\n`;
    topRegionalText += 'const TopRegional = {\n';
    topRegionalText += 'data : () => {\n';
    topRegionalText += 'return ';
    topRegionalText += JSON.stringify(topRegional.data());
    topRegionalText += '\n';
    topRegionalText += '}\n';
    topRegionalText += '}\n';
    topRegionalText += 'module.exports = TopRegional;';    

    return topRegionalText;   
}

function generateTopRegionalFile() {
    const daysToAnalyse = 7
    const topRegionalText = generateTopRegionalText(daysToAnalyse);

    fs.writeFile(path.resolve(__dirname, outputFolderName, 'topregional.js'),topRegionalText, (err) => {
        if (err)
            console.log(err);
    });
}

function getDiscardedCases(region) {
    let daysToAnalyse = generalConfiguration.data().daysToAnalyse;
    let tested = region.cases.tested.data.slice(region.cases.tested.data.length - daysToAnalyse, daysToAnalyse);
    let confirmed = region.cases.confirmed.data.slice(region.cases.confirmed.data.length - daysToAnalyse, daysToAnalyse);
    let discardedCases = [];

    for (let index = 0; index < daysToAnalyse; index++) {
        let discardedCase = tested[index] - confirmed[index];
        discardedCases.push(discardedCase);
    }

    return discardedCases;
}

function getTreatmentCases(region) {
    let daysToAnalyse = generalConfiguration.data().daysToAnalyse;
    let confirmed = region.cases.confirmed.data.slice(region.cases.confirmed.data.length - daysToAnalyse, daysToAnalyse);
    let recovered = region.cases.recovered.data.slice(region.cases.recovered.data.length - daysToAnalyse, daysToAnalyse);
    let deceased = region.cases.deceased.data.slice(region.cases.deceased.data.length - daysToAnalyse, daysToAnalyse);
    let treatmentCases = [];

    for (let index = 0; index < daysToAnalyse; index++) {
        let treatmentCase = confirmed[index] - recovered[index] - deceased[index];
        treatmentCases.push(treatmentCase);
    }

    return treatmentCases;
}

function getCasesDataSet(region) {
    let dataset = [];

    let tested = {};
    tested.label = region.cases.tested.title;
    tested.data = region.cases.tested.data;
    tested.borderColor = region.cases.tested.borderColor;
    tested.fill = region.cases.tested.fill;

    dataset.push(tested);

    let discarded = {};
    discarded.label = region.cases.discarded.title;
    discarded.data = getDiscardedCases(region);
    discarded.borderColor = region.cases.discarded.borderColor;
    discarded.fill = region.cases.discarded.fill;

    dataset.push(discarded);

    let confirmed = {};
    confirmed.label = region.cases.confirmed.title;
    confirmed.data = region.cases.confirmed.data;
    confirmed.borderColor = region.cases.confirmed.borderColor;
    confirmed.fill = region.cases.confirmed.fill;

    dataset.push(confirmed);

    let recovered = {};
    recovered.label = region.cases.recovered.title;
    recovered.data = region.cases.recovered.data;
    recovered.borderColor = region.cases.recovered.borderColor;
    recovered.fill = region.cases.recovered.fill;

    dataset.push(recovered);

    let treatment = {};
    treatment.label = region.cases.treatment.title;
    treatment.data = getTreatmentCases(region);
    treatment.borderColor = region.cases.treatment.borderColor;
    treatment.fill = region.cases.treatment.fill;

    dataset.push(treatment);

    let deceased = {};
    deceased.label = region.cases.deceased.title;
    deceased.data = region.cases.deceased.data;
    deceased.borderColor = region.cases.deceased.borderColor;
    deceased.fill = region.cases.deceased.fill;

    dataset.push(deceased);

    return dataset;
}

function generateCasesText(daysToAnalyse) {
    const config = generalConfiguration.data();
    let daysTitle = config.days.slice(config.days.length - daysToAnalyse, daysToAnalyse);

    let cases = {
        data: () => {
            return {
                labels: config.days.slice(config.days.length - daysToAnalyse, daysToAnalyse), 
                datasets: getCasesDataSet(config.regions.filter(r => r.region == 'peru')[0])
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
}

function generateCasesFile() {
    const daysToAnalyse = 7
    const casesText = generateCasesText(daysToAnalyse);

    fs.writeFile(path.resolve(__dirname, outputFolderName, 'cases.js'),casesText, (err) => {
        if (err)
            console.log(err);
    });
}

const fileFlag = argv.file;

switch (fileFlag) {
    case 'summary':
        generateSummaryFile(summaryCsvFile)
        break;

    case 'locations':
        console.log('🤖Generating locations file...');
        generateLocationsFile();
        console.log('🤖Locations file has been generated 😎');
        break;
    
    case 'topregional':
        console.log('🤖Generating top-regional file...');
        generateTopRegionalFile();
        console.log('🤖Top-regional file has been generated 😎');
        break;

    case 'cases':
        console.log('🤖Generating cases file...');
        generateCasesFile();
        console.log('🤖Cases file has been generated 😎');
        break;
    
    case 'all':
        console.log('generate all files');
        generateSummaryFile(summaryCsvFile)
        break;

    default:
        console.log('missing argument');
        break;
}

