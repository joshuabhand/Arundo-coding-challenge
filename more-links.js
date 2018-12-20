import React from "react";
import "./styles.css";

class MoreLinks extends React.Component {
  render() {
    return (
      <ul className="more-links">
        <li className="more-links">More Links</li>
        <li><a href="">FIRST NAV LINK</a></li>
        <li><a href="">SECOND LONG LINK</a></li>
        <li><a href="">THIRD NAV LINK</a></li>
        <li><a href="">FOURTH NAV LINK</a></li>
      </ul>
    );
  }
}

export default MoreLinks;