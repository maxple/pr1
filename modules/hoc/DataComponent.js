import React, {Component} from 'react'

const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends Component {

        constructor(props) {
            super(props)
            this.state = {
                data: [],
                loading: false,
            }
        }

        componentWillMount() {
            this.setState({loading: true})
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    loading: false,
                    data,
                }))
        }

        render() {
            return (
                <div>
                    {this.state.loading
                        ? <div>Loading...</div>
                        : <ComposedComponent {...this.state}{...this.props} />}
                </div>
            )
        }
    }

export default DataComponent
