//* Returns breadcrumb items by pathname
export const getBreadcrumbsByPath = (path) => {
  const pages = path.split('/')

  return pages
    .filter((page) => page !== '')
    .map((page, index) => {
      const urlParts = pages.slice(1, index + 2)
      if (!isGuid(page)) page = page.replace(/-/g, ' ')
      //* If URl is support cases, change name to firm instead of showing 'File' / GUID
      else if (
        urlParts.some((part) => part === 'support-cases') &&
        urlParts.length > 2
      ) {
        page = 'Sparebank 1 SMN' //? temporary
      }

      return {
        name: page,
        href: `/${urlParts.join('/')}`,
      }
    })
}

export const isGuid = (string) => {
  return string.match(
    '^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$'
  )
}
