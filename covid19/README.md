# Mapa de calor COVID-19 en Perú

El ejemplo está publicado en este [enlace](https://jersson.github.io/covid19/). Por el momento la información la actualizo manualmente usando los reportes del [MINSA](https://www.gob.pe/minsa/) 

Espero que me ayuden a mejorar esta idea :)

## Front
Estoy usando [Github Pages](https://pages.github.com/) para publicar el código HTML y el mapa de calor de [Google Maps](https://developers.google.com/maps/documentation/javascript/examples/layer-heatmap) para mostrar la información de casos COVID-19 confirmados.

## Servicio
Estoy usando [Google Cloud Functions](https://cloud.google.com/functions/docs/writing/http), aquí el  [código fuente](./service).

Los servicios construidos son: <br/>
1. Resumen ([summary](./service/summary))
2. Ubicaciones ([locations](./service/locations))
3. Top 5 de regiones ([topregional](./service/topregional))
4. Pruebas realizadas y casos ([cases](./service/cases))

La información generada por cada servicio se explicará más adelante.

**¿Cómo ejecutar localmente un servicio?**<br/>
Dentro de la carpeta de un servicio (por ejemplo, service/summary)
```
npm run local
```
Si todo es correcto, se verá lo siguiente:
```
Serving function...
Function: covidSummary
URL: http://localhost:8080/
```
El servicio estará listo para ser consumido en la URL indicada.

**¿Cómo desplegar un servicio?**<br/>
Dentro de la carpeta del servicio ejecutar el comando:
```
npm run deploy
```
Si estas en modo bash (o algo similar), puedes ejecutar el siguiente comando
```
./deploy.sh
```

Si todo es correcto, se verá lo siguiente:
```
Deploying function (may take a while - up to 2 minutes)...
```

## Datos
Se utiliza un [archivo de configuración] que encontrarás en la carpeta generator/data.

El proyecto incluye una herramienta que genera los datos necesarios para **cada servicio**, para esto puedes revisar la carpeta **data** dentro de cada servicio. 

Seguí esta técnica para no depender de una base de datos –o memoria caché– ya que la información cambia por lo menos cada 24 horas y de aumentar una capa adicional, la latencia del servicio aumentaría.

Por ejemplo, si queremos actualizar los datos del servicio de [Pruebas realizadas](./service/cases), debemos: <br/>
1. Revisar o actualizar la configuración definida en la sección **regions/cases**
2. Ir a la carpeta generator y ejecutar el siguiente comando:
```
node build.js --file cases
```
3. Si todo es correcto, encontrarás un mensaje como este:
```
🤖Generating cases file...
🤖Cases file has been generated 😎
```
4. El resultado de la ejecución lo puedes encontrar en la carpeta **generator/dist**
5. Proceder con el despliegue correspondiente
```
node deploy.js --file cases
```
6. Si todo es correcto, encontrarás un mensaje como este:
```
🤖Deploying cases file...
🤖Cases file has been deployed 😎
```
7. El archivo estará copiado en la carpeta data del servicio correspondiente. En este caso será la carpeta **service/cases/data**

## Información de contacto
Si tienen algún comentario o sugerencia, pueden contactarme por medio de [la sección de issues](https://github.com/jersson/jersson.github.io/issues), twitter ([@jersson](https://twitter/jersson)) o el [formulario de contacto en mi blog](https://jersson.net/contact/).

Un abrazo,<br/> JD