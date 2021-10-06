import React from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./styles.css";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar className="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" className="header-left">
            <Avatar></Avatar>
            <Typography
              variant="h4"
              sx={{
                paddingLeft: (theme) => theme.spacing(2),
                paddingRight: (theme) => theme.spacing(6),
              }}
            >
              Art for Charity
            </Typography>
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {["Demos", "Pages", "Components", "Support"].map((nav, ndx) => {
              return (
                <Button
                  key={ndx}
                  sx={{ paddingRight: (theme) => theme.spacing(4) }}
                  endIcon={<KeyboardArrowDownIcon />}
                  color="secondary"
                >
                  {nav}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="header-nav">
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
