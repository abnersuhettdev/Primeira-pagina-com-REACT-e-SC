import styled from "styled-components"

interface ContainerI {
    height: string
    width: string
}

interface Img{
    src?: string
}


export const ContainerIMG = styled.div<ContainerI>`
    height: ${props => props.height};
    width: ${props => props.width};
    background-image: url('https://images.pexels.com/photos/1048033/pexels-photo-1048033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerHeader = styled.div<ContainerI>`
    height: ${props => props.height}; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 80px;
`
export const IconsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export const Icons = styled.img<Img>`
    width: 100px;
    height: 100px;
    src: ${props => props.src};
`

export const Title = styled.h2`
    font-size: 20px;
    font-weight: bold;
`
export const Text = styled.p`
    font-size: 16px;
    font-weight: normal;
`
export const ContainerContent = styled.div`
    display: flex;
`
export const DivContent = styled.div<Img>`
    height: 500px;
    width: 50vw;
    background: ${props => props.theme.colors.contentBackground};
    background-image: url(${props => props.src ?? 'none'});
    background-size: cover;
    padding: ${props => props.src ? 'none' : '100px'};
`
export const Footer = styled.div<ContainerI>`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    font-size: 12px;
`

export const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 8px;
    color: ${props => props.theme.colors.primary};
`