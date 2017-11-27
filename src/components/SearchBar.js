import React from 'react'
import './SearchBar.css';

class SearchBar extends React.Component {


    render() {

        return (
            <div>
                <input class="form-control" type="text" />

                <ul className="dropdown-menu">
                    <li className="dropdown-item">
                        <a href="/">test</a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default SearchBar