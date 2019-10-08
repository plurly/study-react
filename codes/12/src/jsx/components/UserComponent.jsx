import { hot } from 'react-hot-loader/root';
import React from 'react';

class UserComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            text: ''
        };

        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(event) {

        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div>Hello, Webpack!</div>
                <input value={this.state.text} onChange={this.onTextChanged} />
            </div>
        );
    }
}

export default hot(UserComponent);
