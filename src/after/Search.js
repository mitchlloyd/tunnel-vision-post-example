import React from "react";
import SearchLayout from "./SearchLayout";
import SearchQuery from "./SearchQuery";
import SearchResults from "./SearchResults";
import SearchField from "./SearchField";

const Search = () => (
  <SearchQuery>
    {(query) => (
      <SearchLayout
        field={<SearchField query={query} />}
        results={<SearchResults query={query} />}
      />
    )}
  </SearchQuery>
);

export default Search;
