class Content extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <Content>
        <div>
            <h1>React</h1>
            <p>Rocks</p>
        </div>
    </Content>,
    document.getElementById('content-1')
);

ReactDOM.render(
    <Content>
        <div>
            <img src="/favicon.ico" width="100" />
        </div>
    </Content>,
    document.getElementById('content-2')
);
