import * as React from 'react';
import {Button, Form, FormControl, Nav, Navbar as BSNavbar, NavDropdown} from "react-bootstrap";
import {User} from "../types/user";

export type NavbarProps = {
    loggedIn: false | User
};

const Navbar = function (props: NavbarProps) {
    const {loggedIn} = props;

    const form = loggedIn ?
        <p>Hi {loggedIn.username}</p> :
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>;
    return <BSNavbar bg="light" expand="lg">
        <BSNavbar.Brand href="#home">React-Bootstrap</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-BSNavbar-nav"/>
        <BSNavbar.Collapse id="basic-BSNavbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {form}
        </BSNavbar.Collapse>
    </BSNavbar>;
}

export default Navbar;
