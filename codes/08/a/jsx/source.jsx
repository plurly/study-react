class Content extends React.Component {

    constructor(props) {

        super(props);

        console.log('==========start===========');
        console.log(props.size);
        console.log(props.prompt);
        console.log(props.mail);
        console.log('===========end============')
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

Content.defaultProps = {

    size: 5
};

Content.propTypes = {

    size: PropTypes.number,
    prompt: PropTypes.string.isRequired,
    mail(props, propName, componentName) {

        let expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!expression.test(props[propName])) {
            return new Error("Mail pattern is invalid.");
        }
    }
}

ReactDOM.render(<Content size={10} prompt={"Hello, react!"} mail={"dev.plurly@gmail.com"} />, document.getElementById('content-1'));
ReactDOM.render(<Content           prompt={"Hello, react!"} mail={"dev.plurly@gmail.com"} />, document.getElementById('content-2'));
ReactDOM.render(<Content size={10} prompt={10}              mail={"dev.plurly@gmail.com"} />, document.getElementById('content-3'));
ReactDOM.render(<Content size={10}                          mail={"dev.plurly@gmail.com"} />, document.getElementById('content-4'));
ReactDOM.render(<Content size={10} prompt={"Hello, react!"} mail={"dev.plurly"} />,           document.getElementById('content-5'));
