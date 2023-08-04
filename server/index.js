const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const  getAllTypes  = require('./src/controllers/getAllTypes.js')
require('dotenv').config();

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    getAllTypes();
    console.log('%s listening at', process.env.PORT); // eslint-disable-line no-console
  });
});
