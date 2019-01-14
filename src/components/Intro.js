import React from "react";

import heroImage from "../images/sofa-image.jpg";

import RenderFlip from "./RenderFlip";
import RectangleButton from "./RectangleButton";

const styles = {
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
  },
  extraButtonStyle: {
    margin: "1rem",
    padding: "3px 2rem"
  }
};

const Intro = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.introContainer}>
        EARN QUICK BUCKS WHILE <RenderFlip render={"freeTime"} />
        SIMPLY SWIPE, MATCH, WORK
        <RectangleButton
          message="Start Now"
          extraStyle={styles.extraButtonStyle}
        />
      </div>
    </div>
  );
};

export default Intro;
