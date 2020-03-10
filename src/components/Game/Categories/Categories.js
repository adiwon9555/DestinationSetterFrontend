import React, { Component } from 'react';
import './Categories.scss';
import { Card } from 'reactstrap';
import vedantu from '../../../assets/vedantulogo_white.svg';
import user_image from '../../../assets/img_avatar.png';

class Categories extends Component {
    render() {
        return (
            <div className="user_home_div">
                <div className="user_details_div">
                    <div>
                        <img src={vedantu} alt="" className="vedantu_logo"></img>
                    </div>
                    <div>
                        <img className="user_image" src={user_image} alt="" />
                    </div>
                    <div>
                        <span className="user_nick_name">{'@KnightRider'}</span>
                    </div>
                </div>
                <div className="Different_category">
                    <div className="Category_name">
                        Game Categories
                    </div>
                    <div className="all_categories_display_div">
                        <Card className="Card_main" onClick={this.props.getCategories}>
                            <img src="https://cdn4.iconfinder.com/data/icons/startup-line-3/64/Startup-06-512.png" className="differ_categories" alt="" />
                            <span className="diff_category_name">Puzzle</span>
                        </Card>
                        <Card className="Card_main" onClick={this.props.getCategories}>
                        <img src="https://cdn1.iconfinder.com/data/icons/soft-skills-glyph-black/2048/7597_-_Questioning_Skills-512.png" className="differ_categories" alt="" />
                            <span className="diff_category_name">Quiz</span>
                        </Card>
                        <Card className="Card_main" onClick={this.props.getCategories}>
                        <img src="https://cdn0.iconfinder.com/data/icons/navigation-elements/512/joystick-control-game-navigation-instrument-input-gaming-512.png" alt="" className="differ_categories" />
                            <span className="diff_category_name">Game</span>
                        </Card>
                        <Card className="Card_main" onClick={this.props.getCategories}>
                        <img src="https://cdn2.iconfinder.com/data/icons/sports-and-games-vol-02-1/32/sudoku-puzzle-game-math-riddle-512.png" alt="" className="differ_categories" />
                            <span className="diff_category_name">Riddle</span>
                        </Card>
                        <Card className="Card_main" onClick={this.props.getCategories}>
                        <img src="https://cdn3.iconfinder.com/data/icons/objects-1/100/square_academic_cap_graduate_cap_mortarboard-512.png" alt="" className="differ_categories" />
                            <span className="diff_category_name">Academy</span>
                        </Card>
                        <Card className="Card_main" onClick={this.props.getCategories}>
                        <img src="https://cdn0.iconfinder.com/data/icons/indoor-games/32/game_fun_entertainment_mask_identical-512.png" alt="" className="differ_categories" />
                            <span className="diff_category_name">Fun</span>
                        </Card>
                    </div>
                </div>
            </div>

        )
    }
}

export default Categories;
