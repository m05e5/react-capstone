/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { addCountry, clearState, filterRegion } from '../redux/home/home';
import Header from './Header';
import spainImg from '../assets/spain.jpg';
import canadaImg from '../assets/canada.jpg';
import chinaImg from '../assets/china.jpg';
import italyImg from '../assets/italy.jpg';
import germanyImg from '../assets/germany.png';
import brazilImg from '../assets/brazil.png';
import coronaImg from '../assets/corona.jpg';
import style from './style.module.css';

const baseUrl = 'https://api.covid19tracking.narrativa.com/api/2020-03-22/country';

const Home = () => {
  const state = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();
  const countryList = [
    {
      name: 'Italy',
      img: italyImg,
    },
    {
      name: 'Canada',
      img: canadaImg,
    },
    {
      name: 'China',
      img: chinaImg,
    },
    {
      name: 'Germany',
      img: germanyImg,
    },
    {
      name: 'Brazil',
      img: brazilImg,
    },
    {
      name: 'Spain',
      img: spainImg,
    },
  ];
  const dark = () => {
    const con = document.querySelectorAll('.country');
    for (let j = 0; j < con.length; j += 4) {
      if (j % 2 === 0) {
        j + 1 < con.length && (con[j + 1].classList.add('dark'));
        j + 2 < con.length && (con[j + 2].classList.add('dark'));
      }
    }
  };

  const getCountries = () => {
    for (let i = 0; i < countryList.length; i += 1) {
      fetch(`${baseUrl}/${countryList[i].name}`)
        .then((value) => {
          value.json().then((data) => {
            const short = data.dates['2020-03-22'].countries[`${countryList[i].name}`];
            const result = {
              id: short.id,
              name: short.name,
              regions: short.regions,
              cases: short.today_confirmed,
              death: short.today_deaths,
              imgUrl: countryList[i].img,
            };
            return result;
          }).then((result) => {
            dispatch(addCountry(result));
          }).then(() => {
            dark();
          });
        });
    }
  };

  useEffect(() => {
    dispatch(clearState());
    getCountries();
  }, []);
  const selectCountry = (id) => {
    dispatch(filterRegion(id));
  };
  return (
    <div>

      <Header page="Hi-Coro" />
      <div className={style.intro}>
        <img src={coronaImg} className={style.introImg} alt="corona" />
        <div className={style.introDetails}>
          <h2>Covid 19</h2>
          <p>Number of cases</p>
          <p>in 2020-03-22</p>
        </div>
      </div>
      <p className={style.mid}>STATES BY COUNTRY</p>
      <ul className="countries">
        {state.map((country) => (
          <li key={country.id} className="country">
            <NavLink to="/regions" onClick={() => selectCountry(country.id)}>
              <div className="countryName">
                <ArrowRightCircle className="arrow" />
                <div>
                  <h2>{country.name}</h2>
                  <p>
                    {country.cases}
                    {' '}
                    Cases
                  </p>
                </div>
              </div>

              <img className="countryImg" src={country.imgUrl} alt={country.name} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
