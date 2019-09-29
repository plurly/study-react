class Content extends React.Component {

    constructor(props) {

        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            accountNumber: ''
        };
    }

    handleChange(event) {

        this.setState({
            accountNumber: event.target.value.replace(/[^0-9]/ig, '')
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                'Account :',
                React.createElement('input', { type: 'text', onChange: this.handleChange, placeholder: '11011110101', value: this.state.accountNumber })
            ),
            React.createElement(
                'div',
                null,
                this.state.accountNumber.length > 0 ? 'You entered : ' + this.state.accountNumber : ''
            )
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
