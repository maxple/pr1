import { compose } from 'redux'

const sortByDate = field =>
  (a, b) => new Date(b[field]) - new Date(a[field])

const sortByString = field =>
  (a, b) => (a[field].toLowerCase() < b[field].toLowerCase()) ? -1 : 1

const sortByNumber = field =>
  (a, b) => b[field] - a[field]

const sortBy = (type, field) =>
  (type === 'date')
    ? sortByDate(field)
    : (type === 'string')
    ? sortByString(field)
    : sortByNumber(field)

export const sortFunction = sort =>
  (sort === 'SORTED_BY_TITLE')
    ? sortBy('string', 'title')
    : (sort === 'SORTED_BY_RATING')
    ? sortBy('number', 'rating')
    : sortBy('date', 'timestamp')

export const getFirstArrayItem = array => array[0]

export const filterArrayById = (array, id) =>
  array.filter(item => item.id === id)

export const findById = compose(
  getFirstArrayItem,
  filterArrayById,
)