const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/api/users')); 

app.get('/', (req, res) => {
    res.send("Hello there!");
});

app.listen(3000, () => {
    console.log('Server started at port 3000');
});
