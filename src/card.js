import React, {Component} from 'react';
import back from './back.jpg';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            shown: false,
            removed: false
        }
        this.random = this.random.bind(this)
        this.showCard = this.showCard.bind(this)
    }

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;

    }

    componentDidMount() {
        this.random()
    }

    random() {
        let self = this;
        let current = self.randomInteger(1, 4);
        console.log(current)
        self.setState({
            current: current
        });
    }

    showCard(e) {
        this.setState({
            shown: !this.state.shown,
        });
        let self = this;
        this.props.cardsArray.push(self.state.current)
        this.props.cardsitself.push(self)
        if (this.props.cardsArray.length === 2) {
            if (this.props.cardsArray[0] === this.props.cardsArray[1]) {
                this.props.cardsitself.map((elem, i) => {
                    elem.setState({
                        removed: !this.state.removed,
                    });
                })

            } else {
                console.log('not match')
                this.props.cardsitself.map((elem, i) => {
                    elem.setState({
                        shown: !this.state.shown,
                    });
                })

            }
        }
    }

    render() {
        return (
            <div className={"card-container "} onClick={this.props.changeCount}>
                <div
                    className={"card " + (this.state.shown === true ? 'opened' : '') + ' ' + (this.state.removed === true ? 'removed' : '')}
                    data-id={this.props.customId} onClick={(e) => this.showCard(e)}>
                    <div className="side"><img src={back} alt=""/></div>
                    <div className="side back"><span className="current">{this.state.current}</span></div>
                </div>
            </div>

        )
    }
}

export default Card;