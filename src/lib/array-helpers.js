const sortBy = field => {
  switch (field) {
    case 'title':
      return (a, b) => (a[field] < b[field]) ? -1 : 1
    case 'rating':
      return (a, b) => b[field] - a[field]
    default:
      return (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  }
}

export const sortColors = (colors, field) => [...colors].sort(sortBy(field))

export const findById = (array, id) => array.filter(item => item.id === id)[0]
