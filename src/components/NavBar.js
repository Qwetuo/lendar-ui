import React from "react";
import Logo from "./Logo";

const styles = {
  container: {
    background: "white",
    maxHeight: "60px",
    padding: "0.4rem",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  logo: {
    width: "50px",
    height: "50px",
    float: "left",
    marginRight: "2px"
  },
  logoText: {
    height: "50px",
    lineHeight: "50px",
    color: "#0063AF"
  }
};

const NavBar = () => {
  return (
    <div style={styles.container}>
      <Logo style={styles.logo} />
      <div style={styles.logoText}>endar</div>
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default NavBar;
