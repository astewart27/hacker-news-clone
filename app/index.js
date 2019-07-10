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
        news: []
    }

    async componentDidMount() {
        const primary = await fetch(`https://hacker-news.firebaseio.com/v0/topstories${JSON_QUERY}`);
        const data = await primary.json();
        const stories = data.slice(0,30);
        this.getNews(stories);
    }

    getNews(stories) {
        const result = [];
        stories.map((story) => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${story}${JSON_QUERY}`)
            .then(res => res.json())
            .then(data => {
                if(!result.includes(data)) {
                    result.push(data);
                }
            });
        });
        this.setState({news: result});
    }

    render(){
        return(
            <div className="hacker-news-wrapper">
                <Header/>
                {this.state.news && 
                    <Stories stories={this.state.news}/>
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))