import { Link } from 'react-router-dom'

const Breadcrumbs = ({ url, first, second }) => {
  return (
    <nav className="pt-5" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Overview</Link>
        </li>
        <li className="breadcrumb-item">{first}</li>
        <li className="breadcrumb-item active" aria-current="page">
          {second}
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
