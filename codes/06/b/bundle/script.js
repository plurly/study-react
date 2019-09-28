class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    handleClick() {

        this.setState({
            counter: ++this.state.counter
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: this.handleClick.bind(this) },
                'Don\'t click me ',
                this.state.counter,
                ' times!'
            )
        );
    }
}

ReactDOM.render(React.createElement(Counter, null), document.getElementById('counter-1'));

class Button extends React.Component {

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: this.props.handler },
                'Click me ',
                this.props.counter,
                ' times!'
            )
        );
    }
}

class CounterWithButton extends React.Component {

    constructor(props) {
        super(props);

        // 미리 이벤트 리스너에서 참조하는 this를 부모 컴포넌트로 지정
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            counter: 0
        };
    }

    handleClick() {

        this.setState({
            counter: ++this.state.counter
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Button, { counter: this.state.counter, handler: this.handleClick })
        );
    }
}

ReactDOM.render(React.createElement(CounterWithButton, null), document.getElementById('counter-2'));

const StatelessButton = props => {

    return React.createElement(
        'button',
        { onClick: props.handler },
        'Click me!'
    );
};

class CounterDisplay extends React.Component {

    render() {
        return React.createElement(
            'div',
            null,
            this.props.counter
        );
    }
}

class CounterWithStatelessButton extends React.Component {

    constructor(props) {
        super(props);

        // 미리 이벤트 리스너에서 참조하는 this를 부모 컴포넌트로 지정
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            counter: 0
        };
    }

    handleClick() {

        this.setState({
            counter: ++this.state.counter
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(StatelessButton, { handler: this.handleClick }),
            React.createElement(CounterDisplay, { counter: this.state.counter })
        );
    }
}

ReactDOM.render(React.createElement(CounterWithStatelessButton, null), document.getElementById('counter-3'));
