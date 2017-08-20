import * as React from 'react';

export default class SearchResults extends React.Component {
  render() {
    return (
      <ul>
        {this.props.results.map(r => (
          <li key={r.id}>
            {r.id} - {r.name} - <a href='#' onClick={this.handleFilterClick}>{r.filter}</a>
          </li>
        ))}
      </ul>
    )
  }

  handleFilterClick = (event) => {
    event.preventDefault();
    this.props.onFilterUpdate(event.target.text);
  }
}
