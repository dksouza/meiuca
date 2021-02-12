import React from "react";
import propTypes from "prop-types";
import {Container} from "./style";

const Shape = ({children}) => {
    return (
        <Container>{children}</Container>
    )
} 

Shape.propTypes = {
    children: propTypes.any
}

Shape.defaultProps = {
    children: null
}

export default Shape;