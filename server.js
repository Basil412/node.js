let express = require('express');
let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let artists = [
    {
        id: 1,
        name: 'Brad Pitt',
        age: 50
    }, {
        id: 2,
        name: 'Johny Depp',
        age: 50
    }, {
        id: 3,
        name: 'Tom Cruze',
        age: 50
    }, {
        id: 4,
        name: 'Bill Murray',
        age: 70
    }, {
        id: 5,
        name: 'Ben Aflek',
        age: 40
    }, {
        id: 6,
        name: 'Steven Seagal',
        age: 60
    }
];

app.get('/', function (req, res) {
    res.send('Hello API')
});

app.get('/artists', function (req, res) {
    res.send(artists)
});

app.get('/artists/:id', function(req, res) {
    let artist = artists.find(function (artist) {
        return artist.id === Number(req.params.id);
    });
    res.send(artist);
});

app.post('/artists', function (req, res) {
    console.log('req.body.name', req.body.name);
    let artist = {
        id: Date.now(),
        name: req.body.name
    };
    artists.push(artist);
    res.send({
        message: 'Create artist',
        created: artist
    });
});

app.delete('/artists/:id', function (req, res) {
    artists = artists.filter(function (artist) {
        return artist.id !== Number(req.params.id)
    });
    res.sendStatus(200);
});

app.put('/artists/:id', function (req, res) {
    let artist = artists.find(function (artist) {
        return artist.id === Number(req.params.id)
    });
    artist.name = req.body.name;
    res.sendStatus(200);
});

app.patch('/artists/:id', function (req, res) {
    let artist = artists.find(function (artist) {
        return artist.id === Number(req.params.id)
    });
    artist.name = req.body.name;
    res.sendStatus(200);
});

app.listen(3012, function () {
    console.log('API app started');
});
