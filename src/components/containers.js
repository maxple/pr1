import { connect } from 'react-redux'
import AddColorForm from './ui/AddColorForm'
import SortMenu from './ui/SortMenu'
import ColorList from './ui/ColorList'
import { addColor, rateColor, removeColor, sortColors } from '../actions'
import { findById, sortFunction } from '../lib/array-helpers'
import ColorDetails from './ui/ColorDetails'

export const NewColorContainer = connect(
  null,
  dispatch =>
    ({
      onNewColor (title, color) {
        dispatch(addColor(title, color))
      },
    }),
)(AddColorForm)

export const MenuContainer = connect(
  state =>
    ({
      sort: state.sort,
    }),
  dispatch =>
    ({
      onSelect (sortBy) {
        dispatch(sortColors(sortBy))
      },
    }),
)(SortMenu)

export const ColorsContainer = connect(
  state =>
    ({
      colors: [...state.colors].sort(sortFunction(state.sort)),
    }),
  dispatch =>
    ({
      onRemove (id) {
        dispatch(removeColor(id))
      },
      onRate (id, rating) {
        dispatch(rateColor(id, rating))
      },
    }),
)(ColorList)

export const ColorContainer = connect(
  (state, { match }) => findById(state.colors, match.params.id),
)(ColorDetails)
