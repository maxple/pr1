import React, { Component } from 'react'

const startDate = new Date()

const getFakeMembers = (count = 5) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', `https://api.randomuser.me/?nat=US&results=${count}`)
  xhr.onload = () => (xhr.status === 200)
    ? resolve(JSON.parse(xhr.response).results)
    : reject(Error(xhr.statusText))
  xhr.onerror = err => reject(err)
  xhr.send()
})

const Member = ({ email, picture, name, location }) =>
  <div>
    <img src={picture.thumbnail}
         alt="" />
    <h1>{name.first} {name.last}</h1>
    <p><a href={'mailto:' + email}>{email}</a></p>
    <p>{location.city}, {location.state}</p>
  </div>

class MemberList extends Component {
  constructor () {
    console.log('constructor-' + (new Date() - startDate))
    super()
    this.state = {
      members: [],
      loading: false,
      error: null,
    }
  }

  componentWillMount () {
    console.log('componentWillMount-' + (new Date() - startDate))
    this.setState({ loading: true })
    getFakeMembers(this.props.count).then(
      members => {
        this.setState({ members, loading: false })
      },
      error => {
        this.setState({ error, loading: false })
      },
    )
  }

  componentDidMount () {
    console.log('componentDidMount-' + (new Date() - startDate))
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps-' + (new Date() - startDate))
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate-' + (new Date() - startDate))
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate-' + (new Date() - startDate))
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate-' + (new Date() - startDate))
  }

  componentWillUnmount () {
    console.log('componentWillUnmount-' + (new Date() - startDate))
  }

  render () {
    console.log('render-' + (new Date() - startDate))
    const { members, loading, error } = this.state
    return (
      <div>
        {
          loading
            ? <span>Loading Members</span>
            : members.length
            ? members.map((user, i) => <Member key={i} {...user} />)
            : <span>0 members loaded</span>

        }
        {error
          ? <p>Error Loading Members: {error.message}</p>
          : ''}
      </div>
    )
  }
}

export default MemberList
