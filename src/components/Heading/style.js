import styled from "styled-components";
import ds from "../../system";

export const Container = styled.div`
    font-size: ${ds.font.size.lg.value};
    line-height: ${ds.line.height.distant.value};
    font-family: ${ds.font.family.highlight.value};
    font-weight: ${ds.font.weight.bold.value};
    color: ${ds.neutral.color[1].value};
`