import { useContext, useEffect } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import axios from "axios";
import Recipe from "../components/Recipe";
import { useParams } from 'react-router-dom';

function SearchedRecipes() {
    const { recipes, setRecipes } = useContext(RecipeContext);

    let params = useParams();

    useEffect(() => {
        const getRecipes = (name) => {
            axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&diet=vegetarian&query=${name}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(res => setRecipes(res.data.results));
        };

        getRecipes(params.search);
    }, [params.search, setRecipes])
     
    return (
        <div>
            <h2>Enjoy your meal!</h2>
            <div className="recipes-container">
				{recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
			</div>
        </div>
    );
}

export default SearchedRecipes;