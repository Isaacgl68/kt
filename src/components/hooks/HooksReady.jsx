import React, {useEffect, useReducer, useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {callServer} from "../../utils/Utils";

function margeState(oldState, payload){
    return Object.assign({}, oldState, payload);
}

function HooksReady(props){

    // const [city, setCity] = useState('NY');
    // const [text, setText] = useState('');
    const [fields, setFields] = useReducer(margeState, {city:'NY', text:''});
    const [count, setCount] = useReducer((state)=> {return state+1}, 0);
    const [msg, setMsg] = useState('');
    useEffect(()=>
    {
        console.log('set interval')
        const handler = setInterval(() => setCount(), 1000);
        return ()=> {
            console.log('clearing')
            clearInterval(handler)};
    }, []);

    useEffect(()=> {
        callServer(fields.city).then((msg)=> {
            console.log('call server')
            setMsg(msg);
        })
    }, [fields.city])


    return (
        <Grid container direction='column' alignContent='center'>
            <FormControl component="fieldset" >
                <FormLabel component="legend">Select your City</FormLabel>
                <RadioGroup aria-label="city" name="city1" value={fields.city} row
                            onChange={(event) => setFields({ city:event.target.value})}>
                    <FormControlLabel value="NY" control={<Radio />} label="New York" />
                    <FormControlLabel value="LONDON" control={<Radio />} label="London" />
                </RadioGroup>
            </FormControl>
            <TextField id="outlined-basic" label="Comment" variant="outlined"
                       style={{width: 250, margin: '15px 0px'}}
                       value = {fields.text}
                       onChange={(event) => setFields({ text:event.target.value})}
            />
            <div>{`city: ${fields.city}, text: ${fields.text}`}</div>
            <div style={{margin: '8px 0px'}}>{`clock: ${count}`}</div>
            <div style={{margin: '8px 0px'}}>{msg}</div>
        </Grid>
    );
}
export default HooksReady;