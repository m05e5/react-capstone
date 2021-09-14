const ADD_COUNTRY = 'react-capstone/home/ADD_COUNTRY';
const CLEAR_STATE = 'react-capstone/home/CLEAR_STATE';
const FILTER_REGION = 'react-capstone/home/FILTER_REGION';
const initialState = [];

export const addCountry = (payload) => ({
  type: ADD_COUNTRY,
  payload,
});

export const clearState = () => ({
  type: CLEAR_STATE,
  payload: []
});

export const filterRegion = (id) => ({
  type: FILTER_REGION,
  id
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return [...state, action.payload];
    case CLEAR_STATE:
      return action.payload;
    case FILTER_REGION:
      console.log(action.id)
      const country = state.filter(countryy => countryy.id === action.id)
      console.log('33333333333333333333333333333');
      console.log(country);
      return [country[0]];
    default:
      return state;
  }
};

export default reducer;