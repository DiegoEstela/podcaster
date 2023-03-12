import styled from 'styled-components'
import * as styleGlobal from '../../../app/global/styles'


export const Container = styled.div`
    width: 20%;
    height: 80%;
    margin: 40px;
    display:flex;
    flex-direction: column;
    box-shadow: ${styleGlobal.Shadow};
`;

export const Img = styled.img<{ active: boolean}>`
    padding: 10%;
    border-radius: 8px;
    :hover{
        ${(props)=> props.active && 'cursor: pointer'};
        ${(props)=> props.active && `background-color: ${styleGlobal.muted}`};
    }
    
`;


export const Title = styled.h1<{ active: boolean}>`
    margin: 0px 16px;
    padding-top: 16px;
    border-top: 1px solid ${styleGlobal.muted};
    display:flex;
    font-size: 1em;
    font-weight: bold;
    :hover{
        ${(props)=> props.active && 'cursor: pointer'};
    }
`;

export const SubTitle = styled.h2<{ active: boolean}>`
    margin: 5px 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${styleGlobal.muted};
    display:flex;
    font-size: 1em;
    font-style: italic;
    font-weight: normal;
    :hover{
        ${(props)=> props.active && 'cursor: pointer'};
    }
`;


export const DescriptionTitle = styled.div`
    margin: 5px 16px;
    display:flex;
    font-size: 1em;
    font-weight: bold;
`;

export const DescriptionBody = styled.div`
    margin: 5px 16px 16px 16px;
    display:flex;
    font-size: 1em;
    font-style: italic;
    overflow: auto;
    ::-webkit-scrollbar{
        width: 7px;
    }
    ::-webkit-scrollbar-thumb{
        background: ${styleGlobal.primary}
    }

`;


