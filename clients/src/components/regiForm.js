import React from "react";

class RegiForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChangeName = this.handleChange.bind(this);
        this.handleChangeEmail = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Email: 
              <input type="text" value={this.state.value} onChange={this.handleChangeName} />
              Username:
              <input type="text" value={this.state.value} onChange={this.handleChangeName} />
              Password:
              <input type="text" value={this.state.value} onChange={this.handleChangeEmail} />
              
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }


export default RegiForm;