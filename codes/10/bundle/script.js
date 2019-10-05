class Tooltip extends React.Component {

    constructor(props) {

        super(props);

        // 초기 상태는 투명도를 0으로 주고 위치 정보를 제공하지 않음
        this.state = {
            opacity: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {

        // ES6의 해체 할당 기능으로, DOM Node 객체의 offsetTop, offsetLeft 속성을 top, left라는 변수에 할당
        const { offsetTop: top, offsetLeft: left } = ReactDOM.findDOMNode(this);

        this.setState({
            opacity: !this.state.opacity,
            top,
            left
        });
    }

    render() {

        // 툴팁 노출 / 숨김 처리 및 위치 설정을 위한 스타일 정보
        const style = {
            zIndex: this.state.opacity ? 1000 : -1000,
            opacity: +this.state.opacity, // true / false를 1 / 0으로 변경하기 위해 boolean 값 앞에 +를 추가
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        };

        return React.createElement(
            'div',
            { style: { display: 'inline' } },
            React.createElement(
                'span',
                { style: { color: 'blue' }, onMouseEnter: this.toggle, onMouseOut: this.toggle },
                this.props.children
            ),
            React.createElement(
                'div',
                { style: style, role: 'tooltip' },
                React.createElement(
                    'div',
                    null,
                    this.props.text
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(
    Tooltip,
    { text: "The book you're reading now" },
    'React Quickly'
), document.getElementById('content'));
