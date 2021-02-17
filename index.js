const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ['Asif', 'Mohammad', 'Ratul'];

app.get('/', (req, res) => {
    const foo = {
        product: 'perfume',
        price: 3000
    }
    res.send(foo);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});

    console.log(req.query);
})

// post
app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 55;
    res.send(user);
    console.log('data recieved', req.body);

    users.push(user.name);
    console.log("users => ", users);
})

app.listen(3000, () => console.log('hello world'));