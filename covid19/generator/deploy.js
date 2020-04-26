'use strict'

const argv = require('yargs').argv
const Deployer = require('./tools/deployer');

const SummaryBuilder = require('./tools/summarybuilder');
const LocationsBuilder = require('./tools/locationsbuilder');
const TopRegionalBuilder = require('./tools/topregionalbuilder');
const CasesBuilder = require('./tools/casesbuilder');

const summaryBuilder = new SummaryBuilder();
const locationsBuilder = new LocationsBuilder();
const topRegionalBuilder = new TopRegionalBuilder();
const casesBuilder = new CasesBuilder();


const fileFlag = argv.file;
const generateFlag = argv.generate;
const deployer = new Deployer();

switch (fileFlag) {
    case 'summary':
        if (generateFlag) {
            console.log('🤖Generating summary file...');
            summaryBuilder.generateSummaryFile()
            console.log('🤖Summary file has been generated 😎');
        }
        console.log('🤖Deploying summary file...');        
        deployer.deploySummaryFile();
        console.log('🤖Summary file has been deployed 😎');
        break;

    case 'locations':
        if (generateFlag) {
            console.log('🤖Generating locations file...');
            locationsBuilder.generateLocationsFile();
            console.log('🤖Locations file has been generated 😎');        
        }
        console.log('🤖Deploying locations file...');
        deployer.deployLocationsFile();
        console.log('🤖Locations file has been deployed 😎');    
        break;
    
    case 'topregional':
        if (generateFlag) {
            console.log('🤖Generating top-regional file...');
            topRegionalBuilder.generateTopRegionalFile();
            console.log('🤖Top-regional file has been generated 😎');     
        }
        console.log('🤖Deploying top-regional file...');
        deployer.deployTopRegionalFile()
        console.log('🤖Top-regional file has been deployed 😎');    
        break;

    case 'cases':
        if (generateFlag) {
            console.log('🤖Generating cases file...');
            casesBuilder.generateCasesFile();
            console.log('🤖Cases file has been generated 😎');   
        }
        console.log('🤖Deploying cases file...');
        deployer.deployCasesFile()
        console.log('🤖Cases file has been deployed 😎');    
        break;
    
    case 'all':
        if (generateFlag) {
            console.log('🤖Generating all files...');
            summaryBuilder.generateSummaryFile()
            locationsBuilder.generateLocationsFile();
            topRegionalBuilder.generateTopRegionalFile();
            casesBuilder.generateCasesFile();
            console.log('🤖All files has been generated 😎');
        }
        console.log('🤖Deploying all files...');
        deployer.deploySummaryFile()
        deployer.deployLocationsFile();
        deployer.deployTopRegionalFile()
        deployer.deployCasesFile()
        console.log('🤖All files had been deployed 😎');    
        break;

    default:
        console.log('missing argument');
        break;
}