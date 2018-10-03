import React, {Component} from 'react'

const Expandable = ComposedComponent =>
    class Expandable extends Component {

        constructor(props) {
            super(props)
            this.state = {collapsed: props.hide === true}
            this.expandCollapse = this.expandCollapse.bind(this)
        }

        componentWillReceiveProps(nextProps) {
            this.setState({collapsed: nextProps.hide === true})
        }

        expandCollapse() {
            this.setState(prevState => ({
                collapsed: !prevState.collapsed,
            }))
        }

        render() {
            return <ComposedComponent expandCollapse={this.expandCollapse}
                                      {...this.state}
                                      {...this.props} />
        }
    }

export default Expandable
