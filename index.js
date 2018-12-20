import React from "react";
import ReactDOM from "react-dom";
import Section from "./section";
import MainSection from "./main-section";
import MoreLinks from "./more-links";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <MainSection title="WEBSITE NAME" description="This is a great website. This is some introductory paragraph about the website." img="https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746__340.jpg"/>
        <Section headline="HEADLINE #1" img="https://www.redcoolmedia.net/images/xwebphotostudioicon128.jpg.pagespeed.ic.-_JatqScbk.jpg"/>
        <Section headline="HEADLINE #2" img="https://www.redcoolmedia.net/images/xwebphotostudioicon128.jpg.pagespeed.ic.-_JatqScbk.jpg"/>
        <Section headline="HEADLINE #3" img="https://www.redcoolmedia.net/images/xwebphotostudioicon128.jpg.pagespeed.ic.-_JatqScbk.jpg"/>
        <MoreLinks />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
