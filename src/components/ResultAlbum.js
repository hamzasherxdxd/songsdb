import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import LinesEllipsis from 'react-lines-ellipsis'
import Row from 'react-bootstrap/Row'

export default class ResultAlbum extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            album: [],
            description: [],
            label: [],
            thumbnail: [],
            genre: [],
            artist: [],
        }
    }

    fetchApi(url) {
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
                            }))
                        }
                    }
                }
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.name !== this.props.name) {
            this.fetchApi(
                `https://theaudiodb.p.rapidapi.com/searchalbum.php?s=${this.props.name}`
            )
            this.setState({
                album: [],
                description: [],
                label: [],
                thumbnail: [],
                genre: [],
                artist: [],
            })
        }
    }
    render() {
        return (
            <div className="cont">
                {/* <div>
                    <img src={albumThumb} />
                    <h1>{album}</h1>
                    <p>{description}</p>
                    <div>
                        <span>{genre}</span>
                        <span>{label}</span>
                    </div>
                </div> */}
                <p>Search Results for <strong>"{this.props.name}"</strong></p>
                <Row xs={1} md={6} className="g-4">
                    {this.state.album &&
                        this.state.album.map((item, i) => {
                            return (
                                <Col>
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
                                            <Card.Title>{this.state.genre[i]}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                // <li key={i}>
                                //     <img
                                //         src={this.state.thumbnail[i]}
                                //         width="15%"
                                //     />
                                //     {item}
                                // </li>
                            )
                        })}
                </Row>
                {/* <ul>
                            {this.state.thumbnail && this.state.thumbnail.map(function (item, i) {
                                return <li key={i}>
                                    <img src={item} width="30%" />
                                </li>
                            })}
                            </ul> */}
            </div>
        )
    }
}
