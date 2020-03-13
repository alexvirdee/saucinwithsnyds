import axios from 'axios';
import { setAlert } from './alert';
import { RECIPE_ERROR, GET_RECIPES } from './types';

// Get All Recipes
export const getRecipes = () => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/recipes`);
        
        dispatch({
            type: GET_RECIPES,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: RECIPE_ERROR,
            payload: { msg: err.response, status: err.response }
        });
    }
}
