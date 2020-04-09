# Mapa de calor COVID-19 en Perú

El ejemplo está publicado en este [enlace](https://jersson.github.io/covid19/). Por el momento la información la actualizo manualmente usando los reportes del [MINSA](https://www.gob.pe/minsa/) 

Espero que me ayuden a mejorar esta idea :)

## Front
Estoy usando [Github Pages](https://pages.github.com/) para publicar el código HTML y el mapa de calor de [Google Maps](https://developers.google.com/maps/documentation/javascript/examples/layer-heatmap) para mostrar la información de casos COVID-19 confirmados.

## Servicio
Estoy usando [Google Cloud Functions](https://cloud.google.com/functions/docs/writing/http), aquí el  [código fuente](./service).

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
Si todo es correcto, se verá lo siguiente:
```
Deploying function (may take a while - up to 2 minutes)...
```

## Información de contacto
Si tienen algún comentario o sugerencia, pueden contactarme por medio de [la sección de issues](https://github.com/jersson/jersson.github.io/issues), twitter ([@jersson](https://twitter/jersson)) o el [formulario de contacto en mi blog](https://jersson.net/contact/).

Un abrazo,<br/> JD