import styled from 'styled-components'
import * as styleGlobal from '../../../app/global/styles'


export const Title = styled.h2`
  font-size: 1.2em;
  margin: 20px;
`

export const Body = styled.div`
  width: 70vw;
  height: 48vh;
  margin: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: ${styleGlobal.Shadow};

`


export const DescripcionBody = styled.div`
  margin: 0px 40px;
  height: 32vh;
  p{
    font-size: 1.5em;
    font-style: italic;
   
  }
  overflow: auto;
    ::-webkit-scrollbar{
        width: 7px;
    }
    ::-webkit-scrollbar-thumb{
        background: ${styleGlobal.primary}
    }
`

export const AudioPlayer= styled.audio`
  width: 60%;
  margin: 16px;
  display: flex;
  justify-content: center;
`

export const Footer= styled.footer`
  width: 100%;
  text-align: center;
  background-color: ${styleGlobal.primary};
  display: flex;
  justify-content: center;
  position: relative;
`


