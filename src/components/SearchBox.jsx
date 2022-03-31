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
        <div className="search-box">
            <FontAwesomeIcon icon={faSearch} className='fa-search'/>
            <form onSubmit={submitHandler}>
                <input 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    value={input} 
                    className="search-input" 
                    placeholder="Search Recipe" 
                />
            </form>
        </div>
    );
}

export default SearchBox;