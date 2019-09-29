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
        return (
            <div>
                <input type="text" onChange={this.handleChange} placeholder="Eloquent TypeScript: Myth or Reality"/>
                <br/>
                <span>{this.state.textbook}</span>
            </div>
        );
    }
}

ReactDOM.render(<Content />, document.getElementById('content'));
