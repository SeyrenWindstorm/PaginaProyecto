import express from 'express';
import { createConnection } from 'mysql';

const app = express();
const port = 3000;


const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ebountydb', 
});

 
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});


app.use(express.urlencoded({ extended: true })); // Middleware para parsear el cuerpo del formulario
app.post('/guardar_datos', (req, res) => {
  const { nombre, correo, edad, telmovil, genero, provincia, contrasena } = req.body;

  // Insertar los datos en la base de datos
  const sql = 'INSERT INTO usuarios (nombre, correo, edad, telmovil, genero, provincia, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [nombre, correo, edad, telmovil, genero, provincia, contrasena], (err, result) => {
    if (err) {
      console.error('Error al guardar los datos: ' + err.stack);
      res.sendStatus(500); // Error del servidor
      return;
    }
    console.log('Datos guardados correctamente');
    res.sendStatus(200); // OK
  });
});

app.get('/productos', (req, res) => {
  const consulta = 'SELECT id, nombre, precio, descripcion, cantidad_stock, cantidad_likes FROM productos';
  conexion.query(consulta, (err, resultados) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      res.status(500).json({ error: 'Error al obtener los productos' });
    } else {
      res.json(resultados);
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto ' + port);
});
