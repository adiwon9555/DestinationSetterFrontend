import React, { Component } from 'react';
import styles from './Question.scss'


const QUIZTIME = 10;
class Question extends Component {
    constructor() {
        super();
        this.state = {
            quizEnd: false,
            time: 0,
            time1: 0,
            isOn: false,
            start: 0,
            yourAnswerStatus: -2,
            clickable: true
        }

    }

    componentDidMount() {
        this.startTimer();
        this.startTimer1();
    }

    startTimer = () => {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1000);
    }
    startTimer1 = () => {
        this.setState({
            isOn: true,
            time1: this.state.time1,
            start: Date.now() - this.state.time1
        })
        this.timer1 = setInterval(() => this.setState({
            time1: Date.now() - this.state.start
        }), 1000);
    }
    stopTimer = () => {
        if (Math.round(this.state.time / 1000) >= QUIZTIME || this.state.quizEnd == true) {
            // this.setState({ isOn: false })
            clearInterval(this.timer)
        }

    }
    stopTimer1 = () => {
        if (Math.round(this.state.time1 / 1000) >= QUIZTIME) {
            // this.setState({ isOn: false })
            clearInterval(this.timer1)

        }
        if (Math.round(this.state.time1 / 1000) == QUIZTIME) {
            this.setState({
                quizEnd: false,
                time: 0,
                time1: 0,
                isOn: false,
                start: 0,
                yourAnswerStatus: -2,
                clickable: true
            }, () => {
                new Promise((res,rej)=>{
                    this.props.onQuizEnd();
                    res();
                })

                this.startTimer();
                this.startTimer1();
            })


        }

    }
    resetTimer = () => {
        this.setState({ time: 0, isOn: false })
    }

    // timerSet=()=>{

    //     let a=setInterval(()=>{
    //         this.setState({
    //             time: Date.now() - this.state.time
    //         })
    //     },1000)
    // }
    optionSelect = (i) => {
        if(i==this.props.questionDetail.solution){
            this.props.sendQuestionStat((QUIZTIME - Math.round(this.state.time / 1000))/2);
        }else{
            this.props.sendQuestionStat((QUIZTIME - Math.round(this.state.time / 1000))/2);
        }
        this.setState({
            yourAnswerStatus: i,
            quizEnd: true,
            clickable: false
        })
    }
    setOptionClassName = (i) => {
        if (this.state.yourAnswerStatus == i) {
            if (this.state.yourAnswerStatus == this.props.questionDetail.solution) {
                return "options correct"
            } else {
                return "options incorrect"
            }
        } else {
            if (this.state.quizEnd == true && i == this.props.questionDetail.solution) {
                return "options correct"
            } else {
                return "options"
            }
        }
    }
    render() {
        this.stopTimer();
        this.stopTimer1();
        let options = this.props.questionDetail.option;
        return (
            <div className='questionDiv'>
                <div className='timer'>
                    <div className='circleContainer'>
                        <div className='label'>You:-&nbsp;</div><div className='circle'>
                            {QUIZTIME - Math.round(this.state.time / 1000)}
                        </div>
                    </div>
                    <div className='circleContainer'>
                        <div className='label'>Time Left:-&nbsp;</div><div className='circle'>
                            {QUIZTIME - Math.round(this.state.time1 / 1000)}
                        </div>
                    </div>

                </div>
                <div className='question'>
                    {this.props.count}) {this.props.questionDetail.text}
                </div>
                <div className='optionContainer'>
                    {options && options.map((option, i) => (
                        <div key={i} className={this.setOptionClassName(i+1)} onClick={() => this.state.clickable && this.optionSelect(i+1)}>{(i + 1) + ") "}{option} </div>
                    ))
                    }
                </div>
                {this.state.quizEnd && <div className='waitingDiv'>
                    Waiting for your opponent
                        </div>}
            </div>
        )
    }
}

export default Question