import { createStore } from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    imgUrl: '',
    mortgage: 0,
    rent: 0
}

export const UPDATE_NAME_ADD_CITY_ST_ZIP = 'UPDATE_NAME_ADD_CITY_ST_ZIP'
export const UPDATE_IMGURL = 'UPDATE_IMGURL'
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
export const UPDATE_RENT = 'UPDATE_RENT'


function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
      case UPDATE_NAME_ADD_CITY_ST_ZIP:
        return {...state, name: payload, address: payload, state: payload, state: payload, zipcode: payload}    
      case UPDATE_IMGURL:
        return {...state, imgUrl: payload}   
      case UPDATE_MORTGAGE_RENT:
        return {...state, mortgage: payload, rent: payload}     
      default:  
        return state;
    }
}

export default createStore(reducer)
