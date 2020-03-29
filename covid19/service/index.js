exports.covidPeru = (req, res) => {
    let locations = [{
        region   : "lima",
        title    : "Lima",
        latitude : -12.0464,
        longitude: -77.0428, 
        confirmed: 639,
        change: "121+"
    },{
        region : "loreto",
        title: "Loreto",
        latitude : -3.74912,
        longitude: -73.25383, 
        confirmed: 52, 
        change: "25+"
    },{
        region : "junin",
        title: "Junín",
        latitude : -12.069156,
        longitude: -75.208648, 
        confirmed: 13,
        change : "1+"
    },{
        region : "lambayeque",
        title: "Lambayeque",
        latitude : -6.7011099,
        longitude: -79.9061127, 
        confirmed: 22,
        change: "7+"
    },{
        region : "callao",
        title: "Callao",
        latitude : -12.0565901,
        longitude: -77.1181412, 
        confirmed: 29,
        change: "11+"
    },{
        region : "ancash",
        title : "Áncash",
        latitude : -9.1366700,
        longitude: -77.7602800, 
        confirmed: 6,
        change: "="
    },{
        region : "arequipa",
        title: "Arequipa",
        latitude : -16.3988900,
        longitude: -71.5350000, 
        confirmed: 15,
        change: "="
    },{
        region : "huanuco",
        title: "Huánuco",
        latitude : -9.925791,
        longitude: -76.242772, 
        confirmed: 4,
        change: "="
    },{
        region : "la-libertad",
        title: "La Libertad",
        latitude : -8.1159897,
        longitude: -79.0299835, 
        confirmed: 13,
        change: "3+"
    },{
        region : "piura",
        title: "Piura",
        latitude : -5.1944900,
        longitude: -80.6328200, 
        confirmed: 21, 
        change: "1+"
    },{
        region : "cusco",
        title: "Cusco",
        latitude : -13.516667,
        longitude: -71.978771, 
        confirmed: 17,
        change: "6+"
    },{
        region : "ica",
        title: "Ica",
        latitude : -13.71029,
        longitude: -76.2053833, 
        confirmed: 5,
        change: "1+"
    },{
        region : "madre-de-dios",
        title: "Madre de Dios",
        latitude : -12.594215,
        longitude: -69.176401, 
        confirmed: 1,
        change: "="
    },{
        region : "san-martin",
        title: "San Martín",
        latitude : -6.034608,
        longitude: -76.974733, 
        confirmed: 3,
        change: "1+"  
    },{
        region : "tumbes",
        title: "Tumbes",
        latitude : -3.570698,
        longitude: -80.459641, 
        confirmed: 8,
        change: "2+"
    },{
        region : "cajamarca",
        title: "Cajamarca",
        latitude : -7.157181,
        longitude: -78.517542, 
        confirmed: 1,
        change: "="
    },{
        region : "pasco",
        title: "Pasco",
        latitude : -10.683354,
        longitude: -76.256148, 
        confirmed: 1,
        change: "1+"
    },{
        region : "tacna",
        title: "Tacna",
        latitude : -18.013473,
        longitude: -70.250829, 
        confirmed: 1,
        change: "1+"
    }];

    res.set('Access-Control-Allow-Origin', 'https://jersson.github.io')

    res.send(locations);
}