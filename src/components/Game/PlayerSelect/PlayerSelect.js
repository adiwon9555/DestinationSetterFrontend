import React, { Component } from 'react';
import styles from './PlayerSelect.scss'
import Quiz from '../Quiz/Quiz'
import avatar from '../../../assets/img_avatar.png';
import ved1 from '../../../assets/vedantu1.png';
import ved2 from '../../../assets/vedantu2.jpeg';
import ved3 from '../../../assets/vedantu3.jpeg';
import ved4 from '../../../assets/vedantu4.jpeg';
import ved5 from '../../../assets/vedantu5.png';
import vedantu from '../../../assets/vedantulogo_white.svg';



class PlayerSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend:false,
            tournament:false,
            forward:false
        }

    }
    friend=()=>{
        this.setState({ friend: true ,tournament: false });
    }
    tournament=()=>{
        this.setState({ tournament: true ,friend: false });
    }

    gotoTour=()=>{
        this.setState({ forward: true });
    }

    render() {
        return(
            <div>
        {!this.state.forward?
        <div className="gameContainer">
            <div className="header">
                <div className="gameHeader">
                    <div className="avatar">
                        <img src={vedantu} alt="Avatar"/>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="nickName">{'@KnightRider'}</div>
                        <div className="avatar">
                            <img src={avatar} alt="Avatar"/>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="gameType">
                <div className="gameTypeTxt">Choose Game Type</div>
                <div className="gameTypeContent">
                    <div className="circles">
                            <div className="wrap">
                                <div className="sticker"></div>
                                <div className="msg">Against System!</div>
                            </div>
                            <div className="wrap"
                            onClick={this.friend}>
                                <div className="sticker"></div>
                                <div className="msg">Challenge Friend</div>
                            </div>
                            <div className="wrap"
                            onClick={this.tournament}>
                                <div className="sticker"></div>
                                <div className="msg">Play Tournament!</div>
                            </div>
                        {/* <div className="circle_container">
                            <div className="circle_main">
                                <div className="circle_text_container">
                                    <div className="circle_text">
                                        Against System
			                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="circle_container">
                            <div className="circle_main">
                                <div className="circle_text_container">
                                    <div className="circle_text">
                                        Challenge  a Friend
			                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="circle_container">
                            <div className="circle_main">
                                <div className="circle_text_container">
                                    <div className="circle_text">
                                        Play Tournament
			                        </div>
                                </div>
                            </div>
                        </div> */}
                    </div>    
                </div>
            </div>
            {this.state.tournament?
            <div className="scheduledMatches">
                <div className="scheduledMatchesTtxt">Scheduled Tournaments</div>
                <div className="cardsContainer">
                    
                    <div className="container">
                        <div className="row">
                        <div className="eachCrdSize">
                            <div className="card">
                            <div className="image">
                                <img src={ved1} width="100%"/>
                            </div>
                            <div className="text">
                                <div className="fab">&#43;</div>
                                <h3>Starts at : 1130hrs</h3>
                                <p>Category : Puzzles</p>
                                <p>No of Perticipants : 20</p>
                                <div className="share">Share</div>
                                <div className="socialMedia">
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/facebook-f.png"/></div>
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/twitter-squared.png"/></div>
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/google-logo.png"/></div>
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/linkedin.png"/></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                        <div className="eachCrdSize">
                            <div className="card">
                            <div className="image">
                                <img src={ved4} width="100%"/>
                            </div>
                            <div className="text">
                                <div className="fab">&#43;</div>
                                <h3>Starts at : 1230hrs</h3>
                                <p>Category : Riddle</p>
                                <p>No of Perticipants : 10</p>
                                <div className="share">Share</div>
                                <div className="socialMedia">
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/facebook-f.png"/></div>
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/twitter-squared.png"/></div>
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/google-logo.png"/></div>
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/linkedin.png"/></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                        <div className="eachCrdSize">
                            <div className="card">
                            <div className="image">
                                <img src={ved3} width="100%"/>
                            </div>
                            <div className="text">
                                <div className="fab">&#43;</div>
                                <h3>Starts at : 1230hrs</h3>
                                <p>Category : Riddle</p>
                                <p>No of Perticipants : 15</p>
                                <div className="share">Share</div>
                                <div className="socialMedia">
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/facebook-f.png"/></div>
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/twitter-squared.png"/></div>
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/google-logo.png"/></div>
                                <div className="socialMediai"><img src="https://img.icons8.com/material/24/000000/linkedin.png"/></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    


                </div>
            </div>
            :''}
            {this.state.friend?
            <div className="oneToOne">
                <div className="oneToOneTxt"> Players available from facebook friends</div>
                <div>
                    <div className="avatar"
                    onClick={this.gotoTour}>
                            <img src={avatar} alt="Avatar"/>
                    </div>
                    <div className="avatar"
                    onClick={this.gotoTour}>
                            <img src={avatar} alt="Avatar"/>
                    </div>
                    <div className="avatar"
                    onClick={this.gotoTour}>
                        <img src={avatar} alt="Avatar"/>
                    </div>
                    <div className="avatar"
                    onClick={this.gotoTour}>
                        <img src={avatar} alt="Avatar"/>
                    </div>
                    <div className="avatar"
                    onClick={this.gotoTour}>
                        <img src={avatar} alt="Avatar"/>
                    </div>
                </div>
                <button onClick={this.props.searchOpponent} style={{float:"right",marginRight:"30px"}} className='btn btn-primary'>
                    Challenge All online
                </button>
                
            </div>
            :''}
        </div>
        :<Quiz/>}
        </div>
        )
    }
}

export default PlayerSelect;
