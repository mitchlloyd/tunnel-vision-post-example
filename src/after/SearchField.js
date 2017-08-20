import * as React from 'react';

export default class SearchField extends React.Component {
  render() {
    return (
      <div>
        <input onInput={this.handleInput} />
        <div>
          filter: {this.props.query.filter}
          <button onClick={this.props.query.clearFilter}>x</button>
        </div>
      </div>
    );
  }

  handleInput = ({ target }) => {
    this.props.query.setTerm(target.value);
  }
}
