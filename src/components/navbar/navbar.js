import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./navbar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h3" color="inherit">
      Ошибки месяца
    </Typography>
    
        <div className="newRow">
        <Button color="inherit" onClick={() => history.push("/")}>
          Главная
        </Button>
        <Button color="inherit" onClick={() => history.push("/about")}>
          я
        </Button>
        <Button color="inherit" onClick={() => history.push("/adduser")}>
          я
        </Button>
        <Button color="inherit" onClick={() => history.push("/edituser")}>
          я
        </Button>
        <Button color="inherit" onClick={() => history.push("/contact")}>
          я
        </Button>
        </div>
      </Toolbar>
    </AppBar>
  </div>
  );
};

export default Navbar;
