class Radio extends React.Component {

    constructor(props) {

        super(props);

        this.handleResize = this.handleResize.bind(this);

        let order = props.order;
        let i = 1;

        let w = this.getWeight();

        this.state = {

            outerStyle: this.getStyle(4, i),
            innerStyle: this.getStyle(1, i),
            selectedStyle: this.getStyle(2, i),
            taggerStyle: {
                top: order * 20,
                width: 25,
                height: 25,
                display: 'inline'
            },
            textStyle: this.getTextStyle(w)
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(event) {

        let w = this.getWeight();

        this.setState({
            taggerStyle: {
                top: this.props.order * w * 10,
                width: w * 10,
                height: w * 10,
                display: 'inline'
            },
            textStyle: this.getTextStyle(w)
        });
    }

    getStyle(i, m) {

        let value = i * m;

        return {
            top: value,
            bottom: value,
            left: value,
            right: value
        };
    }

    getTextStyle(w) {

        return {
            left: w * 13,
            fontSize: w * 7,
            display: 'inline'
        };
    }

    getWeight() {

        return 1 + Math.round(window.innerWidth / 300);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { style: this.state.taggerStyle },
                React.createElement('input', { type: 'radio', name: this.props.name, id: this.props.id }),
                React.createElement(
                    'label',
                    { htmlFor: this.props.id },
                    React.createElement(
                        'div',
                        { style: this.state.textStyle },
                        this.props.label
                    ),
                    React.createElement(
                        'div',
                        { style: this.state.outerStyle },
                        React.createElement(
                            'div',
                            { style: this.state.innerStyle },
                            React.createElement('div', { style: this.selectedStyle })
                        )
                    )
                )
            )
        );
    }
}

class RadioBox extends React.Component {

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Radio, { id: 'radio-1', name: this.props.name, order: 1, label: "React" }),
            React.createElement(Radio, { id: 'radio-2', name: this.props.name, order: 2, label: "Backbone" }),
            React.createElement(Radio, { id: 'radio-3', name: this.props.name, order: 3, label: "Angular" })
        );
    }
}

ReactDOM.render(React.createElement(RadioBox, { name: "radio-box" }), document.getElementById('content'));
