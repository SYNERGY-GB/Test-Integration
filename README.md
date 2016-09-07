# Prueba de admisión: Destrezas de Integración

Esta prueba está diseñada para medir tus destrezas en las siguientes áreas de la programación de servicios web y la programación en general. Para resolver esta prueba debes tener en cuenta que debes usar las siguientes tecnologías:

+ GIT
+ JavaScript
+ Restful Web Services
+ Postman
+ Bases de datos

Tu tarea es realizar un servicio web REST utilizando [`Express.js`](https://expressjs.com/) que es un framework basado en [`Node.js`](https://nodejs.org/en/).

+ Genera una llave SSH pública.

+ Agregala a tu cuenta de GitHub.

+ Usa la consola de GIT para clonar el repositorio con el siguiente comando `git clone` vía SSH.

+ Después de haber clonado el repositorio, debes crear una rama que contenga tu nombre con el siguiente formato `admision/nombre-apellido`. Para hacerlo, debes ejecutar el siguiente comando en la consola GIT: `git checkout -b admision/nombre-apellido`

El nombre del servicio a crear debe ser `admision` y se deben atender las siguientes peticiones:

### GET `admision`

Debe obtener los datos de albunes que yacen en formato JSON [aquí](http://jsonplaceholder.typicode.com/albums). Adicionalmente, debe agregar un atributo llamado `hash` que sea el resultado de aplicarle `SHA1` al campo `title`.

Un ejemplo de la estructura inicial es la siguiente: 

```json
[
	{
	    "userId": 1,
	    "id": 1,
	    "title": "quidem molestiae enim"
	},
	{
	    "userId": 1,
	    "id": 2,
	    "title": "sunt qui excepturi placeat culpa"
	}
]
```

Consecuentemente, la estructura final debe ser como se muestra a continuación: 

```json
[
	{
		"userId": 1,
		"id": 1,
		"title": "quidem molestiae enim",
		"hash": "ba232411feb13a64634e52d1e39183c9185af197"
	},
	{
		"userId": 1,
	    "id": 2,
	    "title": "sunt qui excepturi placeat culpa"
		"hash": "d2a09f04fc7557af48b5cab5b930592dd1e9c06c"
	}
]
```

###POST `admision`

Debe almacenar en base de datos tus datos personales. Para ello, debes enviar en el `body` de la petición el siguiente JSON con tus datos:

```json
{
    "nombre": "",
    "apellido": "",
    "correo": ""
}
```

El servicio debe conectarse a la base de datos `MySQL` llamada `prueba_admision` con las siguientes credenciales:

+ Host: 172.16.17.90
+ Username: admision.test
+ Password: Testsgb123

Estas credenciales deben encontrarse en un archivo llamado `database_credentials.properties` el cual debe ser leído al momento de invocar el servicio para crear la conexión a la base de datos. Adicionalmente,  tus datos deben ser almacenados en la tabla `persona`.

###¡Finalmente!

Al terminar los objetivos solicitados, es necesario que borres la carpeta `node_modules` generada al instalar las dependencias necesarias y que hagas `push` de tus cambios al repositorio, específicamente a la rama que creaste con tu nombre y apellido.
