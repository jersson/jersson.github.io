'use strict'
const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv

const summaryFile = 'summary.js';
const folderName = 'data';
const outputFolderName = 'dist';

function deploySummaryFile(summaryFile) {
    fs.copyFileSync(path.resolve(__dirname,'./dist/summary.js'), '../service/summary/data/summary.js');
}

function deployLocationsFile() {
    fs.copyFileSync(path.resolve(__dirname,'./dist/locations.js'), '../service/locations/data/locations.js');
}

function deployTopRegionalFile() {
    fs.copyFileSync(path.resolve(__dirname,'./dist/topregional.js'), '../service/topregional/data/topregional.js');
}

function deployCasesFile() {
    fs.copyFileSync(path.resolve(__dirname,'./dist/cases.js'), '../service/cases/data/cases.js');
}

const fileFlag = argv.file;
const generateFlag = argv.generate;

switch (fileFlag) {
    case 'summary':
        if (generateFlag) {
            console.log('🤖Generating summary file...');
        }
        console.log('🤖Deploying summary file...');
        deploySummaryFile(summaryFile)
        console.log('🤖Summary file has been deployed 😎');
        break;

    case 'locations':
        console.log('🤖Deploying locations file...');
        deployLocationsFile();
        console.log('🤖Locations file has been deployed 😎');    
        break;
    
    case 'topregional':
        console.log('🤖Deploying top-regional file...');
        deployTopRegionalFile()
        console.log('🤖Top-regional file has been deployed 😎');    
        break;

    case 'cases':
        console.log('🤖Deploying cases file...');
        deployCasesFile()
        console.log('🤖Cases file has been deployed 😎');    
        break;
    
    case 'all':
        console.log('(TODO)deploying all files...');
        //deploySummaryFile(summaryFile)
        break;

    default:
        console.log('missing argument');
        break;
}

