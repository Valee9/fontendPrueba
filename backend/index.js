const express= require('express');
const app = express();

app.use(express.json());

const users = [
    {name: 'Gonzalo Acevedo', app:'a', tiempo:'100', dateReserve: '2022-01-23'},
    {name: 'Carlos González', app:'b', tiempo:'50', dateReserve: '2021-04-28'},
    {name: 'Valentina Hormazabal', app:'c', tiempo:'120', dateReserve: '2022-03-13'},
    {name: 'José García', app:'a', tiempo:'300', dateReserve: '2022-02-18'},
    {name: 'Sofía Fernández', app:'b', tiempo:'240', dateReserve: '2023-12-03'},
    {name: 'Andrea Torres', app:'c', tiempo:'38', dateReserve: '2023-09-30'},
    {name: 'Luis Sánchez', app:'a', tiempo:'89', dateReserve: '2023-08-21'},
    {name: 'Daniel Ruíz', app:'b', tiempo:'345', dateReserve: '2022-11-16'},
    {name: 'Sergio Mendoza', app:'c', tiempo:'276', dateReserve: '2021-02-12'},
    {name: 'Natalia Rojas', app:'a', tiempo:'165', dateReserve: '2020-04-24'},
    {name: 'Andrés Jiménez', app:'b', tiempo:'379', dateReserve: '2020-06-21'},
];

app.get('/', (req,res) => {
    res.send('Node JS API Vale');
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));