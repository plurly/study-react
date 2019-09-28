class SliderButtons extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            sliderValue: 0
        };

        this.handleSlide = this.handleSlide.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSlide(event, ui) {

        this.setState({
            sliderValue: ui.value
        });
    }

    handleChange(value) {

        return () => {

            // 클릭 시, 'slide' 이벤트가 아닌 'value' 변경으로 값만 변경하고 상태를 자체적으로 갱신
            $('#slider').slider('value', this.state.sliderValue + value);

            this.setState({
                sliderValue: this.state.sliderValue + value
            });
        };
    }

    // jQuery 슬라이더 이벤트 리스너에 의해 값이 변경되는 시점을 감지할 수 있도록 이벤트를 등록
    componentDidMount() {
        $('#slider').on('slide', this.handleSlide);
    }

    // 메모리 누수를 줄이기 위해 이벤트 리스너를 제거
    componentWillUnmount() {
        $('#slider').off('slide', this.handleSlide);
    }

    render() {
        return (
            <div>
              <button
                  disabled={(this.state.sliderValue < 1) ? true : false}
                  onClick={this.handleChange(-1)}>
                  1 Less ({this.state.sliderValue - 1})
              </button>
              <button
                  disabled={(this.state.sliderValue > 99) ? true : false}
                  onClick={this.handleChange(1)}>
                  1 More ({this.state.sliderValue + 1})
              </button>
            </div>
        );
    }
}

class SliderValue extends React.Component {

    constructor(props) {

        super(props)

        this.handleSlide = this.handleSlide.bind(this);
        this.state = {
            sliderValue: 0
        };
    }

    handleSlide(event) {

        this.setState({
            sliderValue: event.detail.ui.value
        });
    }

    // jQuery 슬라이더 이벤트 리스너에 의해 값이 변경되는 시점을 감지할 수 있도록 이벤트를 등록
    componentDidMount() {
        window.addEventListener('slide', this.handleSlide);
    }

    // 메모리 누수를 줄이기 위해 이벤트 리스너를 제거
    componentWillUnmount() {
        window.removeEventListener('slide', this.handleSlide);
    }

    render() {
        return <div>Value: {this.state.sliderValue}</div>
    }
}

class Slider extends React.Component {

    render() {
        return (
            <div>
                <SliderValue />
                <SliderButtons />
            </div>
        );
    }
}

ReactDOM.render(<Slider />, document.getElementById('content'));
