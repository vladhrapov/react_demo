import React from 'react';
import SomeComponent from './SomeComponent.jsx'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            'messages': [
                'hi you!!!!!!!!!!!!!',
                'what is going on?'
            ]
        };
    }

    render() {
        var messageNodes = this.state.messages.map((message) => {
                return (<div>
                    {message}
                </div>);
        });

        return (<div>
            {messageNodes}
            <SomeComponent />
        </div>);
    }
}

export default App;