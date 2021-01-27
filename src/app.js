const express = require("express"); 
const app = express(); 
const path = require('path'); 
const mainRouter = require('./routers/mainRouter');
const port = process.env.PORT || 3000; 


app.set("view engine", "ejs") 
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname, '../public'))); 


app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use("/", mainRouter);

app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));