exports.covidLocations = (req, res) => {
    let locations = [{
        region   : "lima",
        title    : "Lima",
        latitude : -12.0464,
        longitude: -77.0428, 
        confirmed: 4210,
        change: "1194+"
    },{
        region : "loreto",
        title: "Loreto",
        latitude : -3.74912,
        longitude: -73.25383, 
        confirmed: 315, 
        change: "25+"
    },{
        region : "junin",
        title: "Junín",
        latitude : -12.069156,
        longitude: -75.208648, 
        confirmed: 56,
        change : "14+"
    },{
        region : "lambayeque",
        title: "Lambayeque",
        latitude : -6.7011099,
        longitude: -79.9061127, 
        confirmed: 302,
        change: "56+"
    },{
        region : "callao",
        title: "Callao",
        latitude : -12.0565901,
        longitude: -77.1181412, 
        confirmed: 465,
        change: "145+"
    },{
        region : "ancash",
        title : "Áncash",
        latitude : -9.1366700,
        longitude: -77.7602800, 
        confirmed: 67,
        change: "17+"
    },{
        region : "arequipa",
        title: "Arequipa",
        latitude : -16.3988900,
        longitude: -71.5350000, 
        confirmed: 83,
        change: "9+"
    },{
        region : "huanuco",
        title: "Huánuco",
        latitude : -9.925791,
        longitude: -76.242772, 
        confirmed: 9,
        change: "2+"
    },{
        region : "la-libertad",
        title: "La Libertad",
        latitude : -8.1159897,
        longitude: -79.0299835, 
        confirmed: 101,
        change: "19+"
    },{
        region : "piura",
        title: "Piura",
        latitude : -5.1944900,
        longitude: -80.6328200, 
        confirmed: 68, 
        change: "27+"
    },{
        region : "cusco",
        title: "Cusco",
        latitude : -13.516667,
        longitude: -71.978771, 
        confirmed: 57,
        change: "3+"
    },{
        region : "ica",
        title: "Ica",
        latitude : -13.71029,
        longitude: -76.2053833, 
        confirmed: 37,
        change: "9+"
    },{
        region : "madre-de-dios",
        title: "Madre de Dios",
        latitude : -12.594215,
        longitude: -69.176401, 
        confirmed: 3,
        change: "1+"
    },{
        region : "san-martin",
        title: "San Martín",
        latitude : -6.034608,
        longitude: -76.974733, 
        confirmed: 18,
        change: "7+"  
    },{
        region : "tumbes",
        title: "Tumbes",
        latitude : -3.570698,
        longitude: -80.459641, 
        confirmed: 27,
        change: "="
    },{
        region : "cajamarca",
        title: "Cajamarca",
        latitude : -7.157181,
        longitude: -78.517542, 
        confirmed: 11,
        change: "1+"
    },{
        region : "pasco",
        title: "Pasco",
        latitude : -10.683354,
        longitude: -76.256148, 
        confirmed: 8,
        change: "3+"
    },{
        region : "tacna",
        title: "Tacna",
        latitude : -18.013473,
        longitude: -70.250829, 
        confirmed: 9,
        change: "="
    },{
        region : "ayacucho",
        title: "Ayacucho",
        latitude : -13.160333,
        longitude: -74.225743, 
        confirmed: 9,
        change: "4+"
    },{
        region : "huancavelica",
        title: "Huancavelica",
        latitude : -12.787246,
        longitude: -74.973149, 
        confirmed: 7,
        change: "="
    },{
        region : "apurimac",
        title: "Apurimac",
        latitude : -13.637320,
        longitude: -72.878821, 
        confirmed: 3,
        change: "2+"
    },{
        region : "moquegua",
        title: "Moquegua",
        latitude : -17.193771,
        longitude: -70.934572, 
        confirmed: 3,
        change: "="
    },{
        region : "puno",
        title: "Puno",
        latitude : -15.840546,
        longitude: -70.027916, 
        confirmed: 1,
        change: "="
    },{
        region : "amazonas",
        title: "Amazonas",
        latitude : -6.22933,
        longitude: -77.872405, 
        confirmed: 16,
        change: "5+"
    },{
        region : "ucayali",
        title: "Ucayali",
        latitude : -8.382998,
        longitude: -74.532188, 
        confirmed: 12,
        change: "12+"
    }];

    let origin_allowed = process.env.ORIGIN_ALLOWED || '*';

    res.set('Access-Control-Allow-Origin', origin_allowed);
    res.send(locations);
}