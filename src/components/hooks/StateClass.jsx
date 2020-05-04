import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";



class StateClass extends React.Component {

    state = {
        city: 'NY',
        text: ''
    }

  render() {
    const {city,text} = this.state;
    return (
        <Grid container direction='column' alignContent='center'>
        <FormControl component="fieldset" >
            <FormLabel component="legend">Select your City</FormLabel>
            <RadioGroup aria-label="city" name="city1" value={city} row
                        onChange={(event) => this.setState({city: event.target.value})}>
                <FormControlLabel value="NY" control={<Radio />} label="New York" />
                <FormControlLabel value="LONDON" control={<Radio />} label="London" />
            </RadioGroup>
        </FormControl>
      <TextField id="outlined-basic" label="Comment" variant="outlined"
                 style={{width: 250, margin: '15px 0px'}}
                 value = {text}
                 onChange={(event) => this.setState({text: event.target.value})}
      />
      <div>{`city: ${city}, text: ${text}`}</div>
        </Grid>
    );
  }
}
export default StateClass;