import axios from "axios";

export const getPopular = async () => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/random?number=20&tags=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}`);
    return res;
}

export const getSearched = async (name) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&fillIngredients=true&number=80&diet=vegetarian&query=${name}&apiKey=${process.env.REACT_APP_API_KEY}`);
    return res;
}