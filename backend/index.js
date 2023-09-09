const express= require('express');
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

app.get('/', (req,res) => {
    res.send('Node JS API Vale');
});

app.get('/api/users', (req,res) => {
    res.send(users);
    console.log(users)
});

app.post('/api/products' , (req,res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        app: req.body.app,
        time: req.body.time,
        dateReserve: req.body.dateReserve,
    };

    products.push(user);
    res.send(user);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));