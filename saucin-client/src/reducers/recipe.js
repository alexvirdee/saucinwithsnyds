import { GET_RECIPES, RECIPE_ERROR, ADD_RECIPE, GET_RECIPE, GET_RECIPES_BREAKFAST } from '../actions/types';

const initialState = {
    recipes: [],
    recipe: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_RECIPES_BREAKFAST:
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload,
                loading: false
            };
        case GET_RECIPE:
            return {
                ...state,
                recipe: payload,
                loading: false
            };
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [payload, ...state.recipes],
                loading: false
            };
        case RECIPE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}