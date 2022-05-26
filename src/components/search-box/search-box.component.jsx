import React, { Component } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  // constructor(props) {
  //   super(props);

  // }

  componentDidMount() {}

  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
