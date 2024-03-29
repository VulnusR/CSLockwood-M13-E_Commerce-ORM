const express = require('express');
const routes = require('./routes');
// import sequelize connection

const sequelize = require('./config/connection');
const { Category, Product, Tag, ProductTag } = require('./models');

const app = express();
const PORT = process.env.PORT || 3007;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

