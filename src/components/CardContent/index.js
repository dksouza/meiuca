import React from "react";
import propTypes from "prop-types";
import {Heading, Subtitle, Paragraph, Button, Shape} from "../../components";
import {ContainerHeading, ContainerSubtitle, ContainerParagraph} from "./style";

const CardContent = ({heading, subtitle, paragraph, onClick, titleButton}) => {
    return (
        <Shape>
            <ContainerHeading>
                <Heading>{heading}</Heading>
            </ContainerHeading>
            <ContainerSubtitle>
                <Subtitle>{subtitle}</Subtitle>
            </ContainerSubtitle>
            <ContainerParagraph>
                <Paragraph>{paragraph}</Paragraph>
            </ContainerParagraph>
            <Button title={titleButton} onClick={onClick} />
        </Shape>
    )
}

CardContent.propTypes = {
    heading: propTypes.string,
    subtitle: propTypes.string,
    paragraph: propTypes.string,
    onClick: propTypes.func,
    titleButton: propTypes.string
}

CardContent.defaultProps = {
    heading: "",
    subtitle: "",
    paragraph: "",
    onClick: () => {},
    titleButton: ""
}

export default CardContent;