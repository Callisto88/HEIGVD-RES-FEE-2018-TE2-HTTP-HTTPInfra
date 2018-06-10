var Chance = require('chance');
var chance = new Chance();

const express = require('express')
const app = express()

app.get('/', function (req, res) {
        res.send( generateAnimals() )
})

app.get('/test', function(req, res) {
  res.send('Test RES')
})

app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
})


function generateAnimals() {

        var nbAnimals = chance.integer({
                min: 0,
                max: 10
        });

        console.log(nbAnimals);
        var animals = [];
        for (var i = 0; i < nbAnimals; i++) {

                animals.push({
                        animal: chance.animal(),
                        pays: chance.country({full: true}),
                        city: chance.city()
                });
        }

        console.log(animals)
        return animals;
}
