//envs
require('dotenv').config();
const port = process.env.port ? process.env.port : 8080;
//DI
require('./container').registerServices();
//app
const app = require('./app');
//server-startup
app.listen(port, () => console.log(`Server is running on PORT: ${port}`));
