import styled from 'styled-components'
import * as styleGlobal from '../../../app/global/styles'
export const Container = styled.header`
    display:flex;
    justify-content: space-around;
    height: 8vh;
    border-bottom: 1px solid ${styleGlobal.muted};
`;

export const Title = styled.h1`
    display:flex;
    font-size: 2em;
    color: ${styleGlobal.primary};

`;

export const Loader = styled.div`
    display:flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

`;
