import React from 'react';
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
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hai',
      labelWidth: 0,
    };
    debugger;
  }
  

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    //alert("ChaNgE in component:" + event.target.name + " " + event.target.value);
    this.props.send_data(event.target.name, event.target.value);
  };

  render() {
    const { classes } = this.props;
    console.log("component props" + JSON.stringify(this.props));

    return (
      <form className={classes.root} autoComplete="off">

        <FormControl variant="text" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-min-simple"
          >
            Minimum Price
          </InputLabel>
          <Select
            value={this.props.min}
            onChange={this.props.onMinMaxChange}
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
            value={this.props.max}
            onChange={this.props.onMinMaxChange}
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
            <MenuItem value={1000000}>$1,000,000</MenuItem>
          </Select>
        </FormControl>

      </form>




    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
