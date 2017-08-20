import React from "react";
import SearchLayout from "./SearchLayout";
import fetch from '../fake-fetch';

export default class Search extends React.Component {
  state = {
    filter: '',
    term: '',
    results: []
  }

  render() {
    return (
      <SearchLayout
        onFilterClear={this.handleFilterClear}
        onFilterUpdate={this.handleFilterUpdate}
        onTermUpdate={this.handleTermUpdate}
        filter={this.state.filter}
        results={this.state.results}
      />
    );
  }

  handleFilterUpdate = (filter) => {
    this.setState({ filter }, this.query);
  }

  handleFilterClear = () => {
    this.setState({ filter: '' }, this.query);
  }

  handleTermUpdate = (term) => {
    this.setState({ term }, this.query);
  }

  query = async () => {
    const results = await fetch(`/stuff?filter=${this.state.filter}&term=${this.state.term}`);
    this.setState({ results });
  }
}
