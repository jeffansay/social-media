const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const port = process.env.PORT || 5000;

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// DB config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose.connect(db, { useNewUrlParser: true })
        .then(() => {
            console.log('DB connected Success!');
            
        }).catch(err => console.log('DB fail!'));


app.get('/', (req, res) => res.send('Hellow'));

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


app.listen(port, () => console.log(`Running on port ${port}`));