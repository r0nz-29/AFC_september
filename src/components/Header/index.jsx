import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Context } from "../context";
import "./styles.css";

const Header = () => {
  const globalContext = React.useContext(Context);
  return (
    <AppBar position="sticky">
      <Toolbar className="header">
        <div
          className="header-left"
          onClick={() => globalContext.setLandingPage("home")}
        >
          <Avatar></Avatar>
          <Typography variant="h3">ArtForCharity</Typography>
        </div>
        <div className="header-nav">
          <Button
            variant="contained"
            onClick={() => globalContext.setLandingPage("gallery")}
          >
            Art Gallery
          </Button>
          <Button
            variant="contained"
            onClick={() => globalContext.setLandingPage("events")}
          >
            Events
          </Button>
          <Button
            variant="contained"
            onClick={() => globalContext.setLandingPage("about")}
          >
            About Us
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
