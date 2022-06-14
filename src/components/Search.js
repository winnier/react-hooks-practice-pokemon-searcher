import React from "react";

function Search(props) {
  const { setSearchTerm } = props

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(event) => setSearchTerm(event.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
