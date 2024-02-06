import React from "react";

export default class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    render() {
        return (
            <>
                <input placeholder="breed" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} />
                <button onClick={() => this.props.searchDogs(this.state.inputValue)}>Submit</button>
            </>
        )
    }
}