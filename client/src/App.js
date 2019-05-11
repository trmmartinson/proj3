import React from 'react';
import Axios from 'axios';
import _ from "lodash";
import './App.css';
import HouseRow from './HouseRow.js';
//import SimpleSelect from './SimpleSelect.js';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});



class App extends React.Component {
  state = {
    search: "",
    results: [],
    min: '0',
    max: '150000',
    name: 'hai',
    labelWidth: 0,

  };


  
  
  get_allhomes = (query) => {
    console.log("allhomeq start");
     Axios.get("/all_homes")
     //Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    //.then(res => console.log(JSON.stringify(res)))
   // .then(res => this.setState({ results:  Object.values(res.data.items) }))
    .then(res => this.setState({ results:  Object.values(res.data) }))
    .catch(err => console.log(err));
    console.log("allhomeq end");
  };





  onSubmit = (e) => {
    e.preventDefault();
    console.log("mystring:" + this.refs.book_query.value);
    this.get_books(this.refs.book_query.value);
  };

  view = (num) => {
      //alert(this.state.results[num].volumeInfo.previewLink    );
      //let url = this.state.results[num].volumeInfo.previewLink;
      //window.open(url, '_blank');
//      console.log( "zzvview" + JSON.stringify(this.state.results[num - 1].image_url));


      this.props.history.push({
        pathname: '/SingleHouse',
        state: { detail: num }
      })

      //this.props.history.push('aved/1');
      //alert("view" + this.state.results[num].image_url);
  }

  save = (num) => {
      let save_stuff = {
        title       :  this.state.results[num].volumeInfo.title,
        authors     :  this.state.results[num].volumeInfo.authors,
        description :  this.state.results[num].volumeInfo.description,
        //thumbnail   has null problem?
        previewLink :  this.state.results[num].volumeInfo.previewLink,
        
      }
      alert(JSON.stringify(save_stuff));
  }
  onInputChange = (event) => {
    console.log("Search changed ..." + event.target.value)
    /*
    if (event.target.value) {
        this.setState({searchString: event.target.value})
    } else {
        this.setState({searchString: ''})
    } */
}

handleSelectChange = event => {
  this.setState({ [event.target.name]: event.target.value });
  console.log("ChaNgE in component:" + event.target.name + " " + event.target.value);
};
  handleClick = (the_button) => {
      let num =  the_button.match(/\d+/g);
      console.log(the_button + num);
      if (the_button.startsWith("view"))
          this.view(num);
  }
//get rid of didmount after testing
  componentDidMount() {
    //console.log("didmount");
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
    this.get_allhomes();
  }

        //<SimpleSelect onChange={(evt, key, payload)=>console.log("---payload--" + payload)}     />
  render() {
    const { classes } = this.props;
   // console.log("main Rend" + JSON.stringify(this.state.results));
    return (
      <div>

        <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-min-simple"
          >
            Minimum Price
          </InputLabel>
          <Select
            value={this.state.min}
            onChange={this.handleSelectChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="min"
                id="outlined-min-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={0}>$0</MenuItem>
            <MenuItem value={50000}>$50,000 </MenuItem>
            <MenuItem value={10000}>$100,000</MenuItem>
          </Select>
        </FormControl>


        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-max-simple"
          >
            Maximum Price
          </InputLabel>
          <Select
            value={this.state.max}
            onChange={this.handleSelectChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="max"
                id="outlined-max-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={50000}>$50,000</MenuItem>
            <MenuItem value={100000}>$100,000 </MenuItem>
            <MenuItem value={150000}>$150,000</MenuItem>
          </Select>
        </FormControl>
      </form>











        <div className = "container">
        {_.chunk(this.state.results,3).map((house,idx) => (
          <HouseRow 
                clicker={this.handleClick}
                key = {idx}
                id0 = {house[0].id}
                image_url0 = {house[0].image_url}
                address0 = {house[0].address}

                id1 = {house[1] && house[1].id}
                image_url1 = {house[1] && house[1].image_url}
                address1= {house[1] && house[1].address}

                id2 = {house[2] && house[2].id}
                image_url2 = {house[2] && house[2].image_url}
                address2 = {house[2] && house[2].address}
          />
        ))}
        </div>

      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(App);


//export default App;
