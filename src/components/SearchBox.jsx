import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchBoxCSS from "./SearchBox.module.css"

function SearchBox() {
    const [input, setInput] = useState('');
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/searched/${input}`)
    }

    return (
        <div className={SearchBoxCSS.searchBox}>
            <FontAwesomeIcon icon={faSearch} className={SearchBoxCSS.faSearch}/>
            <form onSubmit={submitHandler}>
                <input 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    value={input} 
                    className={SearchBoxCSS.searchInput}
                    placeholder="Search Recipe" 
                />
            </form>
        </div>
    );
}

export default SearchBox;