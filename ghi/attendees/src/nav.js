import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';

function Nav() {
    return (
        <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='new-location.html' activeStyle>
            New Location
          </NavLink>
          <NavLink to='new-conference.html' activeStyle>
            New conference
          </NavLink>
          <NavLink to='new-presentation.html' activeStyle>
            New presentation
          </NavLink>
        </NavMenu>
      </Nav>
    </>
    );
  }

  export default Nav;
