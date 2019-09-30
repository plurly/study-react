class Content extends React.Component {

    render() {
        return React.createElement(
            "div",
            null,
            this.props.children
        );
    }
}

ReactDOM.render(React.createElement(
    Content,
    null,
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "React"
        ),
        React.createElement(
            "p",
            null,
            "Rocks"
        )
    )
), document.getElementById('content-1'));

ReactDOM.render(React.createElement(
    Content,
    null,
    React.createElement(
        "div",
        null,
        React.createElement("img", { src: "/favicon.ico", width: "100" })
    )
), document.getElementById('content-2'));
