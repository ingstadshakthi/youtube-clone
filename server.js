const express = require('express')
const app = express();

app.get('/api/sample', (req, res) => {
    res.status(200).json({
        message: 'success',
        data: 'Connection Successful'
    })
});


app.listen(5000, console.log("Server Started"));

