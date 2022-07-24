import React from 'react';
import './App.css';
import NavScrollExample from './components/nav';
import ResultAlbum from './components/ResultAlbum';
import ResultSongs from './components/ResultSongs';
import Footer from './components/Footer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            showModal: false,
        };
    }

    handleChangeNav(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleChangeId(e) {
        this.setState({
            id: e,
            showModal: true,
        });
        console.log(this.state.id);
    }

    render() {
        return (
            <div className="App">
                <NavScrollExample
                    handleChange={this.handleChangeNav.bind(this)}
                />
                <ResultAlbum
                    name={this.state.name}
                    handleChangeId={this.handleChangeId.bind(this)}
                />
                <ResultSongs
                    id={this.state.id}
                    showModal={this.state.showModal}
                />
                <Footer className="bot"/>
            </div>
        );
    }
}
