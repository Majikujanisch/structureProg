import React from "react";
import * as ReactDOM from 'react-dom/client';
import api from '../tools/apiCalls.js'
import sha512 from "js-sha512"
class RegiForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Name: '',
        Email: '',
        Password: ''};
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeName(event) {
        this.setState({Name: event.target.value})
      }

      handleChangeEmail(event) {
        this.setState({Email: event.target.value})
      }

      handleChangePass(event) {
        this.setState({Password: event.target.value})
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const ele = ReactDOM.createRoot(document.getElementById('error'))
        let API = new api()
        if(this.state.Email != '' && this.state.Name != '' && this.state.Password != ''){
          let element = []
          let correctInput = true
          element.push(<p> You have to input all information! missing is: </p>)
          
            if(this.state.Email === ''){
              element.push(<p>Email is empty</p>)
              correctInput = false
            }
            else if(!this.state.Email.includes("@")){
              element.push(<p>Email is not an Email (@)</p>)
              correctInput = false
            }
            
            else if (this.state.Email.length < 4){
              element.push(<p>Email is to short</p>)
              correctInput = false
            }
          if(this.state.Name === ''){
            element.push(<p>Username is empty</p>)
            correctInput = false
          }
          if(this.state.Password === ''){
            element.push(<p>Passwort is empty</p>)
            correctInput = false
          }
          else if (this.state.Password.length < 8){
            element.push(<p>Passwort is to short, should be longer than or be 8</p>)
            correctInput = false
          }
          ele.render(element)
          if(correctInput){
        const pwToSent = sha512.sha512(this.state.Password)
        API.RegiCall(pwToSent, this.state.Name, this.state.Email)
          }
        
        }
        else{
          
        }
      }
      
    
      render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email: 
              <input type="text" value={this.state.Email} onChange={this.handleChangeEmail} /> <br></br>
              Username:
              <input type="text" value={this.state.Name} onChange={this.handleChangeName} /><br></br>
              Password:
              <input type="password" value={this.state.Password} onChange={this.handleChangePass} />
              
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div Id="error"></div>
          </div>
        );
      }
    }


export default RegiForm;