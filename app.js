const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

const index = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

//Express handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', index)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`))