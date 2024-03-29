import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const ToastComponent = ({ title, body }: { title: string; body?: string }) => (
  <div
    className="toast fade show bg-dark-gray"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div className={`toast-header bg-dark-gray ${!body && 'border-0'}`}>
      <i className="ai-check-circle me-2"></i>
      <span className="me-auto">{title}</span>
    </div>
    {body && <div className="toast-body text-light">{body}</div>}
  </div>
)

const toasts = (title: string, body?: string) => {
  toast(<ToastComponent title={title} body={body} />, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    className: 'bg-dark-gray',
  })
}

export { ToastContainer as ToastSection, toasts as toast }
