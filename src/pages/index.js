import React from 'react';
import HomePage from 'components/home/HomePage';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="page-content">
                <HomePage />
            </div>
        );
    }
}
export default App;
