import React from "react";
import { Menu } from "semantic-ui-react";

import Logo from "./Logo";

const styles = {
  container: {
    maxHeight: "60px",
    padding: "0.4rem"
  },
  logo: {
    width: "50px",
    height: "50px",
    float: "left"
  },
  logoText: {
    float: "right",
    height: "50px",
    lineHeight: "50px",
    marginLeft: "3px",
    color: "#0063AF"
  }
};

const NavBar = () => {
  return (
    <div>
      <Menu fixed="top" pointing>
        <div style={styles.container}>
          <Logo style={styles.logo} />
          <div style={styles.logoText}>endar</div>
        </div>
      </Menu>
    </div>
  );
};

export default NavBar;
