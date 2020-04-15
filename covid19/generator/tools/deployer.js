class Deployer {
    constructor(){
        this.fs = require('fs');
        this.path = require('path');
    };

    deploySummaryFile(){
        this.fs.copyFileSync(this.path.resolve(__dirname,'../dist/summary.js'), '../service/summary/data/summary.js');
    };

    deployLocationsFile(){
        this.fs.copyFileSync(this.path.resolve(__dirname,'../dist/locations.js'), '../service/locations/data/locations.js');
    };
    
    deployTopRegionalFile(){
        this.fs.copyFileSync(this.path.resolve(__dirname,'../dist/topregional.js'), '../service/topregional/data/topregional.js');
    };
    
    deployCasesFile(){
        this.fs.copyFileSync(this.path.resolve(__dirname,'../dist/cases.js'), '../service/cases/data/cases.js');
    };
};

module.exports = Deployer;