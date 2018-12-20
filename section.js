import React from "react";
import "./styles.css";

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <img className="icon" alt="icon2" src={this.props.img}></img>
        <h4>{this.props.headline}</h4>
        <hr></hr>
            <ul>
              <li><a href="">first nav link</a></li>
              <li><a href="">second nav link</a></li>
              <li><a href="">third nav link</a></li>
            </ul>
      </div>
    );
  }
}

export default Section;