import React from 'react'
import logo from './logo.svg'
import './App.css'
import NavScrollExample from './components/nav'
import ResultAlbum from './components/ResultAlbum'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 2368106,
          name: "",
        }
    }
    handleChange(e) {
      this.setState({
        name: e.target.value,
      });
    }

    render() {
        return (
            <div className="App">
                <NavScrollExample handleChange={this.handleChange.bind(this)} />
                <ResultAlbum name={this.state.name} />
            </div>
        )
    }
}