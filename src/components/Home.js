import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCountry, clearState, filterRegion } from '../redux/home/home';
import Header from './Header';
import spainImg from '../assets/spain.png'
import canadaImg from '../assets/canada.jpg'
import chinaImg from '../assets/china.png'
import italyImg from '../assets/italy.jpg'
import germanyImg from '../assets/germany.jpg'
import brazilImg from '../assets/spain.png'

const baseUrl = 'https://api.covid19tracking.narrativa.com/api/2020-03-22/country';

const Home = () => {

  let state = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();
  const countryList = [
    {
      name:'Spain',
      img: spainImg
    },
    {
      name:'Italy',
      img: italyImg
    },
    {
      name:'Canada',
      img: canadaImg
    },
    {
      name:'China',
      img: chinaImg
    },
    {
      name:'Germany',
      img: germanyImg
    },
    {
      name:'Brazil',
      img: brazilImg
    },
  ];
  const getCountries = () => {
    // console.log(state);
      for(let i = 0; i < countryList.length; i++) {
        fetch(`${baseUrl}/${countryList[i].name}`)
        .then((value) => {
          value.json().then((data)=>{
            // console.log(data.dates['2020-03-22'].countries[`${countryList[i].name}`]);
            const short = data['dates']['2020-03-22']['countries'][`${countryList[i].name}`];
            const result = {
              id: short.id,
              name: short.name,
              regions: short.regions,
              cases: short.today_confirmed,
              death: short.today_deaths,
              imgUrl:countryList[i].img
            }
            return result;
          }).then((result) => {
            dispatch(addCountry(result));
          });
        });
      }
  }
  
  useEffect(() => {
    dispatch(clearState());
    getCountries();
  }, []);
  const selectCountry = (id) => {
    console.log('11111111111111111111');
    dispatch(filterRegion(id));
    console.log('222222222222222222222');
    console.log('boo')
  }
  return (
  <div>
    
    <Header page='2020-03-22 cases'/>
    <ul>
        {state.map((country) => (
          <li key={country.id}>
            <NavLink to="/regions" onClick={() => selectCountry(country.id)}>
              {/* <Regions /> */}
              <p>{country.name}</p>
              <img src={country.imgUrl}/>
            </NavLink>
          </li>
        ))}
      </ul>
  </div>
  );
}

export default Home;