import React from 'react';
import { useSelector } from 'react-redux';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Header from './Header';
import style from './style.module.css';

const Regions = () => {
  const state = useSelector((state) => state.countriesReducer);
  return (
    <div>
      <Header page="Regions" />
      <div className={style.intro}>
        <img className={style.introImg} src={state[0].imgUrl} alt={state[0].id} />
        <div className={style.introDetails}>
          <h2>{state[0].name}</h2>
          <p>
            {state[0].cases}
            {' '}
            Cases
          </p>
          <p>in 2020-03-22</p>
        </div>
      </div>
      <p className={style.mid}>Stated by Regions</p>
      <ul className="regions">
        {state[0].regions.map((region, index) => (
          <li key={region.id} className={index % 2 === 0 ? 'region light' : 'dark region '}>
            {/* <Regions /> */}
            <p>{region.name}</p>
            <div className={style.regCases}>
              <p>
                {region.today_confirmed}
                {' '}
                Cases
              </p>
              <ArrowRightCircle />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Regions;
