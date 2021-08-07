import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import "./home.css"



 

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: ''};
  
    
  }


  


  click = (event) => {
    //console.log(this.state.value1)
    this.setState({value1: event.target.value});
    //console.log('Клик')
    console.log(this.state.value1)
  
  }

  render() {
    return (
      <div className="datePic">
        <Grid container justifyContent="space-around">
          <form //className={classes.container} 
          noValidate>
            <TextField
              id="date"
              label="Дата с"
              type="date"
              defaultValue="2017-05-24"
             // value={this.state.value}
              onChange={this.click}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
         
          <button onClick={this.click}>Кнопка</button>
        </Grid>
      </div>
    );
  
  }

}

export default Home;