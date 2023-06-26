# PROYECTO CLINICA REACT

El proyecto esta utilizando el framework o libreria react.

## Cambios

Agregué lo solicitado en la EP3.

EP3.1:Implementación de las diferentes interfaces gráficas de front-end haciendo uso de algún framework.

EP3.2 Crear datos a través de colecciones usando JSON

EP3.3: Cargar datos usando colecciones JSON creadas.

EP3.4: Validación de formularios y mensajes de retroalimentación.


-En el menu Iniciar Sesion, agregué que al momento de registrarse un usuario, los datos queden guardados en un archivo JSON llamado:
clientes.json que se encuentra ubicado en src/data/clientes.json (el otro clientes.json que esta ubicado en la carpeta servers se me olvidó borrarlo,
ya que lo estaba utilizando de prueba. Al igual que el usuarios.json que está ubicado en src), Cree una carpeta server en donde está almacenada la API
con puerto 3080 y esta conectada al archivo JSON del registro.

-Antes, la pestaña welcome tiraba los datos que estaban el los campos de registrarse solo los mostraba porque el usuario escribia en ese campo. 
Pero ahora está conectado al archivo clientes.JSON así que muestra los datos desde ese archivo

Abro el servidor primero, utilizando `node server.js` para conectarme al puerto 3080 y luego uso `npm start` para abrir la aplicacion React.

-Por ultimo modifique el componente agendarhora el cual ahora cumple una función mas especifica.
