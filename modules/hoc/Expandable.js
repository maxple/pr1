import React, {Component} from 'react'

const Expandable = ComposedComponent =>
    class Expandable extends Component {
        constructor(props) {
            super(props)
            this.state = {
                collapsed: (typeof props.collapsed === 'boolean')
                    ? props.collapsed
                    : true,
            }
        }

        expandCollapse = () => {
            this.setState({collapsed: !this.state.collapsed})
        }

        render() {
            return <ComposedComponent expandCollapse={this.expandCollapse} {...this.state} {...this.props} />
        }
    }

export default Expandable
