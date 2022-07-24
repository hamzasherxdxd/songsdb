import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import LinesEllipsis from 'react-lines-ellipsis';
import Row from 'react-bootstrap/Row';

export default class ResultAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            id: [],
            album: [],
            description: [],
            label: [],
            thumbnail: [],
            genre: [],
            artist: [],
            showModal: false,
            modalId: '',
        };
        this.handleAlbumClickClose = this.handleAlbumClickClose.bind(this);
        this.handleAlbumClickOpen = this.handleAlbumClickOpen.bind(this);
    }
    handleAlbumClickOpen(id) {
        // console.log(id)
        this.props.handleChangeId(id);
        this.setState({ showModal: true, modalId: id });
    }

    handleAlbumClickClose() {
        this.setState({ showModal: false });
    }

    fetchApiAlbum(url) {
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
                if (data.album !== null) {
                    if (data.album.length !== 0) {
                        for (let i = 0; i < data.album.length; i++) {
                            this.setState((prevState) => ({
                                id: [...prevState.id, data.album[i]['idAlbum']],
                                album: [
                                    ...prevState.album,
                                    // ...this.state.album,
                                    data.album[i]['strAlbum'],
                                ],
                                description: [
                                    ...prevState.description,
                                    data.album[i]['strDescriptionEN'],
                                ],
                                label: [
                                    ...prevState.label,
                                    data.album[i]['strLabel'],
                                ],
                                artist: [
                                    ...prevState.artist,
                                    data.album[i]['strArtist'],
                                ],
                                thumbnail: [
                                    ...prevState.thumbnail,
                                    data.album[i]['strAlbumThumb'],
                                ],
                                genre: [
                                    ...prevState.genre,
                                    data.album[i]['strGenre'],
                                ],
                            }));
                        }
                    }
                }
            });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.name !== this.props.name) {
            this.fetchApiAlbum(
                `https://theaudiodb.p.rapidapi.com/searchalbum.php?s=${this.props.name}`
            );
            this.setState({
                id: [],
                album: [],
                description: [],
                label: [],
                thumbnail: [],
                genre: [],
                artist: [],
            });
        }
    }

    render() {
        // console.log(this.state.id)
        return (
            <div className="cont">
                <Row xs={1} md={6} className="g-4">
                    {this.state.album &&
                        this.state.album.map((item, i) => {
                            return (
                                <Col>
                                    <p>{this.state.id[i]}</p>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={this.state.thumbnail[i]}
                                        />
                                        <Card.Body>
                                            <Card.Title>{item}</Card.Title>
                                            <Card.Text>
                                                <LinesEllipsis
                                                    text={
                                                        this.state.description[
                                                            i
                                                        ]
                                                    }
                                                    maxLine="3"
                                                    ellipsis="..."
                                                    trimRight
                                                    basedOn="letters"
                                                />
                                            </Card.Text>
                                            <Card.Title>
                                                {this.state.genre[i]}
                                            </Card.Title>
                                            <button
                                                onClick={(event) =>
                                                    this.handleAlbumClickOpen(
                                                        this.state.id[i]
                                                    )
                                                }
                                            >
                                                Click
                                            </button>
                                            {/* <Modal
                                                isOpen={this.state.showModal}
                                                contentLabel="Songs"
                                                className="Modal"
                                                overlayClassName="Overlay"
                                                ariaHideApp={false}
                                                onRequestClose={
                                                    this.handleAlbumClickClose
                                                }
                                            >
                                                <ResultSongs
                                                    id={this.state.modalId}
                                                />
                                                <button onClick={this.handleAlbumClickClose}>Close</button>
                                            </Modal> */}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                </Row>
            </div>
        );
    }
}
