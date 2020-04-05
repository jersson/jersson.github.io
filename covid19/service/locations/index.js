exports.covidLocations = (req, res) => {
    let locations = [{
        region   : "lima",
        title    : "Lima",
        latitude : -12.0464,
        longitude: -77.0428, 
        confirmed: 1639,
        change: "382+"
    },{
        region : "loreto",
        title: "Loreto",
        latitude : -3.74912,
        longitude: -73.25383, 
        confirmed: 143, 
        change: "37+"
    },{
        region : "junin",
        title: "Junín",
        latitude : -12.069156,
        longitude: -75.208648, 
        confirmed: 25,
        change : "="
    },{
        region : "lambayeque",
        title: "Lambayeque",
        latitude : -6.7011099,
        longitude: -79.9061127, 
        confirmed: 100,
        change: "45+"
    },{
        region : "callao",
        title: "Callao",
        latitude : -12.0565901,
        longitude: -77.1181412, 
        confirmed: 89,
        change: "25+"
    },{
        region : "ancash",
        title : "Áncash",
        latitude : -9.1366700,
        longitude: -77.7602800, 
        confirmed: 23,
        change: "5+"
    },{
        region : "arequipa",
        title: "Arequipa",
        latitude : -16.3988900,
        longitude: -71.5350000, 
        confirmed: 51,
        change: "14+"
    },{
        region : "huanuco",
        title: "Huánuco",
        latitude : -9.925791,
        longitude: -76.242772, 
        confirmed: 6,
        change: "="
    },{
        region : "la-libertad",
        title: "La Libertad",
        latitude : -8.1159897,
        longitude: -79.0299835, 
        confirmed: 50,
        change: "="
    },{
        region : "piura",
        title: "Piura",
        latitude : -5.1944900,
        longitude: -80.6328200, 
        confirmed: 29, 
        change: "2+"
    },{
        region : "cusco",
        title: "Cusco",
        latitude : -13.516667,
        longitude: -71.978771, 
        confirmed: 52,
        change: "4+"
    },{
        region : "ica",
        title: "Ica",
        latitude : -13.71029,
        longitude: -76.2053833, 
        confirmed: 14,
        change: "5+"
    },{
        region : "madre-de-dios",
        title: "Madre de Dios",
        latitude : -12.594215,
        longitude: -69.176401, 
        confirmed: 2,
        change: "="
    },{
        region : "san-martin",
        title: "San Martín",
        latitude : -6.034608,
        longitude: -76.974733, 
        confirmed: 8,
        change: "="  
    },{
        region : "tumbes",
        title: "Tumbes",
        latitude : -3.570698,
        longitude: -80.459641, 
        confirmed: 26,
        change: "6+"
    },{
        region : "cajamarca",
        title: "Cajamarca",
        latitude : -7.157181,
        longitude: -78.517542, 
        confirmed: 6,
        change: "="
    },{
        region : "pasco",
        title: "Pasco",
        latitude : -10.683354,
        longitude: -76.256148, 
        confirmed: 3,
        change: "1+"
    },{
        region : "tacna",
        title: "Tacna",
        latitude : -18.013473,
        longitude: -70.250829, 
        confirmed: 9,
        change: "6+"
    },{
        region : "ayacucho",
        title: "Ayacucho",
        latitude : -13.160333,
        longitude: -74.225743, 
        confirmed: 2,
        change: "2+"
    },{
        region : "huancavelica",
        title: "Huancavelica",
        latitude : -12.787246,
        longitude: -74.973149, 
        confirmed: 1,
        change: "="
    },{
        region : "apurimac",
        title: "Apurimac",
        latitude : -13.637320,
        longitude: -72.878821, 
        confirmed: 1,
        change: "="
    },{
        region : "moquegua",
        title: "Moquegua",
        latitude : -17.193771,
        longitude: -70.934572, 
        confirmed: 1,
        change: "1+"
    }];

    res.set('Access-Control-Allow-Origin', 'https://jersson.github.io')

    res.send(locations);
}