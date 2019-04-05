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

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_STATE = 'UPDATE_STATE'
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE'
export const UPDATE_IMGURL = 'UPDATE_IMGURL'
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
export const UPDATE_RENT = 'UPDATE_RENT'


function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
      case UPDATE_NAME:
        return {...state, name: payload}   
      case UPDATE_ADDRESS:
        return {...state, address: payload}   
      case UPDATE_CITY:
        return {...state, state: payload}   
      case UPDATE_STATE:
        return {...state, state: payload}   
      case UPDATE_ZIPCODE:
        return {...state, zipcode: payload}   
      case UPDATE_IMGURL:
        return {...state, imgUrl: payload}   
      case UPDATE_MORTGAGE:
        return {...state, mortgage: payload}   
      case UPDATE_RENT:
        return {...state, rent: payload}   
      default:  
        return state;
    }
}

export default createStore(reducer)
