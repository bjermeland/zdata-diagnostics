const SearchInput = ({ value }) => {
  return (
    <div className="input-group bg-dark-gray-light mb-3">
      <span className="input-group-text border-0 bg-dark-gray" id="search-icon">
        <i className="ai-search fs-xl"></i>
      </span>
      <input
        className="form-control border-0"
        type="text"
        id="search-in-file"
        placeholder="Search in file"
        onChange={(e) => value(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
