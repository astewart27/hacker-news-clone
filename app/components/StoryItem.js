import React, { Component } from 'react';

class StoryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    toggleClass = (e) => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    getTime = (timestamp) => { 
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        var minutes = date.getMinutes();    
        if(hours > 1) {
            return hours + " hours ago";
        } else {
            return minutes + " minutes ago";
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
                        <div className="story-by">by: <a className="username-link" href={`https://news.ycombinator.com/user?id=${this.props.details.by}`}>{this.props.details.by}</a></div>
                        <div className="story-timestamp">{this.getTime(`${this.props.details.time}`)}</div>
                        <div className="story-comments" onClick={this.toggleClass}>{this.props.details.descendants}<span className="comment icon"></span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoryItem;
