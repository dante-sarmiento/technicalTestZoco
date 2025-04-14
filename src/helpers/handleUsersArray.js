export const updateUserArray = (array, updatedItem) => {
  return array.map(item =>
    item.id === updatedItem.id ? updatedItem : item
  )
}

export const addUserArray = (array, newUser) => {
  return [...array, newUser]
}
