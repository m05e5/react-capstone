/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronCompactLeft, GearFill, MicFill } from 'react-bootstrap-icons';

const Header = (props) => (
  <div className="nav">
    <NavLink to="/" className="navBack">
      <ChevronCompactLeft className="navIcon" size={20} />
      <p>2022</p>
    </NavLink>
    <p className="navTitle">{props.page}</p>
    <div className="navAction">
      <MicFill className="navIcon" size={20} />
      <GearFill className="navIcon" size={20} />
    </div>
  </div>
);

export default Header;
