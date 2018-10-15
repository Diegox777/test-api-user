const express = require('express');
const faker = require('faker');

const app = express();
const port = 6011;

app.listen(port, function() {
    console.log('Listening on ' + port);
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/user', (req, res) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();
    let user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        server: 2,
        port: port
    };
    
    res.send(user);
});