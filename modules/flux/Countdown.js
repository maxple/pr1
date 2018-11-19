import React, { Component } from 'react'
import PropTypes from 'prop-types'
import actions from './CountdownActions'
import store from './CountdownStore'
import './Countdown.scss'

export default class Countdown extends Component {

  constructor () {
    super()
    store.on('CHANGE', () => this.setState({ count: store.count }))
  }

  render () {
    const { count } = store
    const { tick, reset } = actions

    if (count) {
      setTimeout(() => tick(count), 100)
    }
    return count
      ? <h1>{count}</h1>
      : <div onClick={() => reset(10)}>
        <span>CELEBRATE!!!</span>
        <span>(click to start over)</span>
      </div>
  }
}

Countdown.propTypes = {
  count: PropTypes.number,
  tick: PropTypes.func,
  reset: PropTypes.func,
}
