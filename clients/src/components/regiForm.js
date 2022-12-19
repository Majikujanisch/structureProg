import React from "react";
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
        console.log(this.state.Password)
        let API = new api()
        const pwToSent = sha512.sha512(this.state.Password)
        API.RegiCall(pwToSent, this.state.Name, this.state.Email)
      }
    
      render() {
        return (
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
        );
      }
    }


export default RegiForm;