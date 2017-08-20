import * as React from 'react';

export default class SearchField extends React.Component {
  render() {
    return (
      <div>
        <input onInput={this.handleInput} />
        <div>
          filter: {this.props.filter}
          <button onClick={this.props.onFilterClear}>x</button>
        </div>
      </div>
    );
  }

  handleInput = ({ target }) => {
    this.props.onTermUpdate(target.value);
  }
}
