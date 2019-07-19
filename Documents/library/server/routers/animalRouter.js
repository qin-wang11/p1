const express = require('express');
const router = express.Router();
const axios = require('axios');
// const config = require('../../config/config');
// const log4js = require('log4js');
// const logger = log4js.getLogger();

router.post('/findBook', (request, response) => {
    console.log('router');
    // Access BE
    axios.get('http://localhost:8080/findBook', {
        params: {
            value: request.body.value
        }
    }).then((data) => {
        console.log(data.data);
        response.send(data.data);
    })
});

router.post('/islogin', (request, response) => {
    if (request.session.useid) {
        response.send({
            'islogin': 'YES',
            "username": request.session.username
        });
    } else {
        response.send({
            'islogin': 'NO'
        });
    }
});

router.post('/register0', (request, response) => {
    console.log('router' + request.body.username);
    // Access BE
    axios.get('http://localhost:8080/register0', {

        params: {
            u_name: request.body.username,
            password: request.body.password,
            age: request.body.age,
            sex: request.body.sex,
            phone: request.body.phone,
            address: request.body.address
        }
    }).then((data) => {
        console.log(data.data);
        response.send(data.data);
    })
});

router.post('/register', (request, response) => {
    console.log('router' + request.body.username);
    // Access BE
    axios.get('http://localhost:8080/register', {

        params: {
            u_name: request.body.username,
            password: request.body.password,
            age: request.body.age,
            sex: request.body.sex,
            phone: request.body.phone,
            address: request.body.address
        }
    }).then((data) => {
        console.log(data.data);
        response.send(data.data);
    })
});
router.get('/list', (request, response) => {
    console.log('router');
    // Access BE
    axios.get('http://localhost:8080/getBooks').then((data) => {
        console.log(data.data);
        response.send(data.data);
    })
});

router.get('/getLoginUserInfo', (req, res) => {
    res.send(req.session.useid + '');
})

router.get('/a', (request, response) => {
    // Access BE
    axios.get('http://localhost:8080/getUsers').then((data) => {
        response.send(data.data);
    })
});

router.get('/searchuser', (request, response) => {
    console.log('router');
    // Access BE
    axios.get('http://localhost:8080/searchuser').then((data) => {
        console.log(data.data);
        response.send(data.data);
    })
});

router.get('/deleteuser', (request, response) => {
    console.log('router');
    // Access BE
    axios.get('http://localhost:8080/deleteuser').then((data) => {
        console.log(data.data);
        response.send(data.data);
    })
});

router.post('/check', (request, response) => {
    console.log('router');
    // Access BE
    axios.get('http://localhost:8080/login', {
        params: {
            username: request.body.username,
            password: request.body.password
        }
    }).then((data) => {
        console.log(data.data);
        if (data.data.u_id == -10) {
            response.send();
            return;
        } else {
            request.session.useid = data.data.u_id;
            request.session.username = data.data.u_name;
            response.send(data.data);
            return;
        }

    })
});

module.exports = router;