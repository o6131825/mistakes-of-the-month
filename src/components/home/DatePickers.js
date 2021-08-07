import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

function DatePickers(props) {
  const { classes } = props;
  const calendarInputRef = useRef(null);
  const [date, setDate] = useState(moment(Date.now()).format("YYYY-MM-DD"));
  
  return (
    <>
      <form className={classes.container} noValidate>
        <TextField
          onChange={e => setDate(e.target.value)}
          inputRef={calendarInputRef}
          id="date"
          label={props.label || "Select a Date:"}
          type="date"
          value={date}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        
        
      </form>
      <button onClick={console.log({date}.date.toString()+' и ')}>
      клик
      </button>
      <p>Date chosen: {date}</p>
    </>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DatePickers);
