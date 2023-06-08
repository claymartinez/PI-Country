const server = require('./src/app.js');
const getApiData = require('./src/controllers/getApiData');
const { conn } = require('./src/db');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await getApiData();
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
