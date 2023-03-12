import styled from 'styled-components'
import * as styleGlobal from '../../../app/global/styles'


export const Container = styled.div`
    margin: 40px 0;
    height: 100%;
    display:flex;
    flex-direction: column;
    box-shadow: ${styleGlobal.Shadow};
    overflow: auto;
    ::-webkit-scrollbar{
        width: 7px;
    }
    ::-webkit-scrollbar-thumb{
        background: ${styleGlobal.primary}
    }
`;


export const Header = styled.div`
    height: 20%;
    
`;

export const Body = styled.div`
    width: 20%;
    margin: 40px;
`;

