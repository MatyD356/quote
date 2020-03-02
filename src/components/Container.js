import React from 'react'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'If you can dream it, you can achieve it',
            author: 'Zig Ziglar',
            jsonData: null
        }
    }
    async componentDidMount() {
        const url = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        const response = await fetch(url)
        const data = await response.json();
        this.setState({
            jsonData: data
        })
    }
    handleClick = () => {
        let randNum = Math.floor(Math.random() * (0 - this.state.jsonData.quotes.length) + this.state.jsonData.quotes.length)
        this.setState({
            quote: this.state.jsonData.quotes[randNum].quote,
            author: this.state.jsonData.quotes[randNum].author,
            loading: false
        })

    };
    render() {
        return (
            <div id="quote-box" className="Container">
                <div className="text-container" id="text">{this.state.quote}</div>
                <div className='author-container' id="author">{this.state.author}</div>
                <div className="down-line">
                    <a className="tweet-link" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.quote}" ${this.state.author}`} id='tweet-quote'>
                    Tweet quote</a>
                    <button className='quote-btn' id="new-quote" onClick={this.handleClick}>New quote</button>
                </div>
            </div>
        )
    }
}
export default Container