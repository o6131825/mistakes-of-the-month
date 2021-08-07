import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "moment/locale/ru";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import "../dtpic/dtpic.css"

import Datatab from "../datatab/datatab"
import axios from "axios";



class Dtpic extends React.Component {
    
  render(){
    
    
    return (
      <div className="botmarg">
        <Grid container spacing={3}>
          <Grid item xs>
            <div>
              <label htmlFor="start">Start date:</label>
              <input type="date" id="start" name="trip-start"></input>
              <label htmlFor="start">End date:</label>
              <input type="date" id="end" name="trip-start"></input>
            </div>
          </Grid>
          <Grid item xs>
            
          </Grid>
          <Grid item xs>
  
          </Grid>
        </Grid>
        <Datatab2 />
  
      
  
 
  
       
      </div>
    );
  }
}

export default Dtpic;
