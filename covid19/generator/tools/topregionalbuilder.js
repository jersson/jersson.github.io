'use strict'
const Builder = require('./builder');

class TopRegionalBuilder extends Builder{
    generateTopRegionalText() {
        const daysToAnalyse = this.config.daysToAnalyse;
        let daysTitle = this.config.days.slice(this.config.days.length - daysToAnalyse, this.config.days.length);
    
        let topRegional = {
            data: () => {
                return {
                    labels: daysTitle, 
                    datasets: 
                        this.config.regions.sort((r1,r2) => {
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
    
    generateTopRegionalFile() {
        const topRegionalText = this.generateTopRegionalText();
    
        this.fs.writeFile(this.path.resolve(__dirname, '../dist/', 'topregional.js'),topRegionalText, (err) => {
            if (err)
                console.log(err);
        });
    }
}

module.exports = TopRegionalBuilder;