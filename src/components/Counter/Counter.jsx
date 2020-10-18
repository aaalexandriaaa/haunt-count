import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };
    render() {
        return (
            <div className="div">
                <h2>Total Scares: {this.state.count}</h2>
                <hr></hr>
                <button onClick={this.handleClick}>Add a Scare</button>
            </div >
        );
    }
}

export default Counter;
