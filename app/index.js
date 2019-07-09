import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const JSON_QUERY = ".json?print=pretty";

class App extends React.Component{

    async componentDidMount() {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories${JSON_QUERY}`);
        const json = await response.json();
        console.log(json);
    }

    render(){
        return(
            <div>Hello World</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))