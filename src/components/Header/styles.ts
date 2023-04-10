import styled from "styled-components"


export const Container = styled.div`
    height: 300px;
    background:${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
`