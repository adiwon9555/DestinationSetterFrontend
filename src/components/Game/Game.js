import React, { Component } from 'react';
import Quiz from './Quiz/Quiz'
import Categories from './Categories/Categories';
import PlayerSelect from './PlayerSelect/PlayerSelect';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            stompClient: null,
            isClick:false,
            mainPage:false,
        }
    }

    getCategories = () => {
        this.setState({
            isClick:true,
        })
    }
    componentDidMount() {
        
        this.setState({
            stompClient:window.stompClient
        })

        // this.connect();
    }

    // connect = () => {
    //     var socket = new SockJS('http://ds-games.vedantu.com:8080/gs-guide-websocket');
    //     stompClient = Stomp.over(socket);
    //     stompClient.connect({}, function (frame) {
    //         setConnected(true);
    //         console.log('Connected: ' + frame);
    //         stompClient.subscribe('/topic/greetings', function (greeting) {
    //             showGreeting(JSON.parse(greeting.body).content);
    //         });
    //     });
    // }
    componentWillUnmount() {
        this.disconnect();
    }
    disconnect = () => {
        if (this.state.stompClient !== null) {
            this.state.stompClient.disconnect();
        }
        console.log("Disconnected");
    }
    sendQuestionStat=(data)=>{
        this.state.stompClient.send("/app/updateLeaderBoard", {}, JSON.stringify(data));
    }

    searchOpponent=(data)=>{
        this.state.stompClient.send("/app/startTest", {});
        this.setState({
            mainPage:true
        })
    }
    
    
    render() {

        return (
            <div>
                {
                  (this.state.mainPage==false &&  this.state.isClick )? <PlayerSelect searchOpponent={this.searchOpponent}/> : this.state.mainPage==false && <Categories getCategories={this.getCategories}></Categories>
                }
                {this.state.stompClient && this.state.mainPage && <Quiz sendQuestionStat={this.sendQuestionStat} stompClient={this.state.stompClient}></Quiz>}
            </div>
        )
    }
}

export default Game;
