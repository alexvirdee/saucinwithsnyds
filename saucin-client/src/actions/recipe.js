import axios from 'axios';
import { setAlert } from './alert';
import { RECIPE_ERROR, GET_RECIPES, ADD_RECIPE } from './types';

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

// Add a Recipe
export const addRecipe = (formData, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {

        const res = await axios.post(`/api/v1/recipes`, formData, config);

        dispatch({
            type: ADD_RECIPE,
            payload: res.data
        })

        dispatch(setAlert('Recipe Successfully Added', 'bg-green-500 text-white'))

        history.push('/recipes');

        
    } catch (err) {
        dispatch({
            type: RECIPE_ERROR,
            payload: { msg: err.response, status: err.response }
        })
    }
}