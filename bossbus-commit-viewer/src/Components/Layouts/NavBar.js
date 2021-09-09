import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">
                <a href="/" className="logo">CommitViewer</a>
                <div className="header-right">
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>


        );
    }
}

export default NavBar;