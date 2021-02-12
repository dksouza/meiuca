import React from "react";
import propTypes from "prop-types"; 
import {Container} from "./style";

const Heading = ({ children }) => {
    return (
        <Container>{children}</Container>
    )
}

Heading.propTypes = {
    children: propTypes.any
}

Heading.defaultProps = {
    children: null
}

export default Heading;