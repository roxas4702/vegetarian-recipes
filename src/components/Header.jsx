import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to='/'><h1>🥗 Vegetarian Recipes</h1></Link>
            <SearchBox />
        </div>
    );
}

export default Header;