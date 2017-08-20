import React from 'react';
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";

const SearchLayout = (props) => (
  <div>
    <h2>My Great Search</h2>
    <SearchField
      onTermUpdate={props.onTermUpdate}
      onFilterClear={props.onFilterClear}
      filter={props.filter}
    />
    <hr />
    <SearchResults
      onFilterUpdate={props.onFilterUpdate}
      results={props.results}
    />
  </div>
);

export default SearchLayout;
