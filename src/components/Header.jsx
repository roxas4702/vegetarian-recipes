import styles from "./Header.module.scss"
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function Header() {
    return (
        <div className={styles.header}>
            <Link to='/'><h1>🥗 Vegetarian Recipes</h1></Link>
            <SearchBox />
        </div>
    );
}

export default Header;