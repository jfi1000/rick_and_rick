import { Link,NavLink,useLocation } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar.jsx';

export default function Nav(props) {
    let location = useLocation();

    return (
        <div>
            {/* <SearchBar onSearch={onSearch} /> */}
            <div>
            <Link to="/about">Go to About</Link>
            </div>
            <NavLink to="/home" >
                Home
            </NavLink>
            <div>
            <NavLink to="/logout" >
                logout
            </NavLink>
            </div>
            <div>
            <NavLink to="/" >
                inicio
            </NavLink>
            </div>
            <div>
            <NavLink to="/fav" >
                favoritos
            </NavLink>
            </div>
            {location.pathname !=="/fav"  ? <SearchBar  onSearch={props.onSearch} onRandom={props.onRandom}  /> : null  }

            
        </div>
    );
}
