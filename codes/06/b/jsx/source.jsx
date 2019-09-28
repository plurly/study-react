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
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Don't click me {this.state.counter} times!</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('counter-1'));

class Button extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handler}>Click me {this.props.counter} times!</button>
            </div>
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
        return (
            <div>
                <Button counter={this.state.counter} handler={this.handleClick}/>
            </div>
        );
    }
}

ReactDOM.render(<CounterWithButton />, document.getElementById('counter-2'));

const StatelessButton = (props) => {

    return <button onClick={props.handler}>Click me!</button>;
};

class CounterDisplay extends React.Component {

    render() {
        return (
            <div>{this.props.counter}</div>
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
        return (
            <div>
                <StatelessButton handler={this.handleClick} />
                <CounterDisplay counter={this.state.counter} />
            </div>
        );
    }
}

ReactDOM.render(<CounterWithStatelessButton />, document.getElementById('counter-3'));
