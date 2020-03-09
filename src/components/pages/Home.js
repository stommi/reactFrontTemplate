import React, {Component} from 'react';
import logo from "../../pictures/geometric.png";

class Home extends Component {
    render() {
        return (
            <div>
                <br/><img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Home;