import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx"; //
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "brown",
  },
  formatBox: {
    height: "900px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",

    color: "#fff",
    fontSize: "4rem",
    backgroundColor: "chocolate",
  },
  formatCont: {
    paddingTop: theme.spacing(3),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const Shopify = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isWater, setWater] = useState(0);

  const drankWater = () => {
    setWater(isWater + 1);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [isMenu, OpenMenu] = useState(null);
  const startMenu = () => {
    OpenMenu(true);
  };
  const closetMenu = () => {
    OpenMenu(false);
  };

  const history = useHistory();
  const navigateTo = () => {
    history.push("/Buy");
  };
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
            <Typography variant="h6">SHOPlife</Typography>
          </IconButton>
          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            style={{ marginLeft: "auto" }}
          >
            <Badge badgeContent={5} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={5} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton onClick={startMenu} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu open={isMenu} onClose={closetMenu}>
            <MenuItem onClick={closetMenu}>My Account</MenuItem>
            <MenuItem onClick={closetMenu}>Settings</MenuItem>
            <MenuItem onClick={closetMenu}>Log Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["saree", "suit", "saree", "coats"].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      <Box className={classes.formatBox}>
        <Container maxWidth="lg" className={classes.formatCont}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491__340.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>

                    <Typography variant="subtitle1">$100.00</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={navigateTo}>
                    BUY
                  </Button>
                  <Button size="small" color="primary" onClick={drankWater}>
                    WHISHLIST
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491__340.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                    <Typography variant="subtitle1">$100.00</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    BUY
                  </Button>
                  <Button size="small" color="primary">
                    WHISHLIST
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Shopify;
