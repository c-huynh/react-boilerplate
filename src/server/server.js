const express = require('express');

const app = express();
app.use(express.static(process.cwd() + '/dist/public'));

//404 Not Found Middleware
app.use(function (req, res, next) {
    res.status(404)
        .type('text')
        .send('Not Found');
});

try {
    app.listen(3000, () => {
        console.log('\x1Bc'); // clear console
        console.log('listening on port 3000...');
    })
} catch(e) {
    console.error(e.message);
}