import React, { Component } from 'react';
import './App.css';
import Card from "./card";

class App extends Component {

    constructor() {
        super();
        this.state = {
            cards: [1,2,3,4],
            current: 0,
            counter: 0,
            boolVar: false,
            cardsArray: [],
            cardsitself: []
        };
        this.changeCount = this.changeCount.bind(this)
    }
    changeCount(e) {
        if(this.state.counter>= 1){
            console.log('enough')
            return;
        }
        this.setState({
            counter: this.state.counter + 1
        });
        console.log(this.state.counter)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="App">
                <h1>cards</h1>
                <div className="cards">
                    {this.state.cards.map((elem, i) => {
                        return <Card key={i} cardsitself={this.state.cardsitself} cardsArray={this.state.cardsArray} changeCount={this.changeCount} customId={i} currentId={this.state.current} counter={this.state.counter}/>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
