import React, { Component } from 'react';

import Comments from './Comments';

class StoryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    getTime = (timestamp) => {
        const currentDate = new Date();
        const date = new Date(timestamp * 1000);
        let diff = (currentDate.getTime() - date.getTime()) / 1000;
        diff /= (60 * 60);
        if(Math.abs(Math.round(diff)) > 1) {
            return Math.abs(Math.round(diff)) + " hours ago";
        } else {
            return Math.abs(Math.round(diff)) + " hour ago";
        }
    }

    render() {
        return (
            <div className={`story-item${this.state.active ? ' active' : ''}`}>
                <div className="story-cols">
                    <div className="story-col-title">
                        <a className="story-link" href={this.props.details.url != null ? this.props.details.url : `https://news.ycombinator.com/item?id=${this.props.details.id}`} target="_blank" rel="noopener noreferrer"><h3>{this.props.details.title}</h3></a>
                    </div>
                    <div className="story-row">
                        <div className="story-arrow"><span className="sr-only">upvote arrow</span></div>
                        <div className="story-score">{this.props.details.score}</div>
                        <div className="story-by">by: <a className="username-link" href={`https://news.ycombinator.com/user?id=${this.props.details.by}`} target="_blank" rel="noopener noreferrer">{this.props.details.by}</a></div>
                        <div className="story-timestamp"><a className="story-timestamp-link" href={`https://news.ycombinator.com/item?id=${this.props.details.id}`} target="_blank" rel="noopener noreferrer">{this.getTime(`${this.props.details.time}`)}</a></div>
                        {this.props.details.descendants && 
                            <div className="story-comments" onClick={this.toggleClass}>{this.props.details.descendants}<span className="comment icon"></span></div>
                        }
                    </div>
                    <div className="comments-section">
                        <Comments comments={this.props.details.kids}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryItem;