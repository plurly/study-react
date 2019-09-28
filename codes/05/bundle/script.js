class Note extends React.Component {

    confirmLeave(event) {

        let message = '정말 닫으시겠습니까 ?';
        event.returnValue = message; // Gecko, Trident, Chrome >= 34
        return message; // Gecko, WebKit, Chrome < 34
    }

    componentDidMount() {

        console.log('addEventListener called.');
        window.addEventListener('beforeunload', this.confirmLeave);
    }

    componentWillUnmount() {

        console.log('removeEventListener called.');
        window.removeEventListener('beforeunload', this.confirmLeave);
    }

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                '\uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB294 ',
                this.props.secondsToLeft,
                '\uCD08 \uB4A4\uC5D0 \uC81C\uAC70\uB429\uB2C8\uB2E4.'
            ),
            React.createElement('input', { type: 'text' })
        );
    }
}

let secondsToLeft = 5;

let interval = setInterval(() => {

    if (secondsToLeft === 0) {
        ReactDOM.render(React.createElement(
            'div',
            null,
            'Note was removed after ',
            secondsToLeft,
            ' seconds.'
        ), document.getElementById('content'));
        clearInterval(interval);
    } else {
        ReactDOM.render(React.createElement(
            'div',
            null,
            React.createElement(Note, { secondsToLeft: secondsToLeft })
        ), document.getElementById('content'));
    }

    secondsToLeft--;
}, 1000);
