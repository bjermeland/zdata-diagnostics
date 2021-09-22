import dayjs from 'dayjs'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Comments = ({ values }) => {
  const auth = useSelector((state) => state.auth)
  const [comments, setComments] = useState(values)
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.length < 3) {
      setInputError(true)
      return
    }

    const newComment = {
      id: (Math.random() * (10000 - 0 + 1)) << 0,
      author: auth.user.profile.full_name,
      date: new Date(),
      text: inputValue,
    }

    console.log(newComment.id)

    setComments([...comments, newComment])

    setInputValue('')
    setInputError(false)
  }

  return (
    <div className="card bg-dark-gray-light mt-3">
      <div className="card-body">
        <h5 className="card-title">Comments</h5>
        <div className="card-text fs-sm">
          <form onSubmit={handleSubmit}>
            <div className="input-group my-4">
              <input
                className={`form-control form-control-sm ${
                  inputError ? 'border-danger text-danger' : 'border-0'
                }`}
                type="text"
                id="text-input"
                placeholder="Write a comment.."
                aria-describedby="submit-button"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value)
                  if (inputError && e.target.value.length > 2) {
                    setInputError(false)
                  }
                }}
              />
              <button className="btn btn-primary" type="submit" id="submit-button">
                Add
              </button>
            </div>
          </form>

          <div style={{ maxHeight: '35vh', overflowY: 'scroll' }}>
            {comments
              .sort((a, b) => b.date - a.date)
              .map((comment) => {
                return (
                  <div key={comment.id} className="card bg-dark-gray mb-3">
                    <div className="card-body">
                      <strong className="card-title">{comment.author}</strong>
                      <p className="text-muted pt-1 fs-xs">
                        {dayjs(comment.date).format('DD/MM/YY - HH:mm')}
                      </p>
                      <p className="card-text fs-sm text-ddd">{comment.text}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
