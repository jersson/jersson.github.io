'use strict'
const Builder = require('./builder');

class LocationsBuilder extends Builder{
    generateLocationsText() {    
        let locations = {
            data: () => {
                return {
                    regions: this.config.regions.filter(r => r.region != 'peru').map(r => {
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
                        item.confirmed = r.confirmed[r.confirmed.length - 1];
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
    
    generateLocationsFile() {
        const locationsText = this.generateLocationsText();
    
        this.fs.writeFile(this.path.resolve(__dirname, '../dist/', 'locations.js'),locationsText, (err) => {
            if (err)
                console.log(err);
        });
    
    }
}

module.exports = LocationsBuilder;