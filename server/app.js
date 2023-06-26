const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

// Configuración del middleware para analizar los cuerpos de las solicitudes
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'clinicanaf'
});

// Conexión a la base de datos MySQL
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Ruta para el registro de usuarios
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  // Insertar los datos del usuario en la base de datos
  connection.query(
    'INSERT INTO usuarios (username, email, password) VALUES (?, ? ,?)',
    [username, email, password],
    (error, results) => {
      if (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ error: 'Error al registrar el usuario' });
      } else {
        res.status(200).json({ message: 'Usuario registrado exitosamente' });
      }
    }
  );
});

// Ruta para el inicio de sesión de usuarios
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario y la contraseña coinciden en la base de datos
  connection.query(
    'SELECT * FROM usuarios WHERE email = ? AND password = ?',
    [email, password],
    (error, results) => {
      if (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
      } else {
        if (results.length > 0) {
          const user = { name: results[0].username }; // Crear objeto de usuario con nombre
          res.status(200).json({ message: 'Inicio de sesión exitoso', user });
        } else {
          res.status(401).json({ error: 'Credenciales inválidas' });
        }
      }
    }
  );
});

// Puerto en el que se ejecutará el servidor
const port = 3002;

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor backend ejecutándose en http://localhost:${port}`);
});
