import { useContext, useEffect } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { getPopular } from "../components/ApiClient"
import Recipe from "../components/Recipe";

function Popular() {
	const { recipes, setRecipes } = useContext(RecipeContext);

	useEffect(() => {
		const apiCall = getPopular();
		apiCall.then(res => setRecipes(res.data.recipes))
	}, [setRecipes])
	
	return (
		<div className="content">
			<h2>Popular Vegetarian Picks</h2>
			<div className="recipes-container">
				{recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
			</div>
		</div>
	);
}

export default Popular;