import React, { Component } from 'react';
import styles from './Quiz.scss';
import Leaderboard from './LeaderBoard/LeaderBoard';
import MessageSection from './messages/messageSection';
import Question from './Question/Question.js';

class Quiz extends Component {
    constructor() {
        super();
        this.state = {
           
            
            leaderBoard:[],
            activeChannel: {},
            users: [],
            activeUser: {},
            messages: [],
            name:'',
            questions:[],
            qcount:0,

            startGame:false
        }
    }
    componentDidMount() {
        this.recieveLeaderBoardList()
        let name='';
        do{
            name = prompt("Enter you name");
        }while(name == null || name == "" );
        this.setState({
            name
        })
        this.startMatch();
        // do{
        //     alert("Wait till other player joins");
        // }while(this.state.startGame!=true);
        alert("Wait till other player joins");
        
        this.props.stompClient.subscribe('/topic/greetings',  (greeting)=> {
            this.onAddMessage(JSON.parse(greeting.body));
        });
        fetch("http://ds-games.vedantu.com/getQuestions")
      .then(res => res.json())
      .then(
        (result) => {
            this.setState({
                questions:result,
                activeChannel: {
                    name: 'game1',
                    id: 1
                }
            })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        //   this.setState({
        //       questions:[
        //           {
        //               text:'q1',
        //               solution:1,
        //               option:[
        //                   'a','b','c','d'
        //               ]
        //           },
        //           {
        //             text:'q1',
        //             solution:1,
        //             option:[
        //                 'a','b','c','d'
        //             ]
        //         },
        //         {
        //             text:'q1',
        //             solution:1,
        //             option:[
        //                 'a','b','c','d'
        //             ]
        //         },

        //         {
        //             text:'q1',
        //             solution:1,
        //             option:[
        //                 'a','b','c','d'
        //             ]
        //         },
        //       ]
        //   });

        console.log('encountered error');
        
        }
      )
        
    }

    startMatch=()=>{
        this.props.stompClient.subscribe('/topic/startTest', function (data) {
            console.log(data);
            
            if(data){
                this.setState({
                    startGame:true
                })
            }
        });
    }
    onAddMessage=(data)=>{
        let message={
            name:data.name,
            body:data.body
        }
        const { messages } = this.state;
        messages.push(message);
        this.setState({ messages });
    }
    addMessage = (body) => {
        this.props.stompClient.send('/app/hello',{}, JSON.stringify({'name': this.state.name,body}));
    }
    onQuizEnd=()=>{
        console.log("qcount",this.state.qcount);
        console.log("length",this.state.questions.length);
        
        if((this.state.qcount+1)>=this.state.questions.length){
            
            alert("You have done great")

        }else {
            this.setState({
                qcount:this.state.qcount+1
            })
        }
    }
    sendQuestionStat=(m)=>{
        let data={
            studentName:this.state.name,
            totalMarks:m
        }
        this.props.sendQuestionStat(data);
    }
    recieveLeaderBoardList=()=>{
        this.props.stompClient.subscribe('/topic/updateLeaderBoard',  (greeting)=>{
            console.log(greeting);
            
            this.setState({
                leaderBoard:JSON.parse(greeting.body)
            })
        });
    }



    render() {
        
        
        return (
            <div className='quiz'>
                <div className='questionContainer'>
                    {this.state.questions && this.state.questions.length>1 &&<Question sendQuestionStat={this.sendQuestionStat} onQuizEnd={this.onQuizEnd} questionDetail={this.state.questions[this.state.qcount]} count={this.state.qcount+1}></Question>}
                </div>
                <div className='right'>

                    <div className='leaderBoard'>

                        <Leaderboard list={this.state.leaderboard}></Leaderboard>
                    </div>
                    <div className='chatContainer'>
                        <MessageSection name={this.state.name} messages={this.state.messages} addMessage={this.addMessage} activeChannel={this.state.activeChannel}></MessageSection>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;  
