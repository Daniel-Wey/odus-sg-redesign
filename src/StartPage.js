import React, { Component } from 'react'
import About from './About.js'
import Home from './Home.js'
//import ItemLeft from './itemLeft.js'
import ItemRight from './ItemRight.js'



import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

import { BrowserRouter, Route, Switch, Link, Router, withRouter} from "react-router-dom";

class StartPage extends React.Component {
    render() {
        return (
            <Switch>
                {/*<Route path="/itemLeft">
                    <ItemLeft/>
                </Route>*/}

                {/*<Route path="/itemRight">
                    <ItemRight/>
            </Route>*/}

                <Route path="/about">
                    <About/>
                </Route>
                <Route exact path="/itemRight" component={withRouter(ItemRight)} />
                <Route path = "/">
                    <Home/>
                </Route>

            </Switch>
        )
    }
} 

export default StartPage