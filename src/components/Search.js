import React from "react";

function Search(props) {
  return (
    <div>
      <nav className="navbar navbar-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder={props.value}
            onChange={props.onChange}
            aria-label="search"
          />
        </form>
      </nav>
    </div>
  );
}

export default Search;
