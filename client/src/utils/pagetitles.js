//* Returns breadcrumb items by pathname
export const getBreadcrumbsByPath = (path) => {
  const pages = path.split('/')

  return pages
    .filter((page) => page !== '')
    .map((page, index) => {
      if (!isGuid(page)) page = page.replace('-', ' ')

      return {
        name: page,
        href: `/${pages.slice(1, index + 2).join('/')}`,
      }
    })
}

export const isGuid = (string) => {
  return string.match(
    '^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$'
  )
}
