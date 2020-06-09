import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          id: 1,
          name: "home",
          to: "/",
        },
        {
          id: 2,
          name: "about me",
          to: "/about",
        },
        {
          id: 3,
          name: "work",
          to: "/work",
        },
      ],
      active: null,
    };

    this.activeClass = this.activeClass.bind(this);
  }

  activeClass(id) {
    this.setState({ active: id });
  }

  render() {
    const { links, active } = this.state;

    return (
      <nav id="nav">
        <ul>
        {links.map((link) => {
          return (
            <li
              key={link.id}
              onClick={() => this.activeClass(link.id)}
              className={ link.id === active ? "active" : "" }
            >
              <Link to={link.to}>
                <a to={link.to}>{ link.name }</a>
              </Link>
            </li>
          );
        })}
        </ul>
      </nav>
    );
  }
}
