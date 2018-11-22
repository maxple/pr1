import { connect } from 'react-redux'
import AddColorForm from './ui/AddColorForm'
import ColorList from './ui/ColorList'
import { addColor, rateColor, removeColor } from '../actions'
import { findById, sortColors } from '../lib/array-helpers'
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

export const ColorsContainer = connect(
  (state, { match }) =>
    ({
      colors: sortColors(state.colors, match.params.sort),
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
