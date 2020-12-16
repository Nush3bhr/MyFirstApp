import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  AppBar,
  Button,
  IconButton,
  Typography,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "pink",
  },

  menuButton: {
    marginRight: "20px",
    color: "darkBlue",
  },

  title: {
    color: "darkBlue",
  },
});

const Mat = () => {
  const [isMenu, OpenMenu] = useState(null);
  const startMenu = () => {
    OpenMenu(true);
  };
  const closetMenu = () => {
    OpenMenu(false);
  };

  const [isMenus, OpenMenus] = useState(null);
  const startMenus = () => {
    OpenMenus(true);
  };
  const closetMenus = () => {
    OpenMenus(false);
  };
  const classes = useStyles();

  return (
    <div>
      <AppBar position="realtive" className={classes.root}>
        <Toolbar>
          <IconButton
            onClick={startMenus}
            edge="start"
            color="inherit"
            className={classes.menuButton}
          >
            {" "}
            <MenuIcon />{" "}
          </IconButton>
          <Menu open={isMenus} onClose={closetMenus}>
            <MenuItem onClick={closetMenus}>orange</MenuItem>
            <MenuItem onClick={closetMenus}> strawberry </MenuItem>
            <MenuItem onClick={closetMenus}> mango</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            {" "}
            This is my tab{" "}
          </Typography>
          {/*<Button  style={{marginLeft: "50px"}} variant="contained"  onClick={startMenu} >Icecream Cravings? </Button>*/}

          <IconButton
            style={{ marginLeft: "600px" }}
            onClick={startMenu}
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu open={isMenu} onClose={closetMenu}>
            <MenuItem onClick={closetMenu}>Butterscotch</MenuItem>
            <MenuItem onClick={closetMenu}> orange </MenuItem>
            <MenuItem onClick={closetMenu}> Chocolate</MenuItem>
          </Menu>

          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={5} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Mat;
