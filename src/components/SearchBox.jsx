import styles from "./SearchBox.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function SearchBox() {
    const [input, setInput] = useState('');
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/searched/${input}`)
    }

    return (
        <div className={styles.searchBox}>
            <FontAwesomeIcon icon={faSearch} className={styles.faSearch}/>
            <form onSubmit={submitHandler}>
                <input 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    value={input} 
                    className={styles.input}
                    placeholder="Search Recipe" 
                />
            </form>
        </div>
    );
}

export default SearchBox;