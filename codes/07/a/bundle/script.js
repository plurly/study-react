class Content extends React.Component {

    constructor(props) {

        super(props);

        this.handleRadio = this.handleRadio.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleMultipleSelectChange = this.handleMultipleSelectChange.bind(this);

        this.state = {
            radioGroup: {
                angular: false,
                polymer: false,
                react: true
            },
            checkboxGroup: {
                express: false,
                mongo: false,
                node: false,
                react: true
            },
            description: '',
            selectedItem: 'ruby',
            selectedItems: ['ruby']
        };
    }

    handleRadio(event) {

        let state = {
            angular: false,
            polymer: false,
            react: false
        };

        state[event.target.value] = event.target.checked;

        this.setState({
            radioGroup: state
        });
    }

    handleCheckbox(event) {

        let state = Object.assign(this.state.checkboxGroup);
        state[event.target.value] = event.target.checked;

        this.setState({
            checkboxGroup: state
        });
    }

    handleTextArea(event) {

        this.setState({
            description: event.target.value
        });
    }

    handleSelectChange(event) {

        this.setState({
            selectedItem: event.target.value
        });
    }

    handleMultipleSelectChange(event) {

        const state = [...this.state.selected];
        const value = event.target.value;
        const index = state.indexOf(value);

        if (index > -1) {
            state.splice(index, 1);
        } else {
            state.push(value);
        }

        this.setState({
            selectedItems: state
        });
    }

    handleMultipleSelectChange(event) {

        const state = [...this.state.selectedItems];
        const value = event.target.value;
        const index = state.indexOf(value);

        if (index > -1) {
            state.splice(index, 1);
        } else {
            state.push(value);
        }

        this.setState({
            selectedItems: state
        });
    }

    render() {

        return React.createElement(
            'form',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'radio', name: 'radioGroup', onChange: this.handleRadio, id: 'radio_angular', value: 'angular', checked: this.state.radioGroup['angular'] }),
                    React.createElement(
                        'label',
                        { htmlFor: 'radio_angular' },
                        'angular'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'radio', name: 'radioGroup', onChange: this.handleRadio, id: 'radio_polymer', value: 'polymer', checked: this.state.radioGroup['polymer'] }),
                    React.createElement(
                        'label',
                        { htmlFor: 'radio_polymer' },
                        'polymer'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'radio', name: 'radioGroup', onChange: this.handleRadio, id: 'radio_react', value: 'react', checked: this.state.radioGroup['react'] }),
                    React.createElement(
                        'label',
                        { htmlFor: 'radio_react' },
                        'react'
                    )
                )
            ),
            React.createElement('br', null),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', onChange: this.handleCheckbox, id: 'checkbox_express', value: 'express', checked: this.state.checkboxGroup['express'] }),
                    React.createElement(
                        'label',
                        { htmlFor: 'checkbox_express' },
                        'express'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', onChange: this.handleCheckbox, id: 'checkbox_mongo', value: 'mongo', checked: this.state.checkboxGroup['mongo'] }),
                    React.createElement(
                        'label',
                        { htmlFor: 'checkbox_mongo' },
                        'mongo'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', onChange: this.handleCheckbox, id: 'checkbox_node', value: 'node', checked: this.state.checkboxGroup['node'] }),
                    React.createElement(
                        'label',
                        { htmlFor: 'checkbox_node' },
                        'node'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', onChange: this.handleCheckbox, id: 'checkbox_react', value: 'react', checked: this.state.checkboxGroup['react'] }),
                    React.createElement(
                        'label',
                        { htmlFor: 'checkbox_react' },
                        'react'
                    )
                )
            ),
            React.createElement('br', null),
            React.createElement('textarea', { name: 'description', onChange: this.handleTextArea, value: this.state.description }),
            React.createElement('br', null),
            React.createElement(
                'select',
                { value: this.state.selectedItem, onChange: this.handleSelectChange },
                React.createElement(
                    'option',
                    { value: 'node' },
                    'node'
                ),
                React.createElement(
                    'option',
                    { value: 'python' },
                    'python'
                ),
                React.createElement(
                    'option',
                    { value: 'ruby' },
                    'ruby'
                )
            ),
            React.createElement('br', null),
            React.createElement(
                'select',
                { multiple: true, value: this.state.selectedItems, onChange: this.handleMultipleSelectChange },
                React.createElement(
                    'option',
                    { value: 'node' },
                    'node'
                ),
                React.createElement(
                    'option',
                    { value: 'python' },
                    'python'
                ),
                React.createElement(
                    'option',
                    { value: 'ruby' },
                    'ruby'
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
