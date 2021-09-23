import { useEffect, useRef, useState } from 'react'
import { Modal } from 'bootstrap'

const SupportCaseModal = () => {
  const [modal, setModal] = useState<Modal | null>(null)
  const modalRef = useRef(null)

  useEffect(() => {
    if (modalRef && modalRef.current) {
      setModal(
        new Modal(modalRef.current, {
          backdrop: 'static',
          keyboard: false,
        })
      )
    }
  }, [])

  const partyIds = [
    '123456789',
    '123456789',
    '123456789',
    '123456789',
    '123456789',
    '123456789',
    '123456789',
  ]

  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-icon"
        title="Support Case"
        // onClick={() => modal?.show()}
      >
        <i className="ai-folder-plus"></i>
      </button>
      <div
        id="support-case-modal"
        className="modal fade"
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <ul className="nav nav-tabs mb-0" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#create-case"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="ai-plus me-2 mt-n1"></i>
                    Create case
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#add-existing"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="ai-file-plus me-2 mt-n1"></i>
                    Add to existing case
                  </a>
                </li>
              </ul>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body tab-content py-4">
              <form
                className="tab-pane fade show active"
                id="create-case"
                onSubmit={() => console.log('created new case')}
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input className="form-control" type="text" id="name" />
                </div>
                <div className="row">
                  <div className="col-md mb-3">
                    <label htmlFor="freshdesk-id" className="form-label">
                      Freshdesk ID
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="freshdesk-id"
                      placeholder="00001"
                    />
                  </div>
                  <div className="col-md mb-3">
                    <label htmlFor="handler" className="form-label">
                      Handler
                    </label>
                    <select className="form-select" id="handler">
                      <option>Choose..</option>
                      <option>Matias</option>
                      <option>Kjetil</option>
                      <option>Marcus</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="freshdesk-id" className="form-label">
                    Party IDs
                  </label>
                  <div className="d-flex mt-2">
                    <div>
                      {partyIds.map((partyId) => {
                        return (
                          <div className="badge bg-dark p-2 mb-2 ms-4">
                            <span>{partyId.replace(/(.{3})/g, '$1 ').trim()}</span>
                            <button
                              type="button"
                              className="btn btn-link badge text-danger float-end p-0"
                              onClick={() => console.log(`remove ${partyId}`)}
                            >
                              <i className="ai-x text-danger ps-2" />
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm d-block mt-6" type="submit">
                  Create support case
                </button>
              </form>
              <form
                className="tab-pane fade"
                id="add-existing"
                onClick={() => console.log('added case to existing')}
              >
                <div className="row">
                  <div className="mb-3">
                    <label htmlFor="handler" className="form-label">
                      Case
                    </label>
                    <select className="form-select" id="handler">
                      <option>Choose..</option>
                      <option>UniMicro</option>
                      <option>Sparebank 1 SMN</option>
                      <option>Knif Regnskap</option>
                      <option>BDO AS</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm d-block mt-6" type="submit">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportCaseModal
