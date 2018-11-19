import React, { Component } from 'react'
import { v4 } from 'uuid'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import '../stylesheets/App.scss'

class ColorOrganizer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      colors: [
        {
          id: v4(),
          title: 'ocean blue',
          color: '#0077be',
          rating: 0,
        },
        {
          id: v4(),
          title: 'tomato',
          color: '#ff6347',
          rating: 0,
        },
        {
          id: v4(),
          title: 'lawn',
          color: '#87F717',
          rating: 0,
        },
        {
          id: v4(),
          title: 'party pink',
          color: '#da2b42',
          rating: 0,
        },
      ],
    }
  }

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      },
    ]
    this.setState({ colors })
  }

  rateColor = (id, rating) => {
    const colors = this.state.colors.map(color =>
      (color.id !== id)
        ? color
        : {
          ...color,
          rating,
        },
    )
    this.setState({ colors })
  }

  removeColor = (id) => {
    const colors = this.state.colors.filter(color => color.id !== id)
    this.setState({ colors })
  }

  render () {
    const { addColor, rateColor, removeColor } = this
    const { colors } = this.state
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors}
                   onRate={rateColor}
                   onRemove={removeColor} />
      </div>
    )
  }
}

export default ColorOrganizer
