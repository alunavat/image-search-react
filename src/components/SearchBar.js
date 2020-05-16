import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    // console.log(event.target.value);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    // console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui from">
          <div className="field">
            <label>Image Search</label>
            <br></br>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* Do not put () for callback function */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
