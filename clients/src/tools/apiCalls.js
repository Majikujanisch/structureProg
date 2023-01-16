const Cookies = require("js-cookie")
class api{
    //API Call for registration
    async RegiCall (password, user, email){
        let data = {user, password, email}
        
        let bodybuilt = JSON.stringify(data)
        console.log(bodybuilt)
        await fetch('http://localhost:5000/api/registration', {
      method: 'POST',
      headers:{
      'Content-type': 'application/json'},
      body: bodybuilt,
    }).then((data)=>{
    console.log(data)
    })
    .catch((err)=>
    console.log(err.message)
    )}
    async GetCall (user){
      let res = await fetch ("http://localhost:5000/api/getUser/"+user)
      let data = await res.json()
      console.log(data)
    }
    async LoginCall(pw, user){
      
      let data = {pw, user}
      let bodybuilt = JSON.stringify(data)
      let call = await fetch ("http://localhost:5000/api/login", {
        method: 'POST',
        headers:{
        'Content-type': 'application/json'},
        body: bodybuilt,
        credentials:"include"
      }).then((data)=>{
        console.log(data)
      }).catch((err)=>
      console.log(err.message)
      )
      
      
    }
    LoginCheck = async function() {
      console.log("LOGINCHECK")
      
      let res = await fetch ("http://localhost:5000/secret",
      {credentials:"include"})
    }
    Logout = async function() {
      console.log("Logout")
      
      let res = await fetch ("http://localhost:5000/api/logout",
      {credentials:"include"})
      Cookies.remove("SessionToken",{ path: '' })
      Cookies.remove("userid",{ path: '' })
      Cookies.remove("usermail",{ path: '' })
    }




}
module.exports = api;

