const express = require('express')
require('dotenv').config()
const cors = require("cors");
const db = require("../config/db")
const logger = require('../tools/logging')
const app = express()
/*if client has authentication issues:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pw';
flush privileges;

in sql
*/
const port = 5000
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 app.post('/api/registration', async (req, res)=>{
    const username = req.body.user
    const pw = req.body.password
    const email = req.body.email
    console.log(username + " " + pw)
    db.query("select * from user where username=?", [username], (err, result) =>{
      console.log(result)
      //Error occurs if no user with this username is found, so this user is not in the system and should be 
      //added
      if(err || result.length === 0){
        db.query("insert into user (username, pw, email) values (?,?,?)", [username, pw, email], (err, result)=>{
          if(err){
              console.log((err))
          }
          logger.logApi(req, res, 'registration', '0')
          res.send('added to users')
          
      })
      }
      else {
        logger.logApi(req, res, 'registration', '1')
      }
    })
  
    
 })
 console.log(process.env.HOST_DB)