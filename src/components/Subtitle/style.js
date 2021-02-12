import styled from "styled-components";
import ds from "../../system";

export const Container = styled.div`
    font-size: ${ds.font.size.md.value};
    line-height: ${ds.line.height.medium.value};
    font-family: ${ds.font.family.highlight.value};
    font-weight: ${ds.font.weight.medium.value};
    color: ${ds.neutral.color[2].value};
`