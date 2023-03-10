import styled from 'styled-components'
import * as styleGlobal from '../../../app/global/styles'

export const Card = styled.header`
    height: 30vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    :hover{
        cursor: pointer;
    }

 
`;

export const CardFooter = styled.header`
    height: 15vh;
    width: 15vw;
    box-shadow: ${styleGlobal.Shadow};
    :hover{
        background-color: ${styleGlobal.muted}
    }
`;

export const CardHeader = styled.header`
    height: 10vh;
    width: 15vw;
    display: flex;
    justify-content: center;
   
`;

export const Img = styled.img`
    max-height: 15vh;
    width: 8vw;
    position: absolute;
    object-fit: cover;
    border-radius: 100%;
`;

export const Title = styled.h2`
    margin-top: 20%;
    padding: 0 10px;
    font-size: 1em;
    text-transform: uppercase;
    color: black;
`;

export const Paragraph = styled.p`
    color: black;
`;