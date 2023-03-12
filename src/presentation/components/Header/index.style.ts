import styled from 'styled-components'
import * as styleGlobal from '../../../app/global/styles'

export const Container = styled.header`
    display:flex;
    justify-content: space-around;
    height: 8vh;
    border-bottom: 1px solid ${styleGlobal.muted};
    img{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 200px;
    }
`;

export const Loader = styled.div`
    display:flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

`;
