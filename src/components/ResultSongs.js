import React from 'react';
import Modal from 'react-modal';

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

    componentDidMount() {
        //     console.log(this.state.albumId);
        //     console.log(this.state.albumName);
        //     if (
        //         // this.props.id === this.state.albumId &&
        //         this.state.albumName === ''
        //     ) {
        //         this.showResults();
        //     }
        // }
        // showResults() {
        //     this.fetchApiSongs(
        //         `https://theaudiodb.p.rapidapi.com/track.php?m=${this.props.id}`
        //     );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ASDF');
        if (prevProps.id !== this.props.id) {
            console.log('asd');
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
    // handleAlbumClickOpen() {
    //     this.fetchApiSongs(
    //         `https://theaudiodb.p.rapidapi.com/track.php?m=${this.state.albumId}`
    //     )
    //     this.setState({ showModal: true })
    // }

    handleAlbumClickClose() {
        this.setState({ showModal: false });
    }
    render() {
        return (
            // <ReactModal
            //     isOpen={this.state.showModal}
            //     contentLabel="Result Songs"
            //     className="Modal"
            //     overlayClassName="Overlay"
            //     onRequestClose={this.handleAlbumClickClose}
            // ></ReactModal>
            <div>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Songs"
                    className="Modal"
                    overlayClassName="Overlay"
                    ariaHideApp={false}
                    onRequestClose={this.handleAlbumClickClose}
                >
                    <ul>
                        {this.state.track &&
                            this.state.track.map((item, i) => {
                                return <li key={i}>{item}</li>;
                            })}
                    </ul>
                </Modal>
            </div>
        );
    }
}
