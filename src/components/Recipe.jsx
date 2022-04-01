import RecipeCSS from "./Recipe.module.css"

function Recipe(props) {
    return (
        <div className={RecipeCSS.recipe}>
            <a href={props.recipe.spoonacularSourceUrl} target="_blank" rel="noreferrer">
                <img src={props.recipe.image} alt={props.recipe.title}/>
            </a>
            <div className={RecipeCSS.recipeText}>
                <span>{props.recipe.title}</span>
                <span><span className={RecipeCSS.clockEmoji}>🕓</span> {props.recipe.readyInMinutes} min.</span>
            </div>
        </div>
    );
}

export default Recipe;