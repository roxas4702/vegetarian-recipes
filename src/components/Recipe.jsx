import styles from "./Recipe.module.scss"
import { Link } from "react-router-dom"

function Recipe(props) {
    const { image, title, id, readyInMinutes } = props.recipe

    return (
        <div className={styles.recipe}>
            <img src={image} alt="" />
            <div className={styles.text}>
                <span>{title}</span>
                <Link className={styles.button} to={{ pathname:`/recipe/${id}`, state: props }} >
                    Full Recipe (🕓 {readyInMinutes} min.)
                </Link>
            </div>
        </div>
    );
}

export default Recipe;