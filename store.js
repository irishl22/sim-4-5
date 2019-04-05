import { createStore } from 'redux'

const initialState = {
    recipe: '',
    recipeCategory: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    list: []
}

export const UPDATE_RECIPE = 'UPDATE_RECIPE'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const UPDATE_LIST = 'UPDATE_LIST'

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
      case UPDATE_RECIPE:
        return {...state, recipe: payload}
      case UPDATE_CATEGORY:
        return {...state, recipeCategory: payload}  
      case UPDATE_AUTHOR_FIRST:
        return {...state, authorFirst: payload}    
      case UPDATE_AUTHOR_LAST:
        return {...state, authorLast: payload} 
      case UPDATE_INGREDIENTS:
      const addedIngredients = [...state.ingredients, payload]
        return {...state, ingredients: addedIngredients}     
      case UPDATE_INSTRUCTIONS:
      const addedInstructions = [...state.instructions, payload]
        return {...state, instructions: addedInstructions}     
      case UPDATE_LIST:
      const { recipe, recipeCategory, authorFirst, authorLast, ingredients, instructions } = state
      const item = { recipe, recipeCategory, authorFirst, authorLast, ingredients, instructions}
      const updatedRecipes = [...state.list, item]
        return {...state, list: updatedRecipes}     
      default:  
        return state;
    }
}

export default createStore(reducer)
