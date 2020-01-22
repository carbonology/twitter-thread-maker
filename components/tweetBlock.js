import { CopyToClipboard } from 'react-copy-to-clipboard';
import ButterToast, {Cinnamon, POS_TOP, POS_CENTER } from 'butter-toast';

class TweetBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charCount: 0,
            countColor: 'green',
            lastLength: 0,
            currentInput: ''
        }

        this.clickEvents = this.clickEvents.bind(this);
        this.charCounter = this.charCounter.bind(this);
        this.setTextState = this.setTextState.bind(this);
        this.activateToast = this.activateToast.bind(this);
    }

    clickEvents (event) {
        this.charCounter(event);
        this.setTextState(event);
    }

    setTextState (event) {
        const input = event.target.value;
        return this.setState({ currentInput: input });
    }

    charCounter (event) {
        const inputLength = event.target.value.length;
        this.setState({ charCount: inputLength });

        if (this.state.charCount >= 240) {
            this.setState({ countColor: 'yellow' });
        }

        if (this.state.charCount >= 280) {
            this.setState({ countColor: 'red' });
        }

        // Keep track of the addition/subtraction of chars
        const difference = inputLength - this.state.lastLength;
        this.setState({ lastLength: inputLength });

        // Add to total
        return this.props.addTotalChar(difference);
    }

    activateToast() {
        ButterToast.raise({
            content: <Cinnamon.Crisp scheme={Cinnamon.Crisp.SCHEME_BLUE}
                content={() => <div>Tweet copied to clipboard!</div>}
                title=""/>
        });
    }

    render() {
        return (
            <div className="tweet-block">
                <p>#{this.props.num}</p>
                <ButterToast 
                    position={{ vertical: POS_TOP, horizontal: POS_CENTER }}
                    className="tweet-block__toast"
                ></ButterToast>
                <textarea onKeyUp={(e) => this.clickEvents(e)} className="tweet-block__textarea"></textarea>
                <div className="tweet-block__bottom">
                    <p className={`tweet-block__char-count tweet-block__char-count--${this.state.countColor}`}>
                        Characters: {this.state.charCount}
                    </p>
                    <CopyToClipboard text={this.state.currentInput} onCopy={ this.activateToast }>
                        <button className="tweet-block__copy-btn">Copy to Clipboard</button>
                    </CopyToClipboard>
                </div>
            </div>
        )
    }
}

export default TweetBlock;
