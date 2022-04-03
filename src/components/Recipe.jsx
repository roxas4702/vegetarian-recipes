import RecipeCSS from "./Recipe.module.css"

function Recipe(props) {
    return (
        <div className={RecipeCSS.recipe}>
            <img src={props.recipe.image} alt=""/>
            <div className={RecipeCSS.recipeText}>
                <span>{props.recipe.title}</span>
                <a href={props.recipe.spoonacularSourceUrl} className={RecipeCSS.recipeLink} target="_blank" rel="noreferrer">
                    Full Recipe (🕓 {props.recipe.readyInMinutes} min.)
                </a>
            </div>
        </div>
    );
}

export default Recipe;