import React, { Component } from 'react'
import { Nav, Tab, Container, Col, Row } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img className="w-50" src="https://images.pexels.com/photos/7082446/pexels-photo-7082446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                    <p>Sed et neque sit amet massa interdum vulputate. Ut id massa a orci accumsan interdum ac eget ante. 
                                    Nam non leo sit amet ligula tincidunt dapibus sit amet et ante. 
                                    Quisque ligula elit, accumsan in tempus vitae, interdum venenatis risus. Aliquam odio enim, gravida vel nisl id, pretium dictum nisi. 
                                    Praesent faucibus ipsum tortor, elementum cursus ante mattis ac. Aenean lacinia mi sed metus congue interdum. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className="w-50" src="https://images.pexels.com/photos/6476128/pexels-photo-6476128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                    <p>Sed et neque sit amet massa interdum vulputate. Ut id massa a orci accumsan interdum ac eget ante. 
                                    Nam non leo sit amet ligula tincidunt dapibus sit amet et ante. 
                                    Quisque ligula elit, accumsan in tempus vitae, interdum venenatis risus. Aliquam odio enim, gravida vel nisl id, pretium dictum nisi. 
                                    Praesent faucibus ipsum tortor, elementum cursus ante mattis ac. Aenean lacinia mi sed metus congue interdum. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img className="w-50" src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?cs=srgb&dl=pexels-lukas-574071.jpg&fm=jpg"/>
                                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                    <p>Sed et neque sit amet massa interdum vulputate. Ut id massa a orci accumsan interdum ac eget ante. 
                                    Nam non leo sit amet ligula tincidunt dapibus sit amet et ante. 
                                    Quisque ligula elit, accumsan in tempus vitae, interdum venenatis risus. Aliquam odio enim, gravida vel nisl id, pretium dictum nisi. 
                                    Praesent faucibus ipsum tortor, elementum cursus ante mattis ac. Aenean lacinia mi sed metus congue interdum. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img className="w-50" src="https://images.pexels.com/photos/3728085/pexels-photo-3728085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                    <p>Sed et neque sit amet massa interdum vulputate. Ut id massa a orci accumsan interdum ac eget ante. 
                                    Nam non leo sit amet ligula tincidunt dapibus sit amet et ante. 
                                    Quisque ligula elit, accumsan in tempus vitae, interdum venenatis risus. Aliquam odio enim, gravida vel nisl id, pretium dictum nisi. 
                                    Praesent faucibus ipsum tortor, elementum cursus ante mattis ac. Aenean lacinia mi sed metus congue interdum. </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
