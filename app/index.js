import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Stories from './components/Stories';

import './index.css';
import './styles/Header.css';
import './styles/Stories.css';

const JSON_QUERY = ".json?print=pretty";

class App extends Component{

    state = {
        news: []
    }

    async componentDidMount() {
        const primary = await fetch(`https://hacker-news.firebaseio.com/v0/topstories${JSON_QUERY}`);
        const data = await primary.json();
        const stories = data.slice(0,30);
        this.getNews(stories);
    }

    async getNews(stories) {

        const result = stories.map(async (story) => {
            const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${story}${JSON_QUERY}`);
            const data = await res.json();
            return data;
        });

        const finalResults = await Promise.all(result);

        this.setState({ news: finalResults });
    }

    render(){
        return(
            <div className="hacker-news-wrapper">
                <Header/>
                {this.state.news != null && <Stories stories={this.state.news}/>}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))