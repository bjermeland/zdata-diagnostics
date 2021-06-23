const services = [
  { name: 'BankService', status: 'success', lastUpdate: 'a minute ago' },
  {
    name: 'BankTransferService',
    status: 'warning',
    lastUpdate: 'a few seconds ago',
  },
  {
    name: 'Heartbeats Service',
    status: 'success',
    lastUpdate: '2 minutes ago',
  },
  { name: 'Mail API', status: 'danger', lastUpdate: 'a day ago' },
  { name: 'MailService', status: 'danger', lastUpdate: '21 hours ago' },
  { name: 'Partner', status: 'danger', lastUpdate: 'a few seconds ago' },
  { name: 'Pay Admin', status: 'success', lastUpdate: '2 months ago' },
  { name: 'Template API', status: 'success', lastUpdate: '8 minute ago' },
]

const Services = () => {
  return (
    <>
      <h2 className="pt-2 fs-4">Services</h2>
      <div className="my-5">
        {services.map((item, index) => {
          return (
            <div
              key={index}
              className={`alert alert-${item.status} py-4 px-5 mb-2`}
            >
              {item.name}
              <small className="float-end fw-normal">{item.lastUpdate}</small>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Services
