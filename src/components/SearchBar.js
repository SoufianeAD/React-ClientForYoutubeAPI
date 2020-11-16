import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmit(searchTerm);
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <label>Video Search</label>
                <input type="text"
                       className="ui field"
                       value={searchTerm}
                       onChange={(event) => setSearchTerm(event.target.value)}
                />
            </form>
        </div>
    );
}

export default SearchBar;