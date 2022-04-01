import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import HeaderCSS from "./Header.module.css"

function Header() {
    return (
        <div className={HeaderCSS.header}>
            <Link to='/'><h1>🥗 Vegetarian Recipes</h1></Link>
            <SearchBox />
        </div>
    );
}

export default Header;