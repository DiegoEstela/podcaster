import styled from 'styled-components'
import * as styleGlobal from '../../../app/global/styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: grid;
  margin-left: 8vw;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`;


export const Title = styled.h1`
    display:flex;
    font-size: 2em;
    color: ${styleGlobal.primary};

`;