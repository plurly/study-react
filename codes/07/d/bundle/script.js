class Content extends React.Component {

    constructor(props) {

        super(props);

        this.submit = this.submit.bind(this);

        this.state = {
            prompt: 'Please enter your email to win $1,000,000.'
        };
    }

    submit(event) {

        let { mail, comment } = this.refs;

        console.log(ReactDOM.findDOMNode(mail).value);
        console.log(ReactDOM.findDOMNode(comment).value);
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                this.prompt
            ),
            React.createElement(
                "div",
                null,
                "email: ",
                React.createElement("input", { ref: "mail", type: "text", placeholder: "account@domain.com" })
            ),
            React.createElement(
                "div",
                null,
                "comment: ",
                React.createElement("textarea", { ref: "comment", placeholder: "I like your website!" })
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { value: "submit", onClick: this.submit },
                    "submit"
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));

class DefaultValue extends React.Component {

    constructor(props) {

        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: '',
            defaultValue: 'this is a value for default.'
        };
    }

    handleChange(event) {

        this.setState({
            value: event.target.value
        });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement("input", { value: "this is ineditable.", onChange: this.handleChange }),
            React.createElement("br", null),
            React.createElement("input", { onChange: this.handleChange, defaultValue: this.state.defaultValue })
        );
    }
}

ReactDOM.render(React.createElement(DefaultValue, null), document.getElementById('default-area'));
