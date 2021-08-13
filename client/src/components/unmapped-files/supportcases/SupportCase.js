import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { getBreadcrumbsByPath } from '../../../utils/pagetitles'
import SupportCaseHeader from './Header'
import Spinner from '../../ui/Spinner'
import Table from '../Table'

const SupportCase = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(null)
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const history = useHistory()

  useEffect(() => {
    const breadcrumbs = getBreadcrumbsByPath(location.pathname)
    setCurrentPage(breadcrumbs[breadcrumbs.length - 1].name)
    setBreadcrumbs(breadcrumbs)
  }, [location])

  //* ---

  const handleRowClick = (row) =>
    history.push(`/unmapped-files/evry/${row.orgNumber}`)

  const columns = [
    {
      name: 'Company',
      selector: 'company',
      sortable: true,
      cell: (row) => (
        <div onClick={() => handleRowClick(row)}>
          <span>{row.company}</span>
          <br />
          <span
            style={{
              fontSize: '13px',
              color: '#aaa',
              position: 'relative',
              top: '4px',
            }}
          >
            {row.orgNumber}
          </span>
        </div>
      ),
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
      cell: (row) => (
        <span onClick={() => handleRowClick(row)} className="fs-7">
          {row.description}
        </span>
      ),
    },
    {
      name: 'File Types',
      selector: 'fileTypes',
      sortable: true,
    },
    {
      name: 'BIC',
      selector: 'bic',
      sortable: true,
    },
    {
      name: 'Last Received',
      selector: 'lastReceived',
      sortable: true,
    },
  ]

  const data = [
    {
      id: 1,
      company: 'Bedrift Alpha AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '22/04/2021 08:00',
      isZDataCustomer: true,
    },
    {
      id: 2,
      company: 'ZData AS',
      orgNumber: '123123123',
      description: 'Setter beskrivelse',
      fileTypes: 'C051',
      bic: 'NONO20',
      lastReceived: '22/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 3,
      company: 'Ny Bedrift AS',
      orgNumber: '123123123',
      description: 'Boarding',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '22/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 4,
      company: 'Alka AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'APAP50',
      lastReceived: '21/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 5,
      company: 'Bedrift Alpha AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'CS50',
      bic: 'FHFH18',
      lastReceived: '20/04/2021 08:00',
      isZDataCustomer: true,
    },
    {
      id: 6,
      company: 'Bedrift Alpha AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '28/06/2021 08:00',
      isZDataCustomer: true,
    },
    {
      id: 7,
      company: 'Bedrift Alpha AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '30/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 8,
      company: 'Bedrift Alpha AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '30/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 9,
      company: 'Bedrift Alpha AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '30/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 10,
      company: 'Coop AS',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '30/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 11,
      company: 'Kiwi',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '30/04/2021 08:00',
      isZDataCustomer: false,
    },
    {
      id: 12,
      company: 'REMA 1000',
      orgNumber: '123123123',
      description: 'Venter på onboarding fra Uni.',
      fileTypes: 'C053, C54C',
      bic: 'SPRNO22',
      lastReceived: '30/04/2021 08:00',
      isZDataCustomer: false,
    },
  ]

  return currentPage ? (
    <section>
      <SupportCaseHeader
        currentPage={'Sparebank 1 SMN'} //* change to currentPage, and to database search for name with guid
        breadcrumbs={breadcrumbs}
        isDetailedPage
      />
      <div className="row">
        <div className="col-lg-12 card d-block border-primary pt-3" id="table">
          <Table
            columns={columns}
            data={data}
            onRowClicked={(row) => handleRowClick(row)}
          />
        </div>
      </div>
    </section>
  ) : (
    <Spinner />
  )
}

export default SupportCase
