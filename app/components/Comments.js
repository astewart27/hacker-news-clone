import React, { Component } from 'react';

import '../styles/Comments.css';

const JSON_QUERY = ".json?print=pretty";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentsList: []
        }
    }

    async componentDidMount() {
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

    // converts Unix timestamp into Date object
    getTime = (timestamp) => {
        const currentDate = new Date();
        const date = new Date(timestamp * 1000);
        const itemDateHours = date.getHours();
        const currentDateHours = currentDate.getHours();
        const itemDateMinutes = date.getMinutes();
        const currentDateMinutes = currentDate.getMinutes();
        const diffHours = (currentDateHours - itemDateHours);
        const diffMinutes = (currentDateMinutes - itemDateMinutes);
        if(diffHours > 1) {
            return diffHours + " hours ago";
        } else if (diffHours === 1) {
            return diffHours + " hour ago";
        } else {
            if (diffMinutes > 1) {
                return diffMinutes + " minutes ago";
            } else {
                return diffMinutes + " minute ago";
            }
        }
    }

    // decodes HTML entities from API data
    decodeEntities = (encodedString) => {
        var textArea = document.createElement('textarea');
        textArea.innerHTML = encodedString;
        return textArea.value;
    }

    render() {
        return (
            <div className="comments-container">
                {this.state.commentsList.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="comments-cols">
                                <div className="comments-info">
                                    <span className="comments-user"><a className="comments-user-link" href={`https://news.ycombinator.com/user?id=${item.by}`} target="_blank" rel="noopener noreferrer">{item.by}</a></span>
                                    <span className="comments-timestamp"><a className="comments-timestamp-link" href={`https://news.ycombinator.com/item?id=${item.id}`} target="_blank" rel="noopener noreferrer">{this.getTime(`${item.time}`)}</a></span>
                                </div>
                                <div className="comments-text">
                                    <p>{this.decodeEntities(`${item.text}`)}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Comments;