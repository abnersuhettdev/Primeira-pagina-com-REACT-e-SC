import styled from "styled-components";

interface BannerI{
    height: string,
    fontSize: string
}

export const Banner = styled.figure<BannerI>`
    height: ${props => props.height};
    background-image: url('https://www.pexels.com/pt-br/foto/fotografia-de-paisagem-de-corpo-d-agua-1001682/');
    background-size: cover;
    display:flex;
    align-items: center;
    justify-content: center;

    & > h1, h2{
        font-size: ${props => props.theme.fontSize};
    }
`
   


