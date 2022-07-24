import React from 'react';
import Modal from 'react-modal';
import Card from 'react-bootstrap/Card';
import ReactModal from 'react-modal';

export default class ResultSongs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumName: '',
            artistName: '',
            genre: [],
            track: [],
            duration: [],
            albumId: this.props.id,
            showModal: this.props.showModal,
        };
        this.handleAlbumClickClose = this.handleAlbumClickClose.bind(this);
    }

    getDuration(duration) {
        var minutes = Math.floor(duration / 60000);
        var seconds = ((duration % 60000) / 1000).toFixed(0);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        // var sec_num = parseInt(duration, 10); // don't forget the second param
        // var hours = Math.floor(sec_num / 3600);
        // var minutes = Math.floor((sec_num - hours * 3600) / 60);
        // var seconds = sec_num - hours * 3600 - minutes * 60;

        // if (hours < 10) {
        //     hours = '0' + hours;
        // }
        // if (minutes < 10) {
        //     minutes = '0' + minutes;
        // }
        // if (seconds < 10) {
        //     seconds = '0' + seconds;
        // }
        // return hours + ':' + minutes + ':' + seconds;
    }

    fetchApiSongs(url) {
        console.log(url);
        fetch(url, {
            method: 'GET',
            withCredentials: true,
            headers: {
                'X-RapidAPI-Key':
                    '39bbceac0dmsh71ca7ffaa7e6dd0p161a92jsn9848d63f3236',
                'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.track !== null) {
                    if (data.track.length !== 0) {
                        this.setState({
                            albumName: data.track[0]['strAlbum'],
                            artistName: data.track[0]['strArtist'],
                        });
                        for (let i = 0; i < data.track.length; i++) {
                            this.setState((prevState) => ({
                                genre: [
                                    ...prevState.genre,
                                    data.track[i]['strGenre'],
                                ],
                                track: [
                                    ...prevState.track,
                                    data.track[i]['strTrack'],
                                ],
                                duration: [
                                    ...prevState.duration,
                                    data.track[i]['intDuration'],
                                ],
                            }));
                        }
                        console.log(this.state.albumName);
                    }
                }
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) {
            this.fetchApiSongs(
                `https://theaudiodb.p.rapidapi.com/track.php?m=${this.props.id}`
            );
            this.setState({
                albumName: '',
                artistName: '',
                genre: [],
                track: [],
                duration: [],
                showModal: true,
            });
            console.log(this.state.track);
        }
    }
    handleAlbumClickClose() {
        this.setState({ id: '', showModal: false });
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Songs"
                    className="Modal"
                    overlayClassName="Overlay"
                    ariaHideApp={false}
                    onRequestClose={this.handleAlbumClickClose}
                >
                    {this.state.track &&
                        this.state.track.map((item, i) => {
                            return (
                                <Card>
                                    <Card.Header><strong>Title: </strong>{item}</Card.Header>
                                    <Card.Body>
                                        <blockqoute className="blockqoute mb-0">
                                            <p><strong>Artist Name: </strong>{this.state.artistName}</p>
                                        </blockqoute>

                                        <blockqoute className="blockqoute mb-0">
                                            <p><strong>Genre: </strong>{this.state.genre[i]}</p>
                                        </blockqoute>
                                        <blockqoute className="blockqoute mb-0">
                                            <p><strong>Duration: </strong>
                                                {this.getDuration(
                                                    this.state.duration[i]
                                                )}
                                            </p>
                                        </blockqoute>
                                    </Card.Body>
                                </Card>
                            ); // return <li key={i}>{item}</li>;
                        })}
                </Modal>
            </div>
        );
    }
}
ReactModal.defaultStyles = {} // Flushes all of react-modal's styles