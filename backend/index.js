const express= require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const users = [
    {id: 1, name: 'Gonzalo Acevedo', app:'a', time:'100', dateReserve: '2022-01-23'},
    {id: 2, name: 'Carlos González', app:'b', time:'50', dateReserve: '2021-04-28'},
    {id: 3, name: 'Valentina Hormazabal', app:'c', time:'120', dateReserve: '2022-03-13'},
    {id: 4, name: 'José García', app:'a', time:'300', dateReserve: '2022-02-18'},
    {id: 5, name: 'Sofía Fernández', app:'b', time:'240', dateReserve: '2023-12-03'},
    {id: 6, name: 'Andrea Torres', app:'c', time:'38', dateReserve: '2023-09-30'},
    {id: 7, name: 'Luis Sánchez', app:'a', time:'89', dateReserve: '2023-08-21'},
    {id: 8, name: 'Daniel Ruíz', app:'b', time:'345', dateReserve: '2022-11-16'},
    {id: 9, name: 'Sergio Mendoza', app:'c', time:'276', dateReserve: '2021-02-12'},
    {id: 10, name: 'Natalia Rojas', app:'a', time:'165', dateReserve: '2020-04-24'}
];

mongoose.connect('mongodb://localhost:27017/prueba', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('connected', async() => {
  console.log('Conexión correcta a la base de datos');
  try {
    await prueba.deleteMany();
    await prueba.insertMany(users)
    console.log('Datos cargados exitosamente en la base de datos');
  }
  catch (err) {
    console.error('Error al cargar los datos:', err);}
});

db.on('error', (err) => {
    console.error('Error de conexión a la base de datos:', err);
  });

app.get('/', (req,res) => {
    res.send('Node JS API Vale');
});

app.get('/api/users', (req,res) => {
    res.send(users);
    console.log(users)
});

app.post('/api/users' , (req,res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        app: req.body.app,
        time: req.body.time,
        dateReserve: req.body.dateReserve,
    };

    users.push(user);
    res.send(user);
});

app.delete('/api/users/:id' , (req,res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('Usuario no encontrado');
    }
    else {
        const index = users.indexOf(user);
        users.splice(index,1);
        res.send(user);
        console.log('Usuario encontrado')
    }
});

const port = 3001;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));