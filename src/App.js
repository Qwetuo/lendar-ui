import React, { Component } from "react";

import heroImage from "./images/sofa-image.jpg";

import NavBar from "./components/NavBar";
import RenderFlip from "./components/RenderFlip";

const styles = {
  background: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#E7E7E7"
  },
  container: {
    minHeight: "100vh",
    width: "360px",
    margin: "auto",
    backgroundColor: "white"
  },
  hero: {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    overflow: "hidden",
    width: "360px",
    minHeight: "250px"
  },
  introContainer: {
    fontFamily: "Roboto",
    position: "relative",
    paddingTop: "2rem",
    margin: "auto",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "1.3em",
    letterSpacing: "0.5px",
    color: "black"
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.container}>
          <NavBar />
          <div style={styles.hero}>
            <div style={styles.introContainer}>
              EARN QUICK BUCKS WHILE <RenderFlip render={"freeTime"} />
              SIMPLY SWIPE, MATCH, WORK
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
