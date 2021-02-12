import React from "react";
import propTypes from "prop-types";
import {Container} from "./style";

const Subtitle = ({children}) => {
    return (
        <Container>{children}</Container>
    )
}

Subtitle.propTypes = {
    children: propTypes.any
}

Subtitle.defaultProps = {
    children: null
}

export default Subtitle;