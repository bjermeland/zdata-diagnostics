import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { getBreadcrumbsByPath } from '../../utils/pagetitles'
import { getBankNameByBic } from '../../utils/bank'
import Breadcrumbs from '../ui/Breadcrumbs'
import Spinner from '../ui/Spinner'
import Table from './Table'

const comments = [
  {
    id: 0,
    author: 'Matias Tonning',
    date: '20/04/21 - 14:15',
    text: 'Fant sak #10000 i Freshdesk, bedrift ikke lenger kunde hos Uni',
  },
  {
    id: 1,
    author: 'Matias Tonning',
    date: '20/04/21 - 14:12',
    text: 'Finner ingen aktiv avtale',
  },
]

const Company = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(null)
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const history = useHistory()

  useEffect(() => {
    const breadcrumbs = getBreadcrumbsByPath(location.pathname)
    setCurrentPage(breadcrumbs[breadcrumbs.length - 1].name)
    setBreadcrumbs(breadcrumbs)
  }, [location, history])

  //* ---

  const [bankName, setBankName] = useState(null)

  useEffect(() => {
    setBankName(getBankNameByBic('SPTRNO22'))
  }, [location.pathname])

  const handleRowClick = (row) => {
    history.push(`${location.pathname}/${row.id}`)
  }

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      grow: 3,
    },
    {
      name: 'State',
      selector: 'state',
      sortable: true,
    },
    {
      name: 'Created',
      selector: 'created',
      sortable: true,
    },
  ]

  const data = [
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f78e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f783',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f75e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f71e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4511f041f70e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
    {
      id: 'e67af04e-5270-45c1-be0a-4541f041f78e',
      name: 'P.00921643497.000.C053.20210706064739-E2C6G.DAT',
      state: 'DownloadProcess',
      created: '07/06/2021 06:47:55',
    },
  ]

  return currentPage ? (
    <section>
      <div className="border-bottom pt-5 pb-1 mt-2 mb-4 row">
        <Breadcrumbs currentPage={currentPage} items={breadcrumbs} />
        <div className="col-lg-8">
          <h1 className="mt-lg-4 pt-2 fs-2">Bedrift Alpha AS</h1>
          <p className="text-muted">{bankName ? `${bankName} (SPTRNO22)` : 'SPTRNO22'}</p>
        </div>
        <div className="col-lg-4">
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title fs-md pb-1">External Links</h5>
              <div className="card-text fs-sm">
                <div className="row text-center text-decoration-none">
                  <div className="col">
                    <a className="text-decoration-none" href="#" target="_blank" rel="noreferrer">
                      <i className="ai ai-headphones d-block fs-lg py-1"></i>
                      <span className="text-underline-hover">Freshdesk</span>
                    </a>
                  </div>
                  <div className="col">
                    <a
                      className="text-decoration-none"
                      href="https://payadmin.zdata.no/Admin#/searchOrgNo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ai ai-key d-block fs-lg py-1"></i>
                      <span className="text-underline-hover">Pay Admin</span>
                    </a>
                  </div>
                  <div className="col">
                    <a
                      className="text-decoration-none"
                      href={`https://www.proff.no/bransjesøk?q=${currentPage}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ai ai-compass d-block fs-lg py-1 text-decoration-none"></i>
                      <span className="text-underline-hover">Proff.no</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 card d-block border-primary pt-3" id="table">
          <Table columns={columns} data={data} onRowClicked={(row) => handleRowClick(row)} displayToolbar />
        </div>
        <div className="col-lg-4 mb-2">
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title">Description</h5>
              <p className="card-text fs-sm">
                Ingen avtale. I følge sak #10000 i Freshdesk har bedriften avsluttet kundeforhold hos Uni. Bør be banken
                slutte å sende filer.
              </p>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  ) : (
    <Spinner />
  )
}

export default Company
