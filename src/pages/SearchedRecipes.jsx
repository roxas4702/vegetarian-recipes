import { useContext, useEffect } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { useParams } from 'react-router-dom';
import { getSearched } from "../components/ApiClient";
import Recipe from "../components/Recipe";

function SearchedRecipes() {
    const { recipes, setRecipes } = useContext(RecipeContext);

    let params = useParams();

    useEffect(() => {
        const apiCall = getSearched(params.search);
		apiCall.then(res => setRecipes(res.data.results))
    }, [params.search, setRecipes])
     
    return (
        <div className="content">
            <h2>Enjoy your meal!</h2>
            <div className="recipes-container">
				{recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
			</div>
        </div>
    );
}

export default SearchedRecipes;