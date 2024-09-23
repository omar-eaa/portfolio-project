import FigmaDark from "../assets/img/icon/Figma-Dark.svg"
import html from "../assets/img/icon/HTML.svg"
import css from "../assets/img/icon/CSS.svg"
import javaScript from "../assets/img/icon/JavaScript.svg"
import React from "../assets/img/icon/React-Dark.svg"
import firebase from "../assets/img/icon/Firebase-Dark.svg"
import wordpress from "../assets/img/icon/Wordpress.svg"
import p5js from "../assets/img/icon/p5js.svg"
import github from "../assets/img/icon/Github-Dark.svg"
import npm from "../assets/img/icon/Npm-Dark.svg"

export default function MySkills() {
    return (
      <div className="skills-container">
        <div className="icon-wrapper">
          <div className="icon-container">
            <img src={FigmaDark} alt="Figma-Dark.svg" />
            <img src={html} alt="icon/HTML.svg" />
            <img src={css} alt="CSS.svg" />
            <img src={javaScript} alt="JavaScript.svg" />
            <img src={React} alt="React-Dark.svg" />
            <img src={firebase} alt="Firebase-Dark.svg" />
            <img src={wordpress} alt="Wordpress.svg" />
            <img src={p5js} alt="p5js.svg" />
            <img src={github} alt="Github-Dark.svg" />
            <img src={npm} alt="Npm-Dark.svg" />
          </div>
  
          {/* Duplicate icon set for seamless scrolling */}
          <div className="icon-container">
          <img src={FigmaDark} alt="Figma-Dark.svg" />
          <img src={html} alt="icon/HTML.svg" />
          <img src={css} alt="CSS.svg" />

          <img src={javaScript} alt="JavaScript.svg" />
          <img src={React} alt="React-Dark.svg" />
          <img src={firebase} alt="Firebase-Dark.svg" />
          <img src={wordpress} alt="Wordpress.svg" />
            <img src={p5js} alt="p5js.svg" />
            <img src={github} alt="Github-Dark.svg" />
            <img src={npm} alt="Npm-Dark.svg" />
          </div>
        </div>
      </div>
    );
  }
  