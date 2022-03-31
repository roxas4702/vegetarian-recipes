import { useContext, useEffect } from "react";
import { RecipeContext } from "../Contexts/RecipeContext";
import axios from "axios";
import Recipe from "../components/Recipe";

function Popular() {
	const { recipes, setRecipes } = useContext(RecipeContext);
	useEffect(() => {
		axios.get(`https://api.spoonacular.com/recipes/random?number=16&tags=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}`)
		.then(res => setRecipes(res.data.recipes))
	}, [])
	
	return (
		<div>
			<h2>Popular Vegetarian Picks</h2>
			<div className="recipes-container">
				{recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
			</div>
		</div>
	);
}

export default Popular;