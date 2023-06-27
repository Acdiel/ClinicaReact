const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'clinicanaf'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  const rol = 2; // Valor del rol para los usuarios normales

  connection.query(
    'SELECT * FROM usuarios WHERE username = ? OR email = ?',
    [username, email],
    (error, results) => {
      if (error) {
        console.error('Error al verificar datos existentes:', error);
        res.status(500).json({ error: 'Error al registrar el usuario' });
      } else {
        if (results.length > 0) {
          res.status(400).json({ error: 'Estos datos ya existen.' });
        } else {
          bcrypt.hash(password, 10, (error, hash) => {
            if (error) {
              console.error('Error al encriptar la contraseña:', error);
              res.status(500).json({ error: 'Error al registrar el usuario' });
            } else {
              connection.query(
                'INSERT INTO usuarios (username, email, password, rol) VALUES (?, ? ,?, ?)',
                [username, email, hash, rol], // Agregar el valor del rol en la consulta
                (error, results) => {
                  if (error) {
                    console.error('Error al registrar el usuario:', error);
                    res.status(500).json({ error: 'Error al registrar el usuario' });
                  } else {
                    res.status(200).json({ message: 'Usuario registrado exitosamente' });
                  }
                }
              );
            }
          });
        }
      }
    }
  );
});


app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  connection.query(
    'SELECT * FROM usuarios WHERE email = ?',
    [email],
    (error, results) => {
      if (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
      } else {
        if (results.length > 0) {
          const storedHash = results[0].password;

          bcrypt.compare(password, storedHash, (error, match) => {
            if (error) {
              console.error('Error al comparar contraseñas:', error);
              res.status(500).json({ error: 'Error al iniciar sesión' });
            } else if (match) {
              const user = { name: results[0].username };
              res.status(200).json({ message: 'Inicio de sesión exitoso', user });
            } else {
              res.status(401).json({ error: 'Credenciales inválidas' });
            }
          });
        } else {
          res.status(401).json({ error: 'Credenciales inválidas' });
        }
      }
    }
  );
});

app.post('/api/agendar-cita', (req, res) => {
  const { id, username, fecha, hora, doctorId } = req.body;

  connection.query(
    'INSERT INTO historial_medico (id, username, fecha, hora, doctor_id) VALUES (?, ?, ?, ?, ?)',
    [id, username, fecha, hora, doctorId],
    (error, results) => {
      if (error) {
        console.error('Error al guardar la cita en el historial médico:', error);
        res.status(500).json({ error: 'Error al guardar la cita en el historial médico' });
      } else {
        res.status(200).json({ message: 'Cita agendada exitosamente' });
      }
    }
  );
});

app.get('/api/horas-agendadas/:username', (req, res) => {
  const username = req.params.username;

  connection.query(
    'SELECT * FROM historial_medico WHERE username = ?',
    [username],
    (error, results) => {
      if (error) {
        console.error('Error al obtener las horas agendadas:', error);
        res.status(500).json({ error: 'Error al obtener las horas agendadas' });
      } else {
        res.status(200).json({ horasAgendadas: results });
      }
    }
  );
});

app.get('/api/user-role/:username', (req, res) => {
  const username = req.params.username;

  connection.query(
    'SELECT rol FROM usuarios WHERE username = ?',
    [username],
    (error, results) => {
      if (error) {
        console.error('Error al obtener el rol del usuario:', error);
        res.status(500).json({ error: 'Error al obtener el rol del usuario' });
      } else {
        const isAdmin = results[0].rol === 1;
        res.status(200).json({ isAdmin });
      }
    }
  );
});

app.get('/api/users', (req, res) => {
  connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error) {
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    } else {
      res.status(200).json({ users: results });
    }
  });
});

app.get('/api/hora-reservada', (req, res) => {
  const { fecha, hora, doctorId } = req.query;

  connection.query(
    'SELECT * FROM historial_medico WHERE fecha = ? AND hora = ? AND doctor_id = ?',
    [fecha, hora, doctorId],
    (error, results) => {
      if (error) {
        console.error('Error al verificar la hora reservada:', error);
        res.status(500).json({ error: 'Error al verificar la hora reservada' });
      } else {
        const isHoraReservada = results.length > 0;
        res.status(200).json({ isHoraReservada });
      }
    }
  );
});

app.get('/api/medical-history', (req, res) => {
  connection.query('SELECT * FROM historial_medico', (error, results) => {
    if (error) {
      console.error('Error al obtener el historial médico:', error);
      res.status(500).json({ error: 'Error al obtener el historial médico' });
    } else {
      res.status(200).json({ medicalHistory: results });
    }
  });
});


app.put('/api/update-password', (req, res) => {
  const { username, newPassword } = req.body;

  bcrypt.hash(newPassword, 10, (error, hash) => {
    if (error) {
      console.error('Error al encriptar la nueva contraseña:', error);
      res.status(500).json({ error: 'Error al actualizar la contraseña' });
    } else {
      connection.query(
        'UPDATE usuarios SET password = ? WHERE username = ?',
        [hash, username],
        (error, results) => {
          if (error) {
            console.error('Error al actualizar la contraseña:', error);
            res.status(500).json({ error: 'Error al actualizar la contraseña' });
          } else {
            res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
          }
        }
      );
    }
  });
});

app.delete('/api/delete-account', (req, res) => {
  const { username } = req.body;

  connection.query(
    'DELETE FROM usuarios WHERE username = ?',
    [username],
    (error, results) => {
      if (error) {
        console.error('Error al eliminar la cuenta:', error);
        res.status(500).json({ error: 'Error al eliminar la cuenta' });
      } else {
        res.status(200).json({ message: 'Cuenta eliminada exitosamente' });
      }
    }
  );
});

app.delete('/api/delete-user/:userID', (req, res) => {
  const userID = req.params.userID;

  connection.query('DELETE FROM usuarios WHERE ID = ?', [userID], (error, results) => {
    if (error) {
      console.error('Error al eliminar el usuario:', error);
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    } else {
      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    }
  });
});

app.delete('/api/delete-medical-record/:recordid', (req, res) => {
  const recordid = req.params.recordid;

  connection.query('DELETE FROM historial_medico WHERE id = ?', [recordid], (error, results) => {
    if (error) {
      console.error('Error al eliminar el registro del historial médico:', error);
      res.status(500).json({ error: 'Error al eliminar el registro del historial médico' });
    } else {
      res.status(200).json({ message: 'Registro del historial médico eliminado exitosamente' });
    }
  });
});



const port = 3002;

app.listen(port, () => {
  console.log(`Servidor backend ejecutándose en http://localhost:${port}`);
});
