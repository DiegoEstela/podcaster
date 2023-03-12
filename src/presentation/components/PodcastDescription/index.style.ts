import styled from 'styled-components'
import * as styleGlobal from '../../../app/global/styles'


export const Container = styled.div`
    width: 20%;
    margin: 40px;
    display:flex;
    flex-direction: column;
    box-shadow: ${styleGlobal.Shadow};
`;

export const Img = styled.img`
    padding: 10%;
    border-radius: 8px;

`;


export const Title = styled.h1`
    margin: 0px 16px;
    padding-top: 16px;
    border-top: 1px solid ${styleGlobal.muted};
    display:flex;
    font-size: 1em;
    font-weight: bold;
`;

export const SubTitle = styled.h2`
    margin: 5px 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${styleGlobal.muted};
    display:flex;
    font-size: 1em;
    font-style: italic;
    font-weight: normal;


`;


export const DescriptionTitle = styled.div`
    margin: 5px 16px;
    display:flex;
    font-size: 1em;
    font-weight: bold;
`;

export const DescriptionBody = styled.div`
    margin: 5px 16px;
    display:flex;
    font-size: 1em;
    font-style: italic;
    overflow: hidden;

`;


