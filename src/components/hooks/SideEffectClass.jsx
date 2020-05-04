import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {callServer} from "../../utils/Utils";


class SideEffectClass extends React.Component {

    state = {
        city: 'NY',
        text: '',
        count: 0,
        msg: ''
    };
    handler;

    componentDidMount() {
        this.handler = setInterval(() => this.setState({count: this.state.count + 1}), 1000);
        callServer(this.state.city).then((msg) => (this.setState({msg})));
    }

    componentWillUnmount() {
        clearInterval(this.handler);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.city != this.state.city){
            callServer(this.state.city).then((msg) => (this.setState({msg})));
        }
    }

    render() {
        const {city, text, count, msg} = this.state;
        return (
            <Grid container direction='column' alignContent='center'>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select your City</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={city} row
                                onChange={(event) => this.setState({city: event.target.value})}>
                        <FormControlLabel value="NY" control={<Radio/>} label="New York"/>
                        <FormControlLabel value="LONDON" control={<Radio/>} label="London"/>
                    </RadioGroup>
                </FormControl>
                <TextField id="outlined-basic" label="Comment" variant="outlined"
                           style={{width: 250, margin: '15px 0px'}}
                           value={text}
                           onChange={(event) => this.setState({text: event.target.value})}
                />
                <div style={{margin: '8px 0px'}}>{`city: ${city}, text: ${text}`}</div>
                <div style={{margin: '8px 0px'}}>{`clock: ${count}`}</div>
                <div style={{margin: '8px 0px'}}>{msg}</div>
            </Grid>
        );

    }

}
export default SideEffectClass;