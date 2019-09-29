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
        return (
            <div>
                <div>
                    Account :
                    <input type="text" onChange={this.handleChange} placeholder="11011110101" value={this.state.accountNumber}/>
                </div>
                <div>
                    {this.state.accountNumber.length > 0 ? 'You entered : ' + this.state.accountNumber : ''}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Content />, document.getElementById('content'));
