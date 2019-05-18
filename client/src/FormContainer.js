import React, { Component } from 'react';
import Axios from 'axios';
class FormContainer extends Component {


  
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      formControls: {
        email: {
          value: ''
        },
        name: {
          value: ''
        },
        phone: {
          value: ''
        }
      }
    } 
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(  "post to lead:" 
      + "lead email:"  + this.state.formControls.email.value
      + "  Agent:" + this.props.agent_id
      + "  PROPID:"  + this.props.property_id
      + "  addr:" + this.props.address
          );
    /*
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    }); */
  }
  componentDidMount() {
    console.log("didmoutn w/" + this.props.agent_id)
    Axios.get("/agent/" + this.props.agent_id)
      .then(res => {
        //console.log("res" + res.data.id);
        const agent = res.data;
        this.setState({
          ...this.state , agent

        });
      }) 
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
  //                  <img src={"/images/" + this.state.house.image_url} alt="house" height="400" width="650"></img>
          //<img src={"/images/farley.jpg"} alt="agent" height="200" width="294" padding="10"></img>
  render() {
    if (!this.state.agent )
    return null;
    ///console.log("agent at rend" + this.state.agent);
    return (
      <form className="container black_box" onSubmit={this.handleSubmit} >
          <h3>Contact Agent</h3>
          <img src={"/images/" + this.state.agent.image_url} alt="agent" height="200" width="294" padding="10"></img>
          <div>
            <h3>email</h3>
            <input type="email"
              name="email"
              value={this.state.formControls.email.value}
              onChange={this.changeHandler}
            />
          </div>
        <div>
          <h3>name</h3>
          <input type="text"
            name="name"
            value={this.state.formControls.name.value}
            onChange={this.changeHandler}
          />
        </div>
        <div>

          <h3>phone</h3>
          <input type="text"
            name="phone"
            value={this.state.formControls.phone.value}
            onChange={this.changeHandler}
          />
          <div>
          <input type="submit" value="Submit" />
          </div>

        </div>
      </form>
    );
  }

}

export default FormContainer;