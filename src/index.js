const app = require('./app');

app.listen(app.get('port'), () => {
    console.log(`sever run on port ${app.get('port')}...`);
})