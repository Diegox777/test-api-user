const express = require('express');
const faker = require('faker');

const app = express();

app.listen(6001, function() {
    console.log('Listening on 6001');
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
        server: 1
    };
    
    res.send(user);
});