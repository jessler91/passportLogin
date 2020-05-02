const express = require("express");
const bodyParser = require("body-parser");
const bcrytp = require('bcrypt')

const users = [];

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res) => {
  res.render('index.ejs')
})


// Login
app.get('/login', (req, res) => {
  res.render('login.ejs')
})

app.post('/login', (req, res) => {
  res.render('login.ejs')
})


// Register
app.get('/register', (req, res) => {
  res.render('register.ejs')
})

app.post('/register', (req, res) => {
  try {
    const hashedPassword = bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.rediredt('./login')
  } catch {
    res.redirect('./register');
  }
  console.log(users);
})


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

