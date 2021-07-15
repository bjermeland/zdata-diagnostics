const Comments = ({ comments }) => {
  return (
    <div className="card border-primary mt-3">
      <div className="card-body">
        <h5 className="card-title">Comments</h5>
        <div className="card-text fs-sm">
          <input
            className="form-control form-control-sm my-4"
            type="text"
            id="text-input"
            placeholder="Write a comment.."
          />
          {comments.map((comment) => {
            return (
              <div key={comment.id} className="card mb-3">
                <div className="card-body">
                  <strong className="card-title">{comment.author}</strong>
                  <p className="text-muted pt-1 fs-xs">{comment.date}</p>
                  <p className="card-text fs-sm">{comment.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Comments
