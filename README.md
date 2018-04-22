# Semillero Web

## Introducción

Necesitamos darle una hermosa cara a una API que tenemos para poder administrar la relación entre los estudiantes nahualeros y las empresas que nos contactan.

## Instalación DEV

### Docker

El docker-compose del proyecto en general está mejor explicado en el proyecto de [semillero2-docker](https://github.com/nahual/semillero2-docker)

### Ejecutar comandos en el container

`$ docker exec -i semillero_semillero-web_1 bash -c "npm install bootstrap --save"`

### Ver logs

`$ docker-compose logs -f semillero-web`

### Documentación endpoints

La documentación de la API está escrita en RAML 0.8.

El HTML generado se puede ver en el siguiente [link](https://rawgit.com/nahual/semillero2-api/development/apiV2.html)
