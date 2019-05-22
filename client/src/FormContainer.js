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
    // this.props.agent_id,
    //parseInt(this.props.property_id),

    Axios.post('/post_lead', {

      "property_id": this.props.property_id,
      "agent_id": this.props.agent_id,
      "email": this.state.formControls.email.value,
      "name": this.state.formControls.name.value,
      "phone": this.state.formControls.phone.value,
      "address": this.props.address,

    })
      .then(function (response) {
        //resultElement.innerHTML = generateSuccessHTMLOutput(response);
      })
      .catch(function (error) {
        //resultElement.innerHTML = generateErrorHTMLOutput(error);
      });

    /*
    }); */
  }
  componentDidMount() {
    if (typeof this.props.user_name != "undefined")
      this.setState(state => (state.formControls.name.value = this.props.user_name));
      this.setState(state => (state.formControls.email.value = this.props.email));
    Axios.get("/agent/" + this.props.agent_id)
      .then(res => {
        //console.log("res" + res.data.id);
        const agent = res.data;
        this.setState({
          ...this.state, agent

        });
      })
    //if (typeof this.state.user_record == "undefined")
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
    //alert("Form.js" + JSON.stringify(this.props))
    if (!this.state.agent)
      return null;
    ///console.log("agent at rend" + this.state.agent);
    return (
      <form className="container black_box" onSubmit={this.handleSubmit} >
        <h3>Contact {this.state.agent.name}</h3>
        <h3>Contact {this.state.agent.phone}</h3>
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