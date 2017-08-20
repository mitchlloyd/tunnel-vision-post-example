import React from 'react';

const SearchLayout = (props) => (
  <div>
    <h2>My Great Search</h2>
    {props.field}
    <hr />
    {props.results}
  </div>
);

export default SearchLayout;
