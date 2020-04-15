'use strict'
const argv = require('yargs').argv
const SummaryBuilder = require('./tools/summarybuilder');
const LocationsBuilder = require('./tools/locationsbuilder');
const TopRegionalBuilder = require('./tools/topregionalbuilder');
const CasesBuilder = require('./tools/casesbuilder');

const summaryBuilder = new SummaryBuilder();
const locationsBuilder = new LocationsBuilder();
const topRegionalBuilder = new TopRegionalBuilder();
const casesBuilder = new CasesBuilder();

const fileFlag = argv.file;

switch (fileFlag) {
    case 'summary':
        console.log('🤖Generating summary file...');
        summaryBuilder.generateSummaryFile()
        console.log('🤖Summary file has been generated 😎');
        break;

    case 'locations':
        console.log('🤖Generating locations file...');
        locationsBuilder.generateLocationsFile();
        console.log('🤖Locations file has been generated 😎');
        break;
    
    case 'topregional':
        console.log('🤖Generating top-regional file...');
        topRegionalBuilder.generateTopRegionalFile();
        console.log('🤖Top-regional file has been generated 😎');
        break;

    case 'cases':
        console.log('🤖Generating cases file...');
        casesBuilder.generateCasesFile();
        console.log('🤖Cases file has been generated 😎');
        break;
    
    case 'all':
        console.log('🤖Generating all files...');
        summaryBuilder.generateSummaryFile()
        locationsBuilder.generateLocationsFile();
        topRegionalBuilder.generateTopRegionalFile();
        casesBuilder.generateCasesFile();
        console.log('🤖All files had been generated 😎');
        break;

    default:
        console.log('missing argument');
        break;
}

