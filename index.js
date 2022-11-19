const express = require('express')

const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let books = [];

app.use(cors());


app.use(express.json());

app.get('/Mascotas', (req, res) => {
    return res.json(
        {
            data: [

                {

                    nombre: "Pelusa",

                    tipo: "GATO",

                    Pais: "Mexico",

                    Color: "Amarillo",

                    Propietario: "Jesus Cardenas"

                },


                {

                    nombre: "Coffe",

                    tipo: "Perro",

                    Pais: "Mexico",

                    Color: "Cafe",

                    Propietario: "Diego correa Cardenas"

                }

            ]


        }
    );
    // We will be coding here
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));