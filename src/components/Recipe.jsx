function Recipe(props) {
    return (
        <div className='recipe'>
            <a href={props.recipe.spoonacularSourceUrl} target="_blank">
                <img src={props.recipe.image} />
            </a>
            <div className="recipe-text">
                <span className="recipe-title">{props.recipe.title}</span>
                <span className="recipe-time"><span className="clock-emoji">🕓</span> {props.recipe.readyInMinutes} min.</span>
            </div>
        </div>
    );
}

export default Recipe;