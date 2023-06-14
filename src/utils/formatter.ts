export function formatterName(name: string) {
  const splitName = name.split(' ')
  const nameArray = splitName.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1),
  )
  const newName = nameArray.join(' ')
  return newName
}
