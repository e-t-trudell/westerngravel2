const mongoose = require('mongoose');
//This will create a database named "westernGravel" if one doesn't already exist (no need for mongo shell!):
mongoose.connect("mongodb://localhost/westernGravel", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the westernGravel database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));