import React, { Component } from 'react'
import { Container, Media, Row, Col, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Sed et neque sit amet massa interdum vulputate. Ut id massa a orci accumsan interdum ac eget ante. 
                                Nam non leo sit amet ligula tincidunt dapibus sit amet et ante. Quisque ligula elit, accumsan in tempus vitae, interdum venenatis risus. 
                                Aliquam odio enim, gravida vel nisl id, pretium dictum nisi. Praesent faucibus ipsum tortor, elementum cursus ante mattis ac. 
                                Aenean lacinia mi sed metus congue interdum.  
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Sed et neque sit amet massa interdum vulputate. Ut id massa a orci accumsan interdum ac eget ante. 
                                Nam non leo sit amet ligula tincidunt dapibus sit amet et ante. Quisque ligula elit, accumsan in tempus vitae, interdum venenatis risus. 
                                Aliquam odio enim, gravida vel nisl id, pretium dictum nisi. Praesent faucibus ipsum tortor, elementum cursus ante mattis ac. 
                                Aenean lacinia mi sed metus congue interdum.  
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Sed et neque sit amet massa interdum vulputate. Ut id massa a orci accumsan interdum ac eget ante. 
                                Nam non leo sit amet ligula tincidunt dapibus sit amet et ante. Quisque ligula elit, accumsan in tempus vitae, interdum venenatis risus. 
                                Aliquam odio enim, gravida vel nisl id, pretium dictum nisi. Praesent faucibus ipsum tortor, elementum cursus ante mattis ac. 
                                Aenean lacinia mi sed metus congue interdum.  
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Sed et neque sit amet massa interdum vulputate. Ut id massa a orci accumsan interdum ac eget ante. 
                                Nam non leo sit amet ligula tincidunt dapibus sit amet et ante. Quisque ligula elit, accumsan in tempus vitae, interdum venenatis risus. 
                                Aliquam odio enim, gravida vel nisl id, pretium dictum nisi. Praesent faucibus ipsum tortor, elementum cursus ante mattis ac. 
                                Aenean lacinia mi sed metus congue interdum.  
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>PHP</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                Sed et neque sit amet massa interdum vulputate. Ut id massa a orci accumsan interdum ac eget ante. 
                                Nam non leo sit amet ligula tincidunt dapibus sit amet et ante. Quisque ligula elit, accumsan in tempus vitae, interdum venenatis risus. 
                                Aliquam odio enim, gravida vel nisl id, pretium dictum nisi. Praesent faucibus ipsum tortor, elementum cursus ante mattis ac. 
                                Aenean lacinia mi sed metus congue interdum. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
