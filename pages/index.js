import Head from '../utils/headLinks';
import Meta from '../utils/meta'
import TweetBlock from '../components/tweetBlock'
import OutLink from '../components/out-link';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks : [<TweetBlock />],
            totalChars: 0,
            lastLength: 0
        }
        this.addTweet = this.addTweet.bind(this);
        this.charCount = this.charCount.bind(this);
    }

    addTweet () {
        const blocks = this.state.blocks;
        blocks.push(<TweetBlock />);
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight)
        }, 250);
        return this.setState({ blocks });
    }

    charCount (num) {
        return this.setState({ totalChars: this.state.totalChars + num  });
    }

    render() {
        return (
            <>
                <Meta
                    pageTitle="Twitter Thread Maker"
                    description="Easily create big 'ol Twitter threads. Made by Mike Carbone."
                    img="/images/seo.jpg"
                />
                <Head />
                <main className="home wrap">
                    <div className="header wrap">
                        <h1 className="header__title">Twitter Thread Maker</h1>
                        <h2 className="header__byline">
                            by <OutLink className="header__link" href="https://twitter.com/crbnlgy">mike carbone</OutLink>
                        </h2>
                    </div>
                    <p className="home__text">Total Tweets: {this.state.blocks.length}</p>
                    <p className="home__text">Total Characters: {this.state.totalChars}</p>
                    {
                        this.state.blocks.map((_block, index) => {
                            return <TweetBlock key={index} num={index+1} addTotalChar={this.charCount} />
                        })
                    }
                    <button className="home__add-tweet" onClick={ this.addTweet }>+ Add Tweet</button>
                </main>
            </>
        )
    }
}

export default Home;
