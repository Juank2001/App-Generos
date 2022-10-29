require('dotenv').config();
const app = require('./src/server/server')
const port = process.env.PORT || 3000;
//starting the server
app.listen(port, () => {
    console.log(`server on port ${port}`)
})