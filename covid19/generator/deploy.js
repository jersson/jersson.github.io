'use strict'

const argv = require('yargs').argv
const Deployer = require('./tools/deployer');

const fileFlag = argv.file;
const generateFlag = argv.generate;
const deployer = new Deployer();

switch (fileFlag) {
    case 'summary':
        if (generateFlag) {
            console.log('🤖(TODO)Generating summary file...');
        }
        console.log('🤖Deploying summary file...');        
        deployer.deploySummaryFile();
        console.log('🤖Summary file has been deployed 😎');
        break;

    case 'locations':
        console.log('🤖Deploying locations file...');
        deployer.deployLocationsFile();
        console.log('🤖Locations file has been deployed 😎');    
        break;
    
    case 'topregional':
        console.log('🤖Deploying top-regional file...');
        deployer.deployTopRegionalFile()
        console.log('🤖Top-regional file has been deployed 😎');    
        break;

    case 'cases':
        console.log('🤖Deploying cases file...');
        deployer.deployCasesFile()
        console.log('🤖Cases file has been deployed 😎');    
        break;
    
    case 'all':
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