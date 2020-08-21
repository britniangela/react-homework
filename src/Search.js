import React from "react";

export default function Search() {
  return (
    <div className="container">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
