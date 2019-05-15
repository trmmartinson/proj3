import React, { Component } from 'react';

class FormContainer extends Component {
   
    
    state = {
        formControls: {
            email: {
              value: ''
            },
            name: {
              value: ''
            },
            password: {
              value: ''
            }
        }
    }
    
  
  changeHandler = event => {
      
      const name = event.target.name;
      const value = event.target.value;
    
      this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
  }

  
   render() {
      return (
          <form>
              <div>
                  <h3>email</h3>
              <input type="email" 
                     name="email" 
                     value={this.state.formControls.email.value} 
                     onChange={this.changeHandler} 
              />
              </div>
              <div>
                  <h3>firstname</h3>
              <input type="text" 
                     name="name" 
                     value={this.state.formControls.name.value} 
                     onChange={this.changeHandler} 
              />
              </div>
              <div>

                  <h3>last name</h3>
              <input type="password" 
                     name="password" 
                     value={this.state.formControls.password.value} 
                     onChange={this.changeHandler} 
              />
              </div>

          </form>      
      );
  }

}

export default FormContainer;