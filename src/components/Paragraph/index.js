import React from "react";
import propTypes from "prop-types"
import {Container} from "./style";

const Paragraph = ({children}) => {
    return (
        <Container>{children}</Container>
    )
}

Paragraph.propTypes = {
    children: propTypes.any
}

Paragraph.defaultProps = {
    children: null
}

export default Paragraph;