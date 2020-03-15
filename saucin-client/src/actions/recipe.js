import axios from 'axios';
import { setAlert } from './alert';
import { RECIPE_ERROR, GET_RECIPES, GET_RECIPES_BREAKFAST, GET_RECIPES_LUNCH, GET_RECIPES_DINNER, GET_RECIPES_DESSERT, ADD_RECIPE, GET_RECIPE } from './types';

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


// Get Breakfast Recipes
export const getRecipesBreakfast = () => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/recipes/breakfast`);
        
        dispatch({
            type: GET_RECIPES_BREAKFAST,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: RECIPE_ERROR,
            payload: { msg: err.response, status: err.response }
        });
    }
}


// Get lunch Recipes
export const getRecipesLunch = () => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/recipes/lunch`);
        
        dispatch({
            type: GET_RECIPES_LUNCH,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: RECIPE_ERROR,
            payload: { msg: err.response, status: err.response }
        });
    }
}

// Get dinner Recipes
export const getRecipesDinner = () => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/recipes/dinner`);
        
        dispatch({
            type: GET_RECIPES_DINNER,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: RECIPE_ERROR,
            payload: { msg: err.response, status: err.response }
        });
    }
}


// Get dessert Recipes
export const getRecipesDessert = () => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/recipes/dessert`);
        
        dispatch({
            type: GET_RECIPES_DESSERT,
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

// Get Single Recipe
export const getRecipe = id => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/recipes/${id}`);
        
        dispatch({
            type: GET_RECIPE,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: RECIPE_ERROR,
            payload: { msg: err.response, status: err.response }
        });
    }
}