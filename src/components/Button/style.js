import styled from "styled-components";
import ds from "../../system";

export const Container = styled.button`
    font-size: ${ds.font.size.sm.value};
    line-height: ${ds.line.height.tight};
    border-radius: ${ds.border.size.none.value};
    border: ${ds.border.size.none.value};
    padding: ${ds.spacing_squish.size.xs.v.value};
    font-family: ${ds.font.family.highlight.value};
    font-weight: ${ds.font.weight.medium.value};
    color: ${props => props.color ? props.color : ds.neutral.color[5].value};
    background: ${props => props.backgroundColor ? props.backgroundColor : ds.brand.color.primary[3].value};
`