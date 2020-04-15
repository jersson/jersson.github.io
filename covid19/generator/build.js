'use strict'
const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv

const summaryCsvFile = 'summary.csv';
const folderName = 'data';
const outputFolderName = 'dist';

const generalConfiguration = require('./data/configuration');
const config = generalConfiguration.data();
const daysToAnalyse = config.daysToAnalyse;

//TODO: remove after refactor all generators
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const SummaryBuilder = require('./tools/summarybuilder');
const LocationsBuilder = require('./tools/locationsbuilder');

const summaryBuilder = new SummaryBuilder();
const locationsBuilder = new LocationsBuilder();

function generateTopRegionalText() {
    //const config = generalConfiguration.data();
    let daysTitle = config.days.slice(config.days.length - daysToAnalyse, config.days.length);

    let topRegional = {
        data: () => {
            return {
                labels: daysTitle, 
                datasets: 
                    config.regions.sort((r1,r2) => {
                        return r2.confirmed[r2.confirmed.length - 1] - r1.confirmed[r1.confirmed.length - 1]
                    }).slice(0,6)
                    .map(r => {
                        let item = {};
                        item.label = r.title;
                        item.data = r.confirmed.slice(r.confirmed.length - daysToAnalyse, r.confirmed.length);
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
    //const daysToAnalyse = 7
    const topRegionalText = generateTopRegionalText();

    fs.writeFile(path.resolve(__dirname, outputFolderName, 'topregional.js'),topRegionalText, (err) => {
        if (err)
            console.log(err);
    });
}

function getDiscardedCases(region) {
    //let daysToAnalyse = generalConfiguration.data().daysToAnalyse;
    let tested = region.cases.tested.data.slice(region.cases.tested.data.length - daysToAnalyse, region.cases.tested.data.length);
    let confirmed = region.cases.confirmed.data.slice(region.cases.confirmed.data.length - daysToAnalyse, region.cases.confirmed.data.length);
    let discardedCases = [];

    for (let index = 0; index < daysToAnalyse; index++) {
        let discardedCase = tested[index] - confirmed[index];
        discardedCases.push(discardedCase);
    }

    return discardedCases;
}

function getTreatmentCases(region) {
    //let daysToAnalyse = generalConfiguration.data().daysToAnalyse;
    let confirmed = region.cases.confirmed.data.slice(region.cases.confirmed.data.length - daysToAnalyse, region.cases.confirmed.data.length);
    let recovered = region.cases.recovered.data.slice(region.cases.recovered.data.length - daysToAnalyse, region.cases.recovered.data.length);
    let deceased = region.cases.deceased.data.slice(region.cases.deceased.data.length - daysToAnalyse, region.cases.deceased.data.length);
    let treatmentCases = [];

    for (let index = 0; index < daysToAnalyse; index++) {
        let treatmentCase = confirmed[index] - recovered[index] - deceased[index];
        treatmentCases.push(treatmentCase);
    }

    return treatmentCases;
}

function getCasesDataSet(region) {
    // const config = generalConfiguration.data();
    // const daysToAnalyse = config.daysToAnalyse;

    let dataset = [];

    let tested = {};
    tested.label = region.cases.tested.title;
    tested.data = region.cases.tested.data.slice(region.cases.tested.data.length - daysToAnalyse, region.cases.tested.data.length);
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
    treatment.data = getTreatmentCases(region);
    treatment.borderColor = region.cases.treatment.borderColor;
    treatment.fill = region.cases.treatment.fill;

    dataset.push(treatment);

    let deceased = {};
    deceased.label = region.cases.deceased.title;
    deceased.data = region.cases.deceased.data.slice(region.cases.deceased.data.length - daysToAnalyse, region.cases.deceased.data.length);
    deceased.borderColor = region.cases.deceased.borderColor;
    deceased.fill = region.cases.deceased.fill;

    dataset.push(deceased);

    return dataset;
}

function generateCasesText() {
    // const config = generalConfiguration.data();
    let daysTitle = config.days.slice(config.days.length - daysToAnalyse, config.days.length);

    let cases = {
        data: () => {
            return {
                labels: daysTitle, 
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
    // const daysToAnalyse = 7
    const casesText = generateCasesText();

    fs.writeFile(path.resolve(__dirname, outputFolderName, 'cases.js'),casesText, (err) => {
        if (err)
            console.log(err);
    });
}

const fileFlag = argv.file;

switch (fileFlag) {
    case 'summary':
        console.log('🤖Generating summary file...');
        summaryBuilder.generateSummaryFile(summaryCsvFile)
        console.log('🤖Summary file has been generated 😎');
        break;

    case 'locations':
        console.log('🤖Generating locations file...');
        locationsBuilder.generateLocationsFile();
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
        console.log('🤖Generating all files...');
        generateSummaryFile(summaryCsvFile)
        generateLocationsFile();
        generateTopRegionalFile();
        generateCasesFile();
        console.log('🤖All files had been generated 😎');
        break;

    default:
        console.log('missing argument');
        break;
}

