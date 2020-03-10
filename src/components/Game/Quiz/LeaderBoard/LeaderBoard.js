import React from 'react';
import './LeaderBoard.scss'

const Person = props => (
    <div className="list__person">
        <img className="person__image" src={props.personImg} />
        <p className="person__name">{props.personName}</p>
        <p className="person__networth">
            {props.personNetworth}
        </p>
    </div>
)

Person.defaultProps = {
    personImg:
        'https://specials-images.forbesimg.com/imageserve/5ab944eda7ea432fbc1d2d9c/416x416.jpg?background=000000&cropX1=0&cropX2=400&cropY1=0&cropY2=400'
}

const List = props => (
    <div className="list">
        {props.list && props.list.map((person, i) => (
            <Person
                key={i}
                personImg={person.squareImage}
                personName={person.name}
                personNetworth={person.worth / 1000}
            />
        ))}
    </div>
)

const Header = () => (
    <div className="header">
        <img
            className="header__icon"
            src="https://user-images.githubusercontent.com/23297041/55285200-a24e9b00-538f-11e9-8990-d49a162824d1.png"
        />
        <h1 className="header__title">
            Game
          <span>Leaderboard</span>
        </h1>
    </div>
)



export default class Leaderboard extends React.Component {
    state = {
        list: []
    }

    componentDidMount() {
        this.getForbesList()
    }

    getForbesList = () => {
        fetch('https://forbes400.herokuapp.com/api/forbes400')
            .then(res => res.json())
            .then(list => {
                this.setState({ list })
            })
    }

    render() {
        return (
            <div className="app">
                <Header />
                {/* {this.props.list && <List list={this.props.list} />} */}
                <List list={this.state.list}></List>
            </div>
        )
    }
}

