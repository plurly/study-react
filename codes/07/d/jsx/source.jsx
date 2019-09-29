class Content extends React.Component {

    constructor(props) {

        super(props);

        this.submit = this.submit.bind(this);

        this.state = {
            prompt: 'Please enter your email to win $1,000,000.'
        };
    }

    submit(event) {

        let {mail, comment} = this.refs;

        console.log(ReactDOM.findDOMNode(mail).value);
        console.log(ReactDOM.findDOMNode(comment).value);
    }

    render() {
        return (
            <div>
                <p>{this.prompt}</p>
                <div>
                    email: <input ref="mail" type="text" placeholder="account@domain.com"/>
                </div>
                <div>
                    comment: <textarea ref="comment" placeholder="I like your website!" />
                </div>
                <div>
                    <button value="submit" onClick={this.submit}>submit</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Content />, document.getElementById('content'));

class DefaultValue extends React.Component {

    constructor(props) {

        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: '',
            defaultValue: 'this is a value for default.',
        };
    }

    handleChange(event) {

        this.setState({
            value: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <input value="this is ineditable." />
                <br/>
                <input onChange={this.handleChange} defaultValue={this.state.defaultValue} />
            </div>
        );
    }
}

ReactDOM.render(<DefaultValue />, document.getElementById('default-area'));
