const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        navs: [
            { name: 'Personal Chat', url: '/personal' },
            { name: 'Chat', url: '/chat' },
            { name: 'Shorten', url: '/shorten' }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
