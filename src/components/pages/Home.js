import React, {Component} from 'react';
import logo from "../../pictures/logo.svg";

class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Home;