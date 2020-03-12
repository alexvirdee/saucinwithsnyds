import { GET_RECIPES, RECIPE_ERROR } from '../actions/types';

const initialState = {
    recipes: [],
    recipe: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload,
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