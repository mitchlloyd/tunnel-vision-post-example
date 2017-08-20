import fetch from '../fake-fetch';
import * as React from 'react';

export default class SearchQuery extends React.Component {
  state = {
    filter: '',
    term: '',
    results: []
  }

  actions = {
    setFilter: (filter) => {
      this.setState({ filter }, this.query);
    },

    clearFilter: () => {
      this.setState({ filter: '' }, this.query);
    },

    setTerm: (term) => {
      this.setState({ term }, this.query);
    }
  }

  query = async () => {
    const results = await fetch(`/api/stuff?filter=${this.state.filter}&term=${this.state.term}`);
    this.setState({ results });
  }

  render() {
    return this.props.children({
      ...this.actions,
      filter: this.state.filter,
      results: this.state.results
    });
  }
}
