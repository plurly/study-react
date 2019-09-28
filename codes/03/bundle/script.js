import { React } from 'react';
import { ReactDOM } from 'react-dom';

class HelloWorld extends React.Component {

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Hello, world!'
			),
			React.createElement('input', { disabled: false })
		);
	}
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
