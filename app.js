var express = require('express');
var app = express();
app.use(express.static('public'));
//app.set('views','./public');

app.get('/',(req, res) => 
{ 
    res.render('index'); 
});


// admin app
var admin = express();
admin.get('/',(req, res) => {
    res.send('Admin Home Page');
});
app.use('/admin', admin);


app.listen(3000, () => console.log('App listening 3000'));