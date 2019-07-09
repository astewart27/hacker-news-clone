import React, { Component } from 'react'

class Stories extends Component {

    componentDidMount() {
        console.log("Stories component mounted");
    }

    render() {
        return (
            <div className="stories-component">
                <h1>Stories Component</h1>
                {this.props.stories.map(story => console.log(story))}
            </div>
        )
    }
}

export default Stories;
