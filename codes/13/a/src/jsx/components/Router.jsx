import { hot } from 'react-hot-loader/root';
import React from 'react';

class Router extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            hash: window.location.hash
        };

        this.updateHash = this.updateHash.bind(this);
    }

    updateHash(event) {

        this.setState({
            hash: window.location.hash
        });
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.updateHash, false);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.updateHash, false);
    }

    render() {

        return <div> { this.props.mapping[this.state.hash] ? this.props.mapping[this.state.hash] : this.props.mapping["*"] } </div>;
    }
}

export default hot(Router);
