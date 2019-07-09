import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Stories from './components/Stories';

import './index.css';
import './styles/Header.css';
import './styles/Stories.css';

const JSON_QUERY = ".json?print=pretty";

class App extends React.Component{

    state = {
        stories: []
    }

    async componentDidMount() {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories${JSON_QUERY}`);
        const data = await response.json();
        const stories = data.slice(0,30);
        console.log(stories);
        this.setState({ stories });
    }

    render(){
        return(
            <div className="hacker-news-wrapper">
                <Header/>
                <Stories stories={this.state.stories}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))