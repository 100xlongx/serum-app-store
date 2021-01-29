import React from "react";

import styled from "styled-components";

import { Navbar, Button, Alignment } from "@blueprintjs/core";

import logo from "../img/serum-logo.png"

const StyledLogo = styled.img`
    width:20px;
`

const StyledNavbar = styled(Navbar)`
`

const Header = () => {
    return(
        <StyledNavbar className="bp3-dark">
            <Navbar.Group align={Alignment.LEFT}>
            <StyledLogo src={logo} alt="Logo"/>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
        </StyledNavbar>
    )
}

export default Header;