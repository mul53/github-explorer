import React from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item renderAs="span">
          <Link to="/">Github Explorer</Link>
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container position="end">
          <Navbar.Item renderAs="span">
            <Link to="/search">Search</Link>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}
