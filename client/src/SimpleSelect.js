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
      labelWidth: 0,
    };
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleSelectChange = event => {
    alert("change in simple select");
    this.setState({ [event.target.name]: event.target.value });
    this.props.send_data(event.target.name, event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">

        <FormControl variant="standard" className={classes.formControl}>
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
   
            <MenuItem value={0}>$0</MenuItem>
            <MenuItem value={50000}>$50,000</MenuItem>
            <MenuItem value={100000}>$100,000 </MenuItem>
            <MenuItem value={200000}>$200,000</MenuItem>
            <MenuItem value={250000}>$250,000</MenuItem>
            <MenuItem value={350000}>$350,000</MenuItem>
            <MenuItem value={400000}>$400,000</MenuItem>
            <MenuItem value={450000}>$450,000</MenuItem>
            <MenuItem value={600000}>$600,000</MenuItem>
            <MenuItem value={1000000}>$1,000,000</MenuItem>
            <MenuItem value={2000000}>$2,000,000</MenuItem>

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
            <MenuItem value={50000}>$50,000</MenuItem>
            <MenuItem value={100000}>$100,000 </MenuItem>
            <MenuItem value={200000}>$200,000</MenuItem>
            <MenuItem value={250000}>$250,000</MenuItem>
            <MenuItem value={350000}>$350,000</MenuItem>
            <MenuItem value={400000}>$400,000</MenuItem>
            <MenuItem value={450000}>$450,000</MenuItem>
            <MenuItem value={600000}>$600,000</MenuItem>
            <MenuItem value={1000000}>$1,000,000</MenuItem>
            <MenuItem value={2000000}>$2,000,000</MenuItem>
            <MenuItem value={999999999}>All</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-beds-simple"
          >
            Bedrooms
          </InputLabel>
          <Select
            value={this.props.beds}
            onChange={this.props.onMinMaxChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="beds"
                id="outlined-beds-simple"
              />
            }
          >
            <MenuItem value={1}>1+</MenuItem>
            <MenuItem value={2}>2+</MenuItem>
            <MenuItem value={3}>3+</MenuItem>
            <MenuItem value={4}>4+</MenuItem>
            <MenuItem value={5}>5+</MenuItem>
          </Select>
        </FormControl>

       


        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-baths-simple"
          >
            Bathrooms
          </InputLabel>
          <Select
            value={this.props.baths}
            onChange={this.props.onMinMaxChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="baths"
                id="outlined-baths-simple"
              />
            }
          >
            <MenuItem value={1}>1+</MenuItem>
            <MenuItem value={2}>2+</MenuItem>
            <MenuItem value={3}>3+</MenuItem>
            <MenuItem value={4}>4+</MenuItem>
            <MenuItem value={5}>5+</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-square_feet-simple"
          >
            Square Feet
          </InputLabel>
          <Select
            value={this.props.square_feet}
            onChange={this.props.onMinMaxChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="square_feet"
                id="outlined-square_feet-simple"
              />
            }
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={500}>500+</MenuItem>
            <MenuItem value={1000}>1000+</MenuItem>
            <MenuItem value={1500}>1500+</MenuItem>
            <MenuItem value={2000}>2000+</MenuItem>
            <MenuItem value={3000}>3000+</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-lot_size-simple"
          >
            Acres
          </InputLabel>
          <Select
            value={this.props.lot_size}
            onChange={this.props.onMinMaxChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="lot_size"
                id="outlined-lot_size-simple"
              />
            }
          >
            <MenuItem value={0}>0+</MenuItem>
            <MenuItem value={.25}>.25+</MenuItem>
            <MenuItem value={.5}>.5+</MenuItem>
            <MenuItem value={1}>1+</MenuItem>
            <MenuItem value={2}>2+</MenuItem>
            <MenuItem value={3}>3+</MenuItem>
            <MenuItem value={4}>4+</MenuItem>
            <MenuItem value={5}>5+</MenuItem>
            <MenuItem value={10}>10+</MenuItem>
            <MenuItem value={20}>20+</MenuItem>
            <MenuItem value={50}>50+</MenuItem>
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
