
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



}
module.exports = api;
