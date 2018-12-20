import React from "react";
import "./styles.css";

class MainSection extends React.Component {
  render() {
    return (
      <div className="main-logo">
        <img className="logo-pic" src={this.props.img} alt="logo"></img>
        <h4>{this.props.title}</h4>
        <hr></hr>
        <p className="intro">{this.props.description}</p>
      </div>
    );
  }
}

export default MainSection;