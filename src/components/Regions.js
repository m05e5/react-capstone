import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from './Header';

const Regions = () => {
  let state = useSelector((state) => state.countriesReducer);
  return (
  <div>
    <Header page='Regions'/>
    <img src={state[0].imgUrl} />
    <ul>
        {state[0].regions.map((region) => (
          <li key={region.id}>
              {/* <Regions /> */}
              <p>{region.name}</p>
              <p>{region.today_confirmed} Cases</p>
          </li>
        ))}
      </ul>
  </div>
  );
}

export default Regions