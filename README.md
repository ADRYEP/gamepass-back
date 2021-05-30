# GAMEPASS_BACKEND_NEO4J

Backend del proyecto final para DB II

## VARIABLES DE ENTORNO

        El proyecto se puede desplegar tanto de manera local como con ayuda de DOCKER, por lo tanto, es necesario modificar las variables de entorno para asegurar que el backend se conecte de manera efectiva con el servidor de NEO4J.
        Acontinuación se muestran las variables que se deben agregar al archivo .env

### LOCAL
- PORT = 3000
- DB_URL = bolt://localhost:7687
- DB_USER = neo4j
- DB_PASS = 123456
- DB_NAME = neo4j

### DOCKER
- PORT = 3000
- DB_URL = bolt://neo4j_gamepass
- DB_USER = neo4j
- DB_PASS = 1234
- DB_NAME = neo4j

## INICIAR CON DOCKER
    docker-compose up
## INICIAR EN LOCAL
    npm instal
    npm run dev

## INICIO DE BASE DE DATOS EN NEO4J

- PROYECTO INICIALIZADO CON DOCKER:      
    - Asegúrate de iniciar la aplicación de escritorio de DOCKER
    - Ingresar al enlace: **localhost:7474**
    - cuando se realice la conexión por primera vez, se debe colocar las siguientes credenciales:
        - user: neo4j
        - password: neo4j
    - Una vez hecho esto se pedirá modificar el password y se debe colocar la siguiente: **1234** como se ha declarado en el .env
    - Ya que desplegado de esta manera no se permite importar un archivo .cypher para cargar la data, se deberá copiar el contenido del archivo **load-gamesDB.cypher** para crear un nuevo grafo.

- PROYECTO INICIALIZADO EN LOCAL
    - Iniciar la aplicación **Neo4j Desktop**
    - Crear una nueva base de datos y luego iniciarla
    - Abrirla en el navegador.
    - Así como al iniciar el proyecto con DOCKER, es necesario cambiar la password la primera vez que se iniciar. Las credenciales serán:
        - user: neo4j
        - password: neo4j
    - - Una vez hecho esto se pedirá modificar el password y se debe colocar la siguiente: **123456** como se ha declarado en el .env
    - Dos opciones para agregar data y así crear un grafo con la información que se requiere.
        - Importar el archivo **load-gamesBD.cyper** y luego hacer click en abrir (esto hará que se importe el contenido de este al navegador donde se abrirá un editor de neo4j). Ejecutar el código que aparecerá en la caja de texto y ya se creará el grafo
        - Copiar el contenido del archivo **load-gamesBD.cyper** en el ejecutor de querys del navegador **(localhost:7474)** y ejecutarlo
