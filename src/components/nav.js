import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class NavScrollExample extends React.Component {
    // const { data, setData } = useFetch();
    // function handleChange(event) {
    //   // (event) => setData({ ...data, slug: event.target.value })
    //   data.slug = searchTerm.current.value;
    //   setData({ ...data, slug: data.slug });
    //   console.log(data);
    //   console.log(data.results);
    //     showData();
    // }

    // function showData() {
    //   console.log(data.results);
    //     return <Result results={data.results} />;
    // }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         val: '',
    //         results: [],
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    //     // this.renderResult = this.renderResult.bind(this)
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(
    //         'PrevState: ' + prevState.val + 'CurrentState: ' + this.state.val
    //     )
    //     if (prevState.val !== this.state.val) {
    //         this.fetchData(this.state.val)
            
    //     }
    //     console.log((this.state.results))
    // }

    // handleChange(e) {
    //     // console.log('val at handlechange: ' + e.target.value)
    //     // console.log('State value: ' + this.state.val)
    //     this.setState({
    //         val: e.target.value,
    //     })
    //     console.log(this.state.val)
    //     // this.fetchData(this.state.val);
    // }

    // fetchData(artist_name) {
    //     artist_name = artist_name.replace(/ /g, '_')
    //     console.log('artist name: ' + artist_name)
    //     // const timeoutId = setTimeout(() => {
    //     const fetch = async () => {
    //         try {
    //             const res = await got.get(`/searchalbum.php?s=${artist_name}`)
    //             this.setState({
    //                 ...this.state.val,
    //                 results: res.data,
    //             })
    //             console.log(this.state.results)
    //             // setData({...data, results: res.data});
    //         } catch (err) {
    //             console.error(err)
    //         }
    //     }
    //     fetch()

    //     // , 1000)
    //     // return () => clearTimeout(timeoutId)
    // }

    // handleRender = (event) => {
    //     this.props.parentCallback(this.state.val);
    // }

    // renderResult() {
    //     console.log(this.state.val);
    //     return <Result query={this.state.val} />
    // }

    // let searchTerm = React.createRef();

    // const handleChange = () => {
    //   console.log(searchTerm.current.value);
    //   return <Result query={searchTerm.current.value} />;
    // }

    // function handleChange(){
    //   return <Result query={searchTerm.current.value} />;
    // }

    // handleChange(e) {
    //     e.target.select();
    // }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Container fluid>
                        <Navbar.Brand href="#">Songs DB</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => this.props.handleChange(e)}
                                />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {}
            </div>
        )
    }
}

export default NavScrollExample
