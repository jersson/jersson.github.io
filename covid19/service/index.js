exports.covidPeru = (req, res) => {
    let locations = [{
        region   : "lima",
        latitude : -12.0464,
        longitude: -77.0428, 
        confirmed: 307
    },{
        region : "loreto",
        latitude : -3.74912,
        longitude: -73.25383, 
        confirmed: 16
    },{
        region : "junin",
        latitude : -12.069156,
        longitude: -75.208648, 
        confirmed: 10
    },{
        region : "lambayeque",
        latitude : -6.7011099,
        longitude: -79.9061127, 
        confirmed: 8
    },{
        region : "callao",
        latitude : -12.0565901,
        longitude: -77.1181412, 
        confirmed: 8
    },{
        region : "ancash",
        latitude : -9.1366700,
        longitude: -77.7602800, 
        confirmed: 4
    },{
        region : "arequipa",
        latitude : -16.3988900,
        longitude: -71.5350000, 
        confirmed: 7
    },{
        region : "huanuco",
        latitude : -9.925791,
        longitude: -76.242772, 
        confirmed: 2
    },{
        region : "la-libertad",
        latitude : -8.1159897,
        longitude: -79.0299835, 
        confirmed: 4
    },{
        region : "piura",
        latitude : -5.1944900,
        longitude: -80.6328200, 
        confirmed: 19 
    },{
        region : "cusco",
        latitude : -13.516667,
        longitude: -71.978771, 
        confirmed: 6
    },{
        region : "ica",
        latitude : -13.71029,
        longitude: -76.2053833, 
        confirmed: 2
    },{
        region : "madre-de-dios",
        latitude : -12.594215,
        longitude: -69.176401, 
        confirmed: 1
    },{
        region : "san-martin",
        latitude : -6.034608,
        longitude: -76.974733, 
        confirmed: 1
    }];

    res.set('Access-Control-Allow-Origin', 'https://jersson.github.io')

    res.send(locations);
}