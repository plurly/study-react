class Content extends React.Component {

    constructor(props) {

        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            textbook: ''
        };
    }

    handleChange(event) {

        this.setState({
            textbook: event.target.value
        });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement("input", { type: "text", onChange: this.handleChange, placeholder: "Eloquent TypeScript: Myth or Reality" }),
            React.createElement("br", null),
            React.createElement(
                "span",
                null,
                this.state.textbook
            )
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
