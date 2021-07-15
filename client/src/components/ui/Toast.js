import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const ToastComponent = ({ closeToast, toastProps, title, body }) => (
  <div className="toast fade show text-success" role="alert" aria-live="assertive" aria-atomic="true">
    <div className={`toast-header ${!body && 'border-0'}`}>
      <i className="ai-check-circle me-2"></i>
      <span className="me-auto">{title}</span>
      <button
        className="btn-close ms-2 mb-1"
        type="button"
        data-bs-dismiss="toast"
        aria-label="Close"
        onClick={closeToast}
      ></button>
    </div>
    {body && <div className="toast-body">{body}</div>}
  </div>
)

const toasts = (title, body) => {
  toast(<ToastComponent title={title} body={body} />, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  })
}

export { ToastContainer as ToastSection, toasts as toast }
