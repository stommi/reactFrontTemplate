import React, {Component} from 'react';
import '../../styles/TopPanel.css'

class TopPanel extends Component {
    render() {
        return (
            <div className="topPanel">
                <a href="/contact" className="link1">Contact</a>
            </div>
        );
    }
}

export default TopPanel;