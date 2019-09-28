let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black'
};

let commonHandStyler = () => {

    return {

        position: 'relative',
        top: 100,
        left: 100,
        borderStyle: 'solid',
        borderColor: 'grey',
        width: '40%',
        backgroundColor: 'grey',
        transformOrigin: '0% 0%'
    };
};

let secondHandStyler = (date) => {

    let style = commonHandStyler();
    let custom = {
        borderColor: 'red',
        backgroundColor: 'red',
        height: 1,
        transform: 'rotate(' + ((date.getSeconds() / 60) * 360 - 90).toString() + 'deg)'
    };

    return Object.assign(style, custom);
};

let minuteHandStyler = (date) => {

    let style = commonHandStyler();
    let custom = {
        height: 3,
        transform: 'rotate(' + ((date.getMinutes() / 60) * 360 - 90).toString() + 'deg)'
    };

    return Object.assign(style, custom);
};

let hourHandStyler = (date) => {

    let style = commonHandStyler();
    let custom = {
        top: 92,
        left: 106,
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((date.getHours() / 12) * 360 - 90).toString() + 'deg)'
    };

    return Object.assign(style, custom);
};

const DigitalDisplay = (props) => {

    return <div>{props.time}</div>
};

const AnalogDisplay = (props) => {

    let date = new Date(props.time);

    let secondHandStyle = secondHandStyler(date);
    let minuteHandStyle = minuteHandStyler(date);
    let hourHandStyle = hourHandStyler(date);

    return (
        <div style={dialStyle}>
            <div style={secondHandStyle}/>
            <div style={minuteHandStyle}/>
            <div style={hourHandStyle}/>
        </div>
    );
};

class Clock extends React.Component {

    constructor(props) {

        super(props);

        this.launchClock();

        this.state = {
            currentTime: (new Date()).toLocaleString('en')
        };
    }

    launchClock() {

        setInterval(() => {

            this.setState({
                currentTime: (new Date()).toLocaleString('en')
            });

        }, 1000);
    }

    render() {
        return (
            <div>
                <AnalogDisplay time={this.state.currentTime}/>
                <DigitalDisplay time={this.state.currentTime}/>
            </div>
        );
    }
}

ReactDOM.render(<Clock/>, document.getElementById('content'));
