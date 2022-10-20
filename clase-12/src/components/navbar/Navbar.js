import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Logo from '../../assets/images/codo_a_codo_logo.png'

export default function Nav () {
    return (
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    CACFLIX
                </Navbar.Brand>
        </Navbar>


    )
};