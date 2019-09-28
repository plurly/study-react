class Mouse extends React.Component {

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                {
                    style: { border: '1px solid red' },
                    onMouseOverCapture: event => {
                        console.log('mouse over on capture event.');
                        console.dir(event, this);
                    },
                    onMouseOver: event => {
                        console.log('mouse over on bubbling event.');
                        console.dir(event, this);
                    } },
                'Open DevTools and move your mouse cursor over here'
            )
        );
    }
}

ReactDOM.render(React.createElement(Mouse, null), document.getElementById('content'));
