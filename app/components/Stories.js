import React, { Component } from 'react'

class Stories extends Component {

    componentDidMount() {
        console.log("Stories component mounted");
    }

    render() {
        return (
            <div className="stories-component">
                <h1>Stories Component</h1>
            </div>
        )
    }
}

export default Stories;
