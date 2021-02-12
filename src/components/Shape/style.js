import styled from "styled-components";
import ds from "../../system";

export const Container = styled.div`
    border-radius: ${ds.border.size.none.value};
    padding: ${ds.spacing.size.lg.value};
    border-width: ${ds.border.size.thin.value};
    border-color: ${ds.neutral.color[4].value};
    background-color: ${ds.neutral.color[5].value};
`