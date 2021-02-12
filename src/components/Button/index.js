import React from "react";
import propTypes from "prop-types";
import {Container} from "./style";

const Button = ({ title, color, backgroundColor, onClick }) => {
    return (
        <Container color={color} backgroundColor={backgroundColor} onClick={onClick}>{title}</Container>
    )
}

Button.propTypes = {
    title: propTypes.string,
    color: propTypes.string,
    backgroundColor: propTypes.string
}

Button.defaultProps = {
    title: "OK",
    color: "",
    backgroundColor: ""
}

export default Button;