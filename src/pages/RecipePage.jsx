import styles from "./RecipePage.module.scss"

function RecipePage({ location }) {
    const { state } = location;
    const { image, title, readyInMinutes, servings, extendedIngredients, analyzedInstructions } = state.recipe

    return (
        <div className={styles.recipe}>
                <h2>{title}</h2>
                <img className={styles.image} src={image} alt="" />
                <div className={styles.timeservings}>
                    <span>🕓 {readyInMinutes} min.</span>
                    <span>🍽️ x{servings}</span>
                </div>

            <div className={styles.recipeText}>
                <ul className={styles.ingredients}>
                    <h3>Ingredients</h3>
                    {extendedIngredients.map((ingredient) => (
                        <li key={ingredient.original}>{ingredient.original}</li>
                    ))}
                </ul>
                <ol className={styles.instructions}>
                    <h3>Instructions</h3>
                    {analyzedInstructions.map(recipe => recipe.steps.map((step) => (
                        <li key={step.number}>{step.step}</li>
                    )))}
                </ol>
            </div>
        </div>
    );
}

export default RecipePage;