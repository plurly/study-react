import { React } from 'react';
import { ReactDOM } from 'react-dom';

class HelloWorld extends React.Component {

	render() {
		return (<div><h1>Hello, world!</h1><input disabled={false}></input></div>);
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById('content'));
