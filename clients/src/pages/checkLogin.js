import api from '../tools/apiCalls.js'
let API = new api();

function checkLogin(){
    return(
        <div>
            <button onClick={API.LoginCheck}>check Login</button>
            
        </div>
    )
}
export default checkLogin