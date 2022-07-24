import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class NavScrollExample extends React.Component {
    _handleKeyDown(e){
        if(e.key === "Enter"){
            this.props.handleChange(e);
        }
    }
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
                                <Nav.Link>Type artist name to search for albums.</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => this.props.handleChange(e)}
                                    onKeyDown={this._handleKeyDown}
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
