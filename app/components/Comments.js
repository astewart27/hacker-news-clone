import React, { Component } from 'react';

const JSON_QUERY = ".json?print=pretty";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentsList: []
        }
    }

    async componentDidMount() {
        console.log(this.props.comments);
        const commentsListArr = [];
        if(this.props.comments != null) {
            this.props.comments.map(async (commentID) => {
                const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentID}${JSON_QUERY}`);
                const data = await response.json();
                commentsListArr.push(data);
                return commentsListArr;
            });
            this.setState({commentsList: commentsListArr});
        }
    }

    render() {
        return (
            <div>
                <h5>Comments Component</h5>
            </div>
        )
    }
}

export default Comments;