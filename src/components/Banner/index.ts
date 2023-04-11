import styled from "styled-components";

interface BannerI{
    height: string,
    fontSize: string
}

interface RowI{
    reverse?: boolean
}



export const Banner = styled.figure<BannerI>`
    height: ${props => props.height};
    background-image: url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #023E8A;
`

export const IconsSection = styled.section`
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    & > div > img{
        height: 80px;
        width: 80px;
    }

    &>div> h2{
        font-size: 20px;
    }
    &> div> p{
        font-size: 12px;
        opacity: 60%;
    }
`

export const Row = styled.div<RowI>`
    display: flex;
    flex-direction: ${props=> props.reverse ? 'row-reverse' : 'row'};

    & > div { 
        width: 50%;
        height: 500px;
    }

    & > div > img{
        width: 100%;
        height: 100%;
    }
`
export const Text = styled.div`
    padding: 80px;

`


