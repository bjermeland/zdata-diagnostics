import { useState } from 'react'

const Description = () => {
  const [description, setDescription] = useState(
    `Ingen avtale. I følge sak #10000 i Freshdesk har bedriften avsluttet kundeforhold hos Uni. Bør be banken slutte å sende filer.`
  )

  const [inputValue, setInputValue] = useState(description)

  const [edit, setEdit] = useState(false)

  const handleSaveButton = () => {
    setDescription(inputValue)
    setEdit(false)
  }

  return (
    <div className="card bg-dark-gray-light">
      <div className="card-body">
        <h5 className="card-title">
          Description
          {!edit ? (
            <button className="btn btn-link pt-2" onClick={() => setEdit(true)}>
              <i className="ai-edit"></i>
            </button>
          ) : (
            <button className="btn btn-link pt-2 fs-6" onClick={() => handleSaveButton()}>
              Save
            </button>
          )}
        </h5>
        {!edit ? (
          <p className="card-text text-ddd fs-sm">
            {description && description !== '' ? description : 'Customer has no description.'}
          </p>
        ) : (
          <textarea
            className="form-control border-0 fs-sm"
            onChange={(e) => setInputValue(e.target.value)}
            style={{ height: '100px' }}
            value={inputValue}
          />
        )}
      </div>
    </div>
  )
}

export default Description
