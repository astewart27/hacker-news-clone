import React from 'react';

const StoryItem = (props) => (
    <div className="story-item">
        <div className="story-cols">
            <a className="story-link" href={props.details.url} target="_blank" rel="noopener noreferrer"><h3>{props.details.title}</h3></a>
            <div className="story-row">
                <div className="story-arrow"><span className="sr-only">upvote arrow</span></div>
                <div className="story-score">{props.details.score}</div>
                <div className="story-by">by: <a className="username-link" href={`https://news.ycombinator.com/user?id=${props.details.by}`}>{props.details.by}</a></div>
            </div> 
        </div>
    </div>
);

export default StoryItem;