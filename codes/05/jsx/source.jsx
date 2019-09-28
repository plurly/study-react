class Note extends React.Component {

    confirmLeave(event) {

        let message = '정말 닫으시겠습니까 ?';
        event.returnValue = message; // Gecko, Trident, Chrome >= 34
        return message;              // Gecko, WebKit, Chrome < 34
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

        return (
            <div>
                <p>부모 컴포넌트는 {this.props.secondsToLeft}초 뒤에 제거됩니다.</p>
                <input type="text"/>
            </div>
        );
    }
}

let secondsToLeft = 5;

let interval = setInterval(() => {

    if (secondsToLeft === 0) {
        ReactDOM.render(<div>Note was removed after {secondsToLeft} seconds.</div>, document.getElementById('content'));
        clearInterval(interval);
    } else {
        ReactDOM.render(<div><Note secondsToLeft={secondsToLeft}/></div>, document.getElementById('content'));
    }

    secondsToLeft--;

}, 1000);
