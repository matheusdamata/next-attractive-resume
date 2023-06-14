export function formatterName(name: string) {
  const splitName = name.split(' ')
  const nameArray = splitName.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1),
  )
  const newName = nameArray.join(' ')
  return newName
}

export function formatterLink(url: string) {
  const splitUrl = url.split('https://')
  let newUrl = splitUrl.length > 1 ? splitUrl[1] : splitUrl[0]

  if (newUrl.includes('www.')) {
    newUrl = newUrl.split('www.')[1]
  }

  if (newUrl.charAt(newUrl.length - 1) === '/') {
    return newUrl.slice(0, -1)
  }

  return newUrl
}
