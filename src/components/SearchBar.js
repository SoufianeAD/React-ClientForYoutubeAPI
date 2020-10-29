import React from 'react';

class SearchBar extends React.Component {

    state = { seachTerm: ''};

    onSearchInputChange = (event) => {
        this.setState({seachTerm: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.seachTerm);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Video Search</label>
                    <input type="text"
                           className="ui field"
                           value={this.state.seachTerm}
                           onChange={this.onSearchInputChange}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;