import React from 'react';
import Scroll from '../components/Scroll'
import CardList from '../components/CardList';
import SearchComponent from '../components/SearchComponent';
import "./App.css";



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(response => response.json()).then(users =>this.setState({robots: users}))
    }

    render() {
        const filterrobots = this.state.robots.filter(robot => {
            return (
                robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            );
        })

        return(
            <div className="tc">
                <h1 className="head f1">Robot Friends</h1>
                <SearchComponent searchChange = {this.onSearchChange} />
                <Scroll>
                    <CardList Robots = {filterrobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;