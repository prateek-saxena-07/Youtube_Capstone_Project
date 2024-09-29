import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Search = () => {
    
    return (<>
        
        
        <div className="search" >
                    <input className="search-input" type="text" placeholder='Search' style={{width:'90%'}} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
    </>)
}

export default Search;