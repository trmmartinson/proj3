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
      + "lead email:"  + typeof this.state.formControls.email.value
      + "  Agent:" + typeof this.props.agent_id
      + "  PROPID:"  + typeof this.props.property_id
      + "  addr:" + typeof this.props.address); 
      alert("  PROPID:"  + parseInt(this.props.property_id))
      // this.props.agent_id,
      //parseInt(this.props.property_id),

      Axios.post('/post_lead', {
  
      "property:"  : "2" , 
      "agent:"  : "1"  ,
      "email" :  this.state.formControls.email.value,
      "name"  :  this.state.formControls.name.value,
      "phone" :  this.state.formControls.phone.value,
      "address" : this.props.address,
  
      })
        .then(function (response) {
          //resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
          //resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
  
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