const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")

const User = require('../../models/User');
// s

// GET SIGNUP
router.get('/signup', (req, res) => {
  res.render('auth/signup');
})

// POST SIGNUP
router.post('/signup', (req, res) => {
  const bcryptSalt = 10;
  const {username, password} = req.body;

  if(username == "" || password == "") {
    res.render("auth/signup", {message: "Please fill in the empty fields"})
  }

  User.findOne({"username" : username})
  .then(user => {
    if(user !== null)  {
      res.render("auth/signup", {message2: "username already exists in the DB, please choose a different one"})
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username: username,
      password: hashPass
    })
    newUser.save()
    .then(user => {
      res.redirect('/profile')
    })
    .catch(err => {
      res.render("err" + err);
    })
  })

})

// GET LOGIN
router.get('/login', (req, res) => {
  res.render('auth/login');
})
// POST LOGIN
router.post('/login', (req, res) => {
  // const bcryptSalt = 10;
  const {username, password} = req.body;

  if(username == true || password == true) {
    res.render("auth/login", {message: `"Welcome" $user`})
  }
  bcrypt.compare(password), (hashPass) => {
    
  }
  if (password === hashPass){
    console.log(`Welcome ${user}`)
      res.redirect('/login')
  }
  else{
    return console.error("incorrect credentials, please try again");
    
  }
    
})

module.exports = router;