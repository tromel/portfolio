const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const mongo = require('mongodb')
const app = express()




mongo.connect("mongodb://heroku_29pgkl9j:8ab0uap50e3ecf5g34roi1ticr@ds139167.mlab.com:39167/heroku_29pgkl9j", { useNewUrlParser: true }, console.log('mongo connected'));


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

// router.post('/index', function(req, res) {
// console.log(req.body.name);
// console.log(req.body.message);
// var newMsg = new Message();
// newMsg.name = req.body.name;
// newMsg.message = req.body.message;
// newMsg.save(function(err, result) {
// if(err){
//     throw err;
// }
// console.log('Message sent!')
// res.send();
// });
// });

