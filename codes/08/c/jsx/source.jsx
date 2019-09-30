const LoadWebSite = (Component, displayName) => {

    class _LoadWebSite extends React.Component {

        constructor(props) {

            super(props);

            this.state = {
                label: "Run",
            };

            // 해당 기능을 확장하는 대상에게 속성으로 전달하기 위해 this.handleClick이 아닌 this.state.handleClick으로 할당 (props는 수정 대상이 아니므로)
            // 여기서의 this는 LoadWebSite이며, 이를 확장하는 대상이 아님 : 확장 컴포넌트에서 handleClick을 호출할 때 원래 기능이 있는 베이스 컴포넌트로 접근이 가능하도록 함
            this.state.handleClick = this.handleClick.bind(this);
        }

        getUrl() {
            return "http://reactquickly.co/";
        }

        handleClick(event) {
            // 해당 로직은 확장하는 컴포넌트에 id가 frame인 대상이 있음을 가정하고 작업하는 것이므로 활용 시 체크
            let iframe = document.getElementById('frame').src = this.getUrl();
        }

        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this));
        }

        // 전달받는 컴포넌트를 렌더링
        // - 렌더링 시점에 현재 컴포넌트가 갖는 모든 상태와 속성을 풀어 확장 대상의 속성으로 주입
        render() {
            return (
                <Component {...this.state} {...this.props} />
            );
        }
    }

    _LoadWebSite.displayName = displayName;
    return _LoadWebSite;
}

class Button extends React.Component {

    render() {
        return (
            // 주입된 속성을 기반으로 개별 기능을 구현하거나 렌더링에 활용
            <button onClick={this.props.handleClick}>{this.props.label}</button>
        );
    }
}

class Logo extends React.Component {

    render() {
        return (
            // 주입된 속성을 기반으로 개별 기능을 구현하거나 렌더링에 활용
            <img onClick={this.props.handleClick} href="#" width="40" src="/favicon.ico"/>
        );
    }
}

class Link extends React.Component {

    render() {
        return (
            // 주입된 속성을 기반으로 개별 기능을 구현하거나 렌더링에 활용
            <a onClick={this.props.handleClick} href="#">{this.props.label}</a>
        );
    }
}

const EnhancedButton = LoadWebSite(Button, 'EnhancedButton');
const EnhancedLogo = LoadWebSite(Logo, 'EnhancedLogo');
const EnhancedLink = LoadWebSite(Link, 'EnhancedLink');

class Contents extends React.Component {

    render() {
        return (
            <div>

                <EnhancedButton label={"hello, button !"}/>
                <br/>
                <EnhancedLogo />
                <br/>
                <EnhancedLink label={"hello, link!"} />
                <br/>
                <iframe id="frame" src="" width="600" height="500" />
            </div>
        );
    }
}

ReactDOM.render(<Contents />, document.getElementById('content'));
