const SearchInput = ({ value }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">
        <i className="ai-search fs-xl"></i>
      </span>
      <input
        className="form-control"
        type="text"
        id="search-in-file"
        placeholder="Search in file"
        onChange={(e) => value(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
