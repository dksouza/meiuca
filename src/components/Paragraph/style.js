import styled from "styled-components";
import ds from "../../system";

export const Container = styled.p`
    font-size: ${ds.font.size.xs.value};
    line-height: ${ds.line.height.distant.value};
    font-family: ${ds.font.family.highlight.value};
    font-weight: ${ds.font.weight.regular.value};
    color: ${ds.neutral.color[2].value};
`