class TimerWrapper extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            timeLeft: null,
            timer: null
        };

        this.startTimer = this.startTimer.bind(this);
    }

    startTimer(timeLeft) {

        // 새로운 타이머 생성 요청이 오면 기존 핸들러를 제거
        clearInterval(this.state.timer);

        // 새로운 핸들러 생성 : 1초마다 수행
        let timer = setInterval(() => {

            const timeLeft = this.state.timeLeft - 1;

            // 시간이 종료되면 핸들러 제거
            if (timeLeft === 0) {
                clearInterval(timer);
            }

            // 남은 시간 정보 갱신
            this.setState({
                timeLeft
            });
        }, 1000);

        // 새로운 핸들러 생성 요청을 반영하기 위해 상태 변경
        this.setState({
            timeLeft,
            timer
        });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Timer"
            ),
            React.createElement(Timer, { timeLeft: this.state.timeLeft }),
            React.createElement(
                "div",
                null,
                React.createElement(Button, { time: "5", startTimer: this.startTimer }),
                React.createElement(Button, { time: "10", startTimer: this.startTimer }),
                React.createElement(Button, { time: "20", startTimer: this.startTimer })
            )
        );
    }
}

class Timer extends React.Component {

    render() {

        if (this.props.timeLeft === null || this.props.timeLeft === 0) {
            return React.createElement("div", null);
        } else {
            return React.createElement(
                "h1",
                null,
                "Time left : ",
                this.props.timeLeft
            );
        }
    }
}

class Button extends React.Component {

    constructor(props) {

        super(props);

        this.startTimer = this.startTimer.bind(this);
    }

    startTimer(event) {
        // 속성으로 전달받은 시간 정보와 함께 부모 컴포넌트로부터 전달받은 타이머 생성 요청 메서드 호출
        return this.props.startTimer(this.props.time);
    }

    render() {
        return React.createElement(
            "button",
            { type: "buytton", onClick: this.startTimer },
            this.props.time,
            " seconds"
        );
    }
}

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById('content'));
