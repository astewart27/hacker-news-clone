import React from 'react';
import StoryItem from './StoryItem';

class Stories extends React.Component {

    render() {
        return (
            <div className="stories-component">
                {this.props.stories.map((item, index) => {
                    return(
                        <div key={index}>
                            <StoryItem details={item}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Stories;