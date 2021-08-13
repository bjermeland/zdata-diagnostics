const Toolbar = ({
  handleSearchInput,
  handleShareButton,
  handleCopyButton,
  handleDownloadButton,
}) => {
  return (
    <div className="toolbar">
      <div className="row pt-3">
        <div className="col-lg-8">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="ai-search fs-xl"></i>
            </span>
            <input
              className="form-control"
              type="text"
              id="search-in-file"
              placeholder="Search in file"
              onChange={(e) => handleSearchInput(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row text-center text-decoration-none">
            <div className="col-lg-6 d-flex justify-content-evenly">
              <button
                type="button"
                className="btn btn-dark btn-icon"
                onClick={() => handleShareButton()}
              >
                <i className="ai-grid"></i>
              </button>
              <button
                type="button"
                className="btn btn-dark btn-icon"
                onClick={() => handleCopyButton()}
              >
                <i className="ai-copy"></i>
              </button>
              <button
                type="button"
                className="btn btn-dark btn-icon"
                onClick={() => handleDownloadButton()}
              >
                <i className="ai-download"></i>
              </button>
            </div>
            <div className="col-lg-6">
              <button
                type="button"
                className="btn btn-danger opacity-90 btn-sm d-flex justify-content-center align-items-center py-2"
              >
                Fullfør Fildeling
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
