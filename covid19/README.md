# COVID-19 Perú en imágenes

La web está publicada en este [enlace](https://jersson.github.io/covid19/). La información se basa en los reportes emitidos por el [MINSA](https://www.gob.pe/minsa/) 

Espero que me ayuden a mejorar esta idea :)

## **Front End**
Estoy usando [Github Pages](https://pages.github.com/) para publicar el código HTML y el mapa de calor de [Google Maps](https://developers.google.com/maps/documentation/javascript/examples/layer-heatmap) para mostrar la información de casos COVID-19 confirmados.

El beneficio principal de trabajar con [Github Pages](https://pages.github.com/) es que el despliegue se hace ni bien ejecute el comando **git push** de este repositorio. Esto no aplica para los servicios construidos.

## **Back End**

Los servicios construidos son: <br/>
1. Resumen ([summary](./service/summary))
2. Ubicaciones en el mapa ([locations](./service/locations))
3. Top 5 de regiones ([topregional](./service/topregional))
4. Pruebas realizadas y casos ([cases](./service/cases))

Para el despliegue estoy aprovechando la plataforma de [Google Cloud Functions](https://cloud.google.com/functions/docs/writing/http).

La información utilizada y expuesta por cada servicio, se explicará más adelante.

**¿Cómo ejecutar localmente un servicio?**<br/>
-
Dentro de la carpeta de un servicio (por ejemplo, **service/summary**), puedes ejecutar el comando:
```
npm run local
```
Si todo es correcto, verás lo siguiente:
```
Serving function...
Function: covidSummary
URL: http://localhost:8080/
```
El servicio estará listo para ser consumido en la URL indicada.

**¿Cómo hacer una prueba unitaria del servicio?**<br/>
-
Dentro de la carpeta de un servicio (por ejemplo, **service/summary**), puedes ejecutar el comando:
```
npm test
```
Si todo es correcto, verás lo siguiente:
```
✓ covidSummary: service is running!
1 passing (8ms)
```
La prueba unitaria del servicio fue construida usando [Mocha](https://mochajs.org/) y [Sinon](https://sinonjs.org/). El código está en la carpeta **test** ubicada en cada servicio.


**¿Cómo desplegar el servicio en Google Cloud?**<br/>
-
Dentro de la carpeta del servicio, ejecuta el comando:
```
npm run deploy
```
Si estas en modo bash (o algo similar), puedes ejecutar el siguiente comando
```
./deploy.sh
```

Si todo es correcto, verás lo siguiente:
```
Deploying function (may take a while - up to 2 minutes)...
```

**Requisitos para instalar el servicio**
- 
1. Debe instalar [Google Cloud SDK](https://cloud.google.com/sdk/install)
2. Debes configurar la web que consumirá tu servicio. Esto se hace en el archivo de configuración **.env.yaml** que encontrarás en la raíz de cada servicio. 

## **Data**
Para el **servicio resumen** utilizo un [archivo CSV](./generator/data/summary.csv)

Para el resto de casos utilizo un [archivo de configuración](./generator/data/configuration.js) que encontrarás en la carpeta generator/data.

Para la generación de datos usados por **cada servicio**, el proyecto incluye una herramienta que se basa en los datos arriba mencionados. Para ver un ejemplo del código generado, puedes revisar el contenido de la carpeta **data** ubicado en cada servicio. 

Utilicé esta técnica de automatización para no depender de una base de datos –o de una memoria caché– ya que la información cambia por lo menos cada 24 horas y de aumentar una capa adicional, la latencia del servicio aumentaría.

Por ejemplo, si queremos actualizar los datos del servicio de [Pruebas realizadas](./service/cases), debemos: <br/>
1. Revisar o actualizar la configuración definida en la sección **regions/cases**
2. Ir a la carpeta generator y ejecutar el siguiente comando:
```
node build.js --file cases
```
(opcional)
```
npm run build -- --file cases
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
(opcional)
```
npm run deploy -- --file cases
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